import { Resend } from "resend"
import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(5, "1 h"),
})

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    "127.0.0.1" ||
    "localhost"

  const { success: limitReached } = await ratelimit.limit(ip)
  if (!limitReached) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 })
  }

  try {
    const body = await req.json()

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ success: true })
    }

    // Validate required fields
    if (!body.name || !body.email || !body.inquiryType || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Verify Turnstile token
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: body.token || "",
          remoteip: ip,
        }),
      }
    )

    const verification = await verifyRes.json()

    if (!verification.success) {
      return NextResponse.json(
        {
          error: "Security verification failed.",
          details: verification["error-codes"],
        },
        { status: 403 }
      )
    }

    // Format inquiry type for display
    const inquiryLabels: Record<string, string> = {
      demo: "Demo Request",
      pricing: "Pricing Question",
      partnership: "Partnership",
      other: "Other",
    }
    const inquiryLabel = inquiryLabels[body.inquiryType] || body.inquiryType

    // Shared email styles matching globals.css
    const emailStyles = `
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background-color: #F5F5F5;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background: #FFFFFF;
          padding: 40px;
          border: 1px solid #E5E5E5;
          border-radius: 8px;
        }
        .logo {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -1px;
          color: #1A1A1A;
          text-decoration: none;
          margin-bottom: 30px;
          display: block;
        }
        .logo-accent {
          color: #1447e6;
        }
        .section-title {
          font-size: 14px;
          font-weight: 600;
          color: #1447e6;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .header {
          font-size: 20px;
          font-weight: 600;
          color: #1A1A1A;
          margin-bottom: 20px;
        }
        .body-text {
          font-size: 15px;
          line-height: 1.6;
          color: #1A1A1A;
          margin-bottom: 16px;
        }
        .muted-text {
          color: #71717A;
        }
        .highlight {
          color: #1A1A1A;
          font-weight: 600;
        }
        .highlight-accent {
          color: #1447e6;
          font-weight: 600;
        }
        .field-label {
          font-size: 12px;
          font-weight: 600;
          color: #71717A;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        .field-value {
          font-size: 15px;
          color: #1A1A1A;
          margin-bottom: 16px;
        }
        .divider {
          border: 0;
          border-top: 1px solid #E5E5E5;
          margin: 24px 0;
        }
        .footer {
          font-size: 12px;
          color: #71717A;
          border-top: 1px solid #E5E5E5;
          padding-top: 20px;
          margin-top: 32px;
        }
        .cta-button {
          display: inline-block;
          background: #1447e6;
          color: #FFFFFF;
          padding: 12px 24px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          margin-top: 8px;
        }
        .cta-button:hover {
          background: #1447e6;
        }
      </style>
    `

    // Send notification email to admin
    await resend.emails.send({
      from: "Lexon AI <lexon@p9ix.com>",
      to: ["lexon@p9ix.com"],
      subject: `New ${inquiryLabel} inquiry from ${body.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <title>New Inquiry</title>
            ${emailStyles}
          </head>
          <body>
            <div class="container">
              <a href="https://lexon.p9ix.com" class="logo">Lexon AI</a>

              <div class="section-title">New Contact Form Submission</div>
              <div class="header">${inquiryLabel} Inquiry</div>

              <div class="field-label">Name</div>
              <div class="field-value">${body.name}</div>

              <div class="field-label">Email</div>
              <div class="field-value">${body.email}</div>

              <div class="field-label">Company</div>
              <div class="field-value">${body.company || "Not provided"}</div>

              <div class="field-label">Inquiry Type</div>
              <div class="field-value">${inquiryLabel}</div>

              <hr class="divider" />

              <div class="field-label">Message</div>
              <div class="body-text" style="white-space: pre-line;">${body.message}</div>

              <hr class="divider" />

              <div class="footer">
                This email was generated automatically via P9IX contact system.
              </div>
            </div>
          </body>
        </html>
      `,
    })

    // Send auto-reply email to user
    await resend.emails.send({
      from: "Lexon AI <lexon@p9ix.com>",
      to: [body.email],
      subject: "Message Received - Lexon AI",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <title>Message Received</title>
            ${emailStyles}
          </head>
          <body>
            <div class="container">
              <a href="https://lexon.p9ix.com" class="logo">Lexon AI</a>

              <div class="header">Hi ${body.name},</div>

              <div class="body-text">
                Thank you for reaching out to <span class="highlight-accent">Lexon AI</span>. We've received your inquiry regarding <span class="highlight">${inquiryLabel}</span>.
              </div>

              <div class="body-text">
                Our team will review your message and get back to you within <span class="highlight">24 hours</span>.
              </div>

              <div class="body-text">
                In the meantime, feel free to explore our <a href="https://lexon.p9ix.com/vision" class="highlight-accent">product vision</a> to learn more about how LEXON is building the future of private legal intelligence.
              </div>

                       <a href="https://lexon.p9ix.com" class="cta-button">Learn More</a>

              <div class="footer">
                &copy; ${new Date().getFullYear()} P9IX. All rights reserved.
              </div>
            </div>
          </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
