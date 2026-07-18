"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { COMPANY } from "@/lib/constants"

export default function PrivacyPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen bg-background px-6 py-32"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last updated: May 2026</p>
          </div>

          <div className="space-y-8">
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-chart-2/5 p-8">
              <h2 className="mb-4 text-2xl font-bold">About This Policy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  This Privacy Policy applies only to the{" "}
                  <strong className="text-foreground">Lexon AI website</strong>{" "}
                  ({COMPANY.website}). It describes how we collect, use, and
                  protect information gathered through this landing page.
                </p>
                <p>
                  This policy does{" "}
                  <strong className="text-foreground">not</strong> apply to the
                  Lexon AI software deployed on your infrastructure. The
                  deployed product operates entirely within your environment
                  under your control.
                </p>
                <p>
                  For our broader company privacy practices, see the{" "}
                  <a
                    href={COMPANY.privacyPolicy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    Kr8v Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">
                1. Information We Collect
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">
                    Contact Form Data:
                  </strong>{" "}
                  When you fill out our contact form, we collect your name,
                  email address, company name (optional), inquiry type, and
                  message content.
                </p>
                <p>
                  <strong className="text-foreground">
                    Website Usage Data:
                  </strong>{" "}
                  We use Google Analytics to understand how visitors interact
                  with our website. This service collects anonymized data about
                  pages visited, time spent on site, and general geographic
                  location.
                </p>
                <p>
                  <strong className="text-foreground">Booking Data:</strong>{" "}
                  When you schedule a demo through our booking system, the
                  scheduling provider collects information necessary to
                  facilitate the appointment.
                </p>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">
                2. Deployed Software - Zero Data Collection
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">
                    This is the most important aspect of our privacy approach:
                  </strong>
                </p>
                <p>
                  When you deploy{" "}
                  <strong className="text-foreground">Lexon AI</strong> on your
                  infrastructure,{" "}
                  <strong className="text-foreground">
                    the software collects zero telemetry, sends zero analytics,
                    and transmits zero data back to us
                  </strong>
                  . {COMPANY.name} has no access to, collects, stores, or
                  transmits any of your contract data or usage information.
                </p>
                <ul className="list-inside list-disc space-y-2">
                  <li>Your contracts never leave your network</li>
                  <li>No telemetry, crash reporting, or usage analytics</li>
                  <li>No external API calls to {COMPANY.name} systems</li>
                  <li>
                    All AI processing happens locally on your infrastructure
                  </li>
                  <li>
                    We have zero visibility into your documents, analysis
                    results, or how you use the product
                  </li>
                </ul>
                <p>
                  If you configure the product to use external AI providers
                  (e.g., OpenAI, Anthropic), your data is subject to those
                  providers&apos; privacy policies. You control which providers
                  are used and should review their terms independently.
                </p>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">
                3. Cookies and Tracking
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Cookies and analytics are used{" "}
                  <strong className="text-foreground">
                    only on this landing page
                  </strong>
                  . The deployed Lexon AI software does not use cookies,
                  tracking, or analytics of any kind.
                </p>

                <div className="rounded-lg border border-border bg-muted/50 p-4">
                  <h3 className="mb-2 font-bold">
                    Essential Cookies (Required)
                  </h3>
                  <p className="text-sm">
                    These cookies are necessary for the website to function
                    properly. They include session management, security tokens,
                    and theme preferences.
                    <br />
                    <span className="text-xs">
                      No consent required - always active
                    </span>
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted/50 p-4">
                  <h3 className="mb-2 font-bold">
                    Analytics Cookies (Optional)
                  </h3>
                  <p className="text-sm">
                    We use Google Analytics to collect anonymized data about how
                    visitors use our site. This helps us improve user
                    experience.
                    <br />
                    <span className="text-xs">
                      Cookies: <code>_ga</code>, <code>_gid</code>,{" "}
                      <code>_gat_gtag_G-SLV*</code>
                    </span>
                  </p>
                </div>

                <p>
                  When you use our cookie consent banner, you can Accept All or
                  Reject non-essential cookies. Your preference is stored for 6
                  months.
                </p>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">
                4. Third-Party Services
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We use the following third-party services:</p>

                <div className="rounded-lg border border-border bg-muted/50 p-4">
                  <h3 className="mb-2 font-bold">Google Analytics</h3>
                  <p className="text-sm">
                    We use Google Analytics to understand how visitors interact
                    with our website. Google Analytics uses cookies to collect
                    anonymized usage statistics. You can opt out by rejecting
                    analytics cookies.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted/50 p-4">
                  <h3 className="mb-2 font-bold">Zoho Bookings</h3>
                  <p className="text-sm">
                    When you book a demo, you may be redirected to Zoho
                    Bookings&apos;s scheduling service. If you choose to use
                    Zoho Bookings, their privacy policy will apply. We recommend
                    reviewing Zoho&apos;s privacy policy at{" "}
                    <a
                      href="https://www.zoho.com/privacy.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline"
                    >
                      zoho.com/privacy
                    </a>
                    .
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted/50 p-4">
                  <h3 className="mb-2 font-bold">Resend</h3>
                  <p className="text-sm">
                    We use Resend to send email communications. When you contact
                    us, your email data is processed solely for the purpose of
                    responding to your inquiry. Resend&apos;s privacy policy
                    applies.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted/50 p-4">
                  <h3 className="mb-2 font-bold">Cloudflare Turnstile</h3>
                  <p className="text-sm">
                    Our contact form uses Cloudflare Turnstile for spam
                    protection. This service may collect minimal data for
                    security purposes. Review Cloudflare&apos;s privacy policy
                    for details.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">
                5. How We Use Your Information
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-inside list-disc space-y-2">
                  <li>
                    To respond to your inquiries and provide customer support
                  </li>
                  <li>
                    To send you information about our products and services
                  </li>
                  <li>To improve our website based on analytics data</li>
                  <li>To schedule demo appointments via Zoho Bookings</li>
                  <li>To prevent spam and abuse of our contact form</li>
                </ul>
                <p>
                  We will never sell your personal information to third parties
                  or use it for purposes unrelated to our services.
                </p>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">6. Data Retention</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We retain contact form submissions for as long as necessary to
                  respond to your inquiry and for a reasonable period
                  thereafter. Analytics data is retained in anonymized form for
                  up to 26 months.
                </p>
                <p>
                  If you book a demo via Zoho Bookings, that data is subject to
                  Zoho&apos;s privacy policy and retention practices.
                </p>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">7. Your Rights</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  You have the following rights regarding your personal data:
                </p>
                <ul className="list-inside list-disc space-y-2">
                  <li>
                    <strong>Right to Access:</strong> Request a copy of the data
                    we hold about you
                  </li>
                  <li>
                    <strong>Right to Rectification:</strong> Request correction
                    of inaccurate data
                  </li>
                  <li>
                    <strong>Right to Erasure:</strong> Request deletion of your
                    personal data
                  </li>
                  <li>
                    <strong>Right to Restrict Processing:</strong> Request
                    limitation of data processing
                  </li>
                  <li>
                    <strong>Right to Data Portability:</strong> Request your
                    data in a portable format
                  </li>
                  <li>
                    <strong>Right to Object:</strong> Object to processing of
                    your data
                  </li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us at{" "}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-primary underline"
                  >
                    {COMPANY.email}
                  </a>
                  .
                </p>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">8. Data Security</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal data against unauthorized access,
                  alteration, disclosure, or destruction.
                </p>
                <p>
                  For the deployed Lexon AI product, security is handled
                  entirely by your organization&apos;s infrastructure. We
                  recommend following best practices for self-hosted
                  applications, including network isolation, access controls,
                  and encryption at rest.
                </p>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">
                9. International Data Transfers
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {COMPANY.name} is registered in {COMPANY.address}. If you are
                  located in the European Union or European Economic Area,
                  please note that we may transfer your data outside of these
                  regions. Any such transfers will be done in compliance with
                  applicable data protection laws.
                </p>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">
                10. Changes to This Policy
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with an updated &quot;Last
                  updated&quot; date. We encourage you to review this policy
                  periodically.
                </p>
              </div>
            </Card>

            <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-chart-2/5 p-8">
              <h2 className="mb-4 text-2xl font-bold">11. Contact Us</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p>
                    <strong className="text-foreground">{COMPANY.name}</strong>
                  </p>
                  <p>
                    <span className="text-sm text-muted-foreground">
                      {COMPANY.structure.aiDivision} is the AI division of{" "}
                      {COMPANY.structure.company}. {COMPANY.structure.product}{" "}
                      is the legal AI product built by{" "}
                      {COMPANY.structure.aiDivision}.
                    </span>
                  </p>
                  <p className="text-sm">
                    Registered by: {COMPANY.registration.owner}
                  </p>
                  <p className="text-sm">{COMPANY.registration.authority}</p>
                  <p className="text-sm">
                    Registration No: {COMPANY.registration.regNo}
                  </p>
                  <p className="text-sm">
                    Reference No: {COMPANY.registration.refNo}
                  </p>
                  <p>{COMPANY.address}</p>
                  <p>
                    Email:{" "}
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-primary underline"
                    >
                      {COMPANY.email}
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <a
                      href={COMPANY.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline"
                    >
                      {COMPANY.website}
                    </a>
                  </p>
                  <p>
                    Company Privacy Policy:{" "}
                    <a
                      href={COMPANY.privacyPolicy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline"
                    >
                      {COMPANY.privacyPolicy}
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
