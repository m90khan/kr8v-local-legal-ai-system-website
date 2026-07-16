"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { COMPANY } from "@/lib/constants"

export default function TermsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <main
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center bg-background px-6 py-32"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">Last updated: May 2026</p>
          </div>

          <div className="space-y-8">
            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">
                1. Acceptance of Terms
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By accessing or using the Lexon AI website, product, or any
                  related services (collectively, the &quot;Services&quot;), you
                  agree to be bound by these Terms of Service (&quot;Terms&quot;).
                  If you do not agree to these Terms, please do not use our
                  Services.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you
                  and {COMPANY.name}. By using our Services, you represent that
                  you are at least 18 years of age and have the legal capacity
                  to enter into this agreement.
                </p>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">
                2. Description of Service
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">
                    Lexon AI
                  </strong>{" "}
                  is an AI-powered contract analysis tool designed to help users
                  review and analyze legal documents for potential risks.
                </p>
                <p>
                  The Lexon AI product is deployed locally on the user&apos;s
                  infrastructure. All contract processing occurs entirely on the
                  user&apos;s device or servers, and no contract data is
                  transmitted to {COMPANY.name}&apos;s systems.
                </p>
                <p>The Services include:</p>
                <ul className="list-inside list-disc space-y-2">
                  <li>Contract document analysis and risk assessment</li>
                  <li>Clause-level risk identification</li>
                  <li>
                    Decision support recommendations (Safe, Review, High Risk)
                  </li>
                  <li>Audit logging and reporting</li>
                  <li>Related support and documentation</li>
                </ul>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">3. User Eligibility</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  You must be at least 18 years of age to use our Services. By
                  using the Services, you represent and warrant that you meet
                  this requirement.
                </p>
                <p>
                  If you are using the Services on behalf of an organization,
                  you represent that you have the authority to bind that
                  organization to these Terms.
                </p>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">4. Acceptable Use</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>You agree not to use the Services to:</p>
                <ul className="list-inside list-disc space-y-2">
                  <li>
                    Analyze contracts that you do not have the legal right to
                    review
                  </li>
                  <li>
                    Upload or process any content that is illegal, fraudulent,
                    or violates any third-party rights
                  </li>
                  <li>
                    Attempt to reverse engineer, decompile, disassemble, or
                    otherwise discover the source code or underlying algorithms
                    of the Lexon AI product
                  </li>
                  <li>
                    Bypass any security measures or access controls put in place
                    by the Services
                  </li>
                  <li>
                    Use the Services for any purpose that violates applicable
                    laws or regulations
                  </li>
                  <li>
                    Resell, sublicense, or distribute the Services without our
                    express written permission
                  </li>
                </ul>
                <p>
                  {COMPANY.name} reserves the right to suspend or terminate
                  access to the Services for violations of these Terms.
                </p>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">
                5. Intellectual Property
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Your Content:</strong> You
                  retain ownership of all contracts, documents, and data that
                  you process using the Services (&quot;Your Content&quot;).{" "}
                  {COMPANY.name} does not claim any ownership rights over Your
                  Content.
                </p>
                <p>
                  <strong className="text-foreground">
                    {COMPANY.name} IP:
                  </strong>{" "}
                  The Lexon AI product, website, and all related software,
                  designs, text, graphics, logos, and other content provided
                  through the Services are the exclusive property of{" "}
                  {COMPANY.name} or its licensors and are protected by
                  intellectual property laws.
                </p>
                <p>
                  You are granted a limited, non-exclusive, non-transferable
                  license to use the Services for their intended purpose as long
                  as you comply with these Terms.
                </p>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">
                6. AI-Assisted Review — Important Disclaimer
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="rounded-lg border-2 border-destructive/30 bg-destructive/5 p-4">
                  <p className="font-bold text-destructive">
                    Legal Disclaimer: Lexon AI Provides Decision Support, NOT
                    Legal Advice
                  </p>
                </div>
                <p>
                  <strong className="text-foreground">
                    Lexon AI is designed as a decision support tool
                  </strong>
                  , not a replacement for professional legal counsel. The
                  analysis, recommendations, and risk assessments provided by
                  Lexon AI are intended to assist you in reviewing contracts,
                  not to provide legal advice.
                </p>
                <p>By using Lexon AI, you acknowledge and agree that:</p>
                <ul className="list-inside list-disc space-y-2">
                  <li>
                    The output from Lexon AI should not be construed as legal
                    advice or as a legal opinion
                  </li>
                  <li>
                    {COMPANY.name} is not a law firm and does not employ
                    licensed attorneys
                  </li>
                  <li>
                    The Services do not create an attorney-client relationship
                  </li>
                  <li>
                    You should consult with a qualified attorney for any legal
                    matters, especially high-stakes or complex agreements
                  </li>
                  <li>
                    Risk assessments and recommendations are based on pattern
                    recognition and AI analysis, which may not catch all legal
                    issues or be accurate in all contexts
                  </li>
                </ul>
                <p>
                  {COMPANY.name} makes no representations or warranties about
                  the completeness, accuracy, or reliability of any analysis
                  provided by the Services.
                </p>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">
                7. Licensing
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Perpetual License with Annual Maintenance:</strong>{" "}
                  Lexon AI is licensed under a perpetual license model. Upon
                  purchase, you receive a perpetual license to use the software
                  indefinitely. Your annual maintenance renewal provides:
                </p>
                <ul className="list-inside list-disc space-y-2">
                  <li>Access to software updates and new features</li>
                  <li>Bug fixes and security patches</li>
                  <li>Technical support during the maintenance period</li>
                </ul>
                <p>
                  If you choose not to renew your annual maintenance, you retain
                  the right to use the last version you received under your
                  perpetual license. However, you will no longer receive updates,
                  bug fixes, or technical support until you renew.
                </p>
                <p>
                  <strong className="text-foreground">
                    Enterprise License:
                  </strong>{" "}
                  For larger organizations or those requiring advanced features,
                  custom deployment, or dedicated support, an Enterprise License
                  is available. Contact us for pricing and terms specific to
                  enterprise deployments.
                </p>
                <p>
                  All licenses are non-transferable. You may not sublicense,
                  sell, or distribute the product without express written
                  consent from {COMPANY.name}.
                </p>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">
                8. Warranty Disclaimer
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The Services and Lexon AI product are provided &quot;as is&quot;
                  and &quot;as available&quot; without any warranties of any kind,
                  either express or implied, including but not limited to:
                </p>
                <ul className="list-inside list-disc space-y-2">
                  <li>
                    Implied warranties of merchantability or fitness for a
                    particular purpose
                  </li>
                  <li>
                    Warranties of accuracy, completeness, or reliability of
                    analysis results
                  </li>
                  <li>
                    Warranties that the Services will be uninterrupted,
                    error-free, or secure
                  </li>
                </ul>
                <p>
                  {COMPANY.name} does not warrant that the AI analysis will
                  identify all legal risks or issues in any contract. The
                  product is designed as a decision support tool and should not
                  be relied upon as the sole basis for legal decisions.
                </p>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">
                9. Limitation of Liability
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  To the maximum extent permitted by law, {COMPANY.name} and its
                  officers, directors, employees, and agents shall not be liable
                  for any indirect, incidental, special, consequential, or
                  punitive damages, including without limitation:
                </p>
                <ul className="list-inside list-disc space-y-2">
                  <li>
                    Loss of profits, revenue, data, or business opportunities
                  </li>
                  <li>
                    Damages resulting from reliance on the Services or any
                    decisions made based on the Services
                  </li>
                  <li>
                    Damages arising from security breaches, hacking, or
                    unauthorized access to your systems
                  </li>
                  <li>
                    Any disputes arising from contracts analyzed using the
                    Services
                  </li>
                </ul>
                <p>
                  {COMPANY.name}&apos;s total liability arising out of or
                  related to the Services shall not exceed the amount paid by
                  you for the Services in the twelve (12) months preceding the
                  claim.
                </p>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">10. Indemnification</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  You agree to indemnify, defend, and hold harmless{" "}
                  {COMPANY.name} and its officers, directors, employees, and
                  agents from and against any claims, liabilities, damages,
                  losses, and expenses (including reasonable legal fees) arising
                  out of or related to:
                </p>
                <ul className="list-inside list-disc space-y-2">
                  <li>Your use of the Services</li>
                  <li>Your violation of these Terms</li>
                  <li>
                    Your violation of any rights of a third party (including
                    intellectual property rights)
                  </li>
                  <li>
                    Any contracts or agreements you analyze using the Services
                  </li>
                  <li>
                    Your use of external AI providers with the Lexon AI product
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">
                11. External AI Providers
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Lexon AI is designed to support various AI inference
                  configurations, including local models and external API
                  providers. When you configure the product to use external AI
                  providers (such as OpenAI, Anthropic, or others):
                </p>
                <ul className="list-inside list-disc space-y-2">
                  <li>
                    You are responsible for reviewing and agreeing to the
                    provider&apos;s terms of service and privacy policy
                  </li>
                  <li>
                    Your contract data sent to external providers is subject to
                    their data handling practices
                  </li>
                  <li>
                    {COMPANY.name} is not responsible for any data shared with
                    third-party AI providers
                  </li>
                  <li>
                    You are responsible for ensuring compliance with applicable
                    data protection regulations when using external providers
                  </li>
                </ul>
                <p>
                  We recommend using local AI inference for maximum data
                  privacy and control.
                </p>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">
                12. Data and Privacy
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Your use of the Services is also governed by our Privacy
                  Policy. Please review the Privacy Policy at{" "}
                  <a href="/privacy" className="text-primary underline">
                    /privacy
                  </a>{" "}
                  for information about how we collect, use, and protect your
                  data.
                </p>
                <p>
                  With respect to the Lexon AI product deployed locally, all
                  contract data processing occurs on your infrastructure, and{" "}
                  {COMPANY.name} has no access to your documents or analysis
                  results. The deployed software does not collect telemetry,
                  analytics, or transmit any data to {COMPANY.name}.
                </p>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">
                13. Modifications to Service
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {COMPANY.name} reserves the right to modify, suspend, or
                  discontinue any aspect of the Services at any time, including
                  pricing, features, and terms. We will endeavor to provide
                  notice of material changes.
                </p>
                <p>
                  Continued use of the Services after any changes constitutes
                  acceptance of the modified terms.
                </p>
              </div>
            </Card>

            <Card className="border-2 border-border p-8">
              <h2 className="mb-4 text-2xl font-bold">14. Governing Law</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of{" "}
                  <strong className="text-foreground">{COMPANY.address}</strong>
                  , without regard to its conflict of law principles.
                </p>
                <p>
                  Any disputes arising under or in connection with these Terms
                  shall be subject to the exclusive jurisdiction of the courts
                  of {COMPANY.address}.
                </p>
              </div>
            </Card>

            <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-chart-2/5 p-8">
              <h2 className="mb-4 text-2xl font-bold">
                15. Contact Information
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For questions about these Terms or our Services, please
                  contact us:
                </p>
                <div className="space-y-2">
                  <p>
                    <strong className="text-foreground">{COMPANY.name}</strong>
                  </p>
                  <p>
                    <span className="text-sm text-muted-foreground">
                      {COMPANY.structure.aiDivision} is the AI division of{" "}
                      {COMPANY.structure.company}.{" "}
                      {COMPANY.structure.product} is the legal AI product built
                      by {COMPANY.structure.aiDivision}.
                    </span>
                  </p>
                  <p className="text-sm">
                    Registered by: {COMPANY.registration.owner}
                  </p>
                  <p className="text-sm">
                    {COMPANY.registration.authority}
                  </p>
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
