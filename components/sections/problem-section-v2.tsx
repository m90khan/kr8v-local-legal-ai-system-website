"use client"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { ProblemSectionV2Interactive } from "../ui/card/RiskCard"

export function ProblemSectionV2() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="relative overflow-hidden px-6 py-32">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            NDAs hide risk
            <br />
            <span className="text-muted-foreground">in plain English</span>
          </h2>
          <p className="text-md mx-auto max-w-2xl text-muted-foreground">
            Instantly identify high-risk clauses, missing protections, and
            deviations from your standards.
          </p>
        </motion.div>

        {/* Real NDA Example */}
        <motion.div
          className="mx-auto mb-16 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            {/* Document Header */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <span className="text-2xl">📄</span>
                </div>
                <div>
                  <h3 className="font-bold">Standard Mutual NDA</h3>
                  <p className="text-sm text-muted-foreground">
                    12 pages · Received from investor
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">
                  Time to read properly
                </div>
                <div className="text-2xl font-bold">45 minutes</div>
              </div>
            </div>

            {/* NDA Snippet with Highlighted Risks */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-border bg-card p-8">
              {/* Page indicator */}
              <div className="absolute top-4 right-4 text-xs text-muted-foreground">
                Page 7 of 12
              </div>

              <div className="space-y-2 font-mono text-sm leading-relaxed">
                <p className="text-muted-foreground">
                  <span className="text-foreground/50">6.1</span> The Receiving
                  Party agrees that all Confidential Information shall remain
                  the exclusive property of the Disclosing Party.
                </p>

                <ProblemSectionV2Interactive />
                <p className="text-muted-foreground">
                  <span className="text-foreground/50">6.3</span> Each party
                  acknowledges that unauthorized disclosure may cause
                  irreparable harm.
                </p>

                <p className="text-muted-foreground">
                  <span className="text-foreground/50">6.4</span> This Agreement
                  shall be governed by the laws of Delaware without regard to
                  conflicts of law principles.
                </p>
              </div>

              {/* Bottom note */}
              <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
                ... and 6 more pages of legal text
              </div>
            </div>
          </div>
        </motion.div>

        {/* Real Statistics */}
        <motion.div
          className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            {
              stat: "Hidden risk",
              label: "Identify risky clauses and missing protections instantly",
              color: "destructive",
            },
            {
              stat: "Faster review",
              label: "Reduce manual contract review time significantly",
              color: "yellow-500",
            },
            {
              stat: "Consistent decisions",
              label: "Standardize approvals based on your internal policy",
              color: "primary",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border-2 border-border bg-card p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 1 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -4, borderColor: `hsl(var(--${item.color}))` }}
            >
              <div className={`mb-3 text-2xl font-bold text-${item.color}`}>
                {item.stat}
              </div>
              <div className="text-sm leading-relaxed text-muted-foreground">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
