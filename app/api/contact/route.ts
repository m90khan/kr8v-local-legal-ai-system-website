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
  limiter: Ratelimit.slidingWindow(3, "1 h"),
})

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    "127.0.0.1"

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

    // Send notification email
    await resend.emails.send({
      from: "KR8V <khan@kr8v.agency>",
      to: ["khan@kr8v.agency"],
      subject: `New ${inquiryLabel} from ${body.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Company:</strong> ${body.company || "Not provided"}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryLabel}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    })

    // Send auto-reply email
    const subjectsList = inquiryLabel
    await resend.emails.send({
      from: "KR8V <khan@kr8v.agency>",
      to: [body.email],
      subject: "Message Received — KR8V",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 40px auto; background: #ffffff; padding: 40px; border: 1px solid #eeeeee; border-radius: 8px; }
              .logo { font-size: 24px; font-weight: 700; letter-spacing: -1px; color: #000000; text-decoration: none; margin-bottom: 30px; display: block; }
              .header { font-size: 18px; font-weight: 500; color: #111111; margin-bottom: 16px; }
              .body-text { font-size: 15px; line-height: 1.6; color: #444444; margin-bottom: 24px; }
              .highlight { color: #000000; font-weight: 600; }
              .footer { font-size: 12px; color: #888888; border-top: 1px solid #eeeeee; padding-top: 20px; margin-top: 40px; }
            </style>
          </head>
          <body>
            <div class="container">
              <a href="https://ndaagent.com" class="logo">KR8V</a>
              <div class="header">Hi ${body.name},</div>
              <div class="body-text">
                Thank you for reaching out to <span class="highlight">KR8V</span>. We&apos;ve received your inquiry regarding <span class="highlight">${subjectsList}</span>.
              </div>
              <div class="body-text">
                Our team will review your message and get back to you within <span class="highlight">24 hours</span>.
              </div>
              <div class="body-text">
                In the meantime, feel free to explore our <a href="https://ndaagent.com/vision">product vision</a> to learn more about how KR8V is building the future of private legal intelligence.
              </div>
              <div class="footer">
                &copy; ${new Date().getFullYear()} KR8V. All rights reserved.
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
