"use client"
import { motion, useInView } from "motion/react"
import { useRef, useState } from "react"
import { ProblemSectionV2Interactive } from "../ui/card/RiskCard"
import { DocumentHeaderSection } from "../sections/DocumentHeaderSection"
import content from "@/content.json"

const initialBlockingIssues = [
  {
    clauseId: "clause_6_2",
    reason:
      "Uncapped liability clause — Recipient liable for all damages including indirect, incidental, and consequential, regardless of foreseeability",
    policyRef: "CONF-001",
    policyTitle: "Liability Cap Policy",
    evidence: [
      {
        chunk_id: "evidence_1",
        displayLabel: "Commercial Agreement Standards",
        text: "Uncapped liability clauses are commonly rejected in commercial agreements.",
      },
      {
        chunk_id: "evidence_2",
        displayLabel: "Industry Best Practice",
        text: "Exclusion of indirect damages is standard practice in most contracts.",
      },
    ],
  },
]

const initialSuggestedActions = [
  "Limit liability to direct damages only",
  "Cap total liability at fees paid under the agreement",
  "Exclude indirect, incidental, and consequential damages",
  "Allow exceptions only for fraud or willful misconduct",
]

export function ProblemSection() {
  const problemData = content.problem_section
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [fixApplied, setFixApplied] = useState(false)

  const handleAcceptFix = () => {
    setFixApplied(true)
  }

  return (
    <section ref={containerRef} className="relative overflow-hidden px-6 py-32">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            {problemData?.title || "NDAs hide risk"}
            <br />
            <span className="text-muted-foreground">
              {problemData?.subtitle || "in plain English"}
            </span>
          </h2>
          <p className="text-md mx-auto max-w-2xl text-muted-foreground">
            {problemData?.description ||
              "Instantly identify high-risk clauses, missing protections, and deviations from your standards."}
          </p>
        </motion.div>

        {/* Document Info Block */}
        <motion.div
          className="mx-auto mb-8 grid max-w-2xl items-center gap-6 lg:grid-cols-[auto_1fr_auto]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted">
            <span className="text-3xl">📄</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Vendor Master Services Agreement
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              28 pages · New software supplier
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Time to review</div>
            <div className="text-2xl font-bold">
              {fixApplied ? "12 seconds" : "60+ minutes"}
            </div>
          </div>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Left Column — DocumentHeaderSection (sticky on desktop) */}
          <motion.div
            className="h-full lg:sticky lg:top-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <DocumentHeaderSection
              safetyScore={fixApplied ? 95 : 80}
              decision={fixApplied ? "APPROVE" : "REJECT"}
              confidence={fixApplied ? 96 : 80}
              blockingIssues={fixApplied ? [] : initialBlockingIssues}
              suggestedActions={
                fixApplied
                  ? ["Proceed with signing", "Archive document"]
                  : initialSuggestedActions
              }
            />
          </motion.div>

          {/* Right Column — NDA Document Snippet */}
          <motion.div
            className="h-full"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative h-full">
              {/* NDA Snippet with Highlighted Risks */}
              <div className="relative h-full overflow-hidden rounded-2xl border-2 border-border bg-card px-4 py-8 shadow-lg backdrop-blur-sm">
                {/* Page indicator */}
                <div className="absolute top-4 right-4 text-xs text-muted-foreground">
                  Page 7 of 28
                </div>

                <div className="space-y-2 font-mono text-sm leading-relaxed">
                  {problemData?.snippet?.[0] && (
                    <p className="text-muted-foreground">
                      <span className="text-foreground/50">
                        {problemData.snippet[0].section}
                      </span>{" "}
                      {problemData.snippet[0].text}
                    </p>
                  )}

                  <ProblemSectionV2Interactive onAccept={handleAcceptFix} />

                  {problemData?.snippet?.[1] && (
                    <p className="text-muted-foreground">
                      <span className="text-foreground/50">
                        {problemData.snippet[1].section}
                      </span>{" "}
                      {problemData.snippet[1].text}
                    </p>
                  )}

                  {problemData?.snippet?.[2] && (
                    <p className="text-muted-foreground">
                      <span className="text-foreground/50">
                        {problemData.snippet[2].section}
                      </span>{" "}
                      {problemData.snippet[2].text}
                    </p>
                  )}
                </div>

                {/* Bottom note */}
                <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
                  {fixApplied
                    ? "Fix applied — contract ready for approval"
                    : problemData?.bottom_note ||
                      "... and 21 more pages of legal text"}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
