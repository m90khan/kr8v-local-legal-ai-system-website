"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { X, Check, ArrowRight } from "lucide-react"

const comparisons = [
  {
    before: "Reading 10+ pages of dense legal text",
    after: "10-second AI summary with risk scores",
  },
  {
    before: "Missing dangerous clauses buried in paragraphs",
    after: "Every risk automatically flagged and highlighted",
  },
  {
    before: "Waiting 2-3 days for lawyer review",
    after: "Instant analysis the moment you upload",
  },
  {
    before: "Hoping you didn't miss something important",
    after: "Clear decision: Sign, Negotiate, or Reject",
  },
  {
    before: "$500+ legal review fee per contract",
    after: "Unlimited reviews, one flat price",
  },
]

export function BeforeAfterSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-muted/30 px-6 py-32"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Stop approving contracts you don't control
          </h2>
          <p className="text-md mx-auto max-w-2xl text-muted-foreground">
            Without structured review, risky clauses slip through unnoticed.
            KR8V turns unstructured NDAs into clear, actionable decisions.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="space-y-4">
          {/* Header Row */}
          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <motion.div
              className="rounded-2xl border-2 border-destructive/20 bg-destructive/10 p-6 text-center"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <X className="mx-auto mb-3 h-8 w-8 text-destructive" />
              <h3 className="text-2xl font-bold">Without KR8V</h3>
            </motion.div>
            <motion.div
              className="rounded-2xl border-2 border-primary/30 bg-primary/10 p-6 text-center"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Check className="mx-auto mb-3 h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">With KR8V</h3>
            </motion.div>
          </div>

          {/* Comparison Rows */}
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              className="grid gap-6 md:grid-cols-2"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Before */}
              <div className="group relative rounded-xl border-2 border-destructive/20 bg-card p-6 transition-colors hover:border-destructive/40">
                <div className="absolute top-1/2 -left-3 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-destructive/20">
                  <X className="h-4 w-4 text-destructive" />
                </div>
                <p className="pl-4 leading-relaxed text-muted-foreground">
                  {item.before}
                </p>
              </div>

              {/* Arrow (desktop) */}
              <div className="absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="h-6 w-6 text-white" />
                </motion.div>
              </div>

              {/* After */}
              <div className="group relative rounded-xl border-2 border-primary/30 bg-card p-6 transition-colors hover:border-primary/50">
                <div className="absolute top-1/2 -left-3 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-primary/20">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="pl-4 leading-relaxed font-medium">{item.after}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          className="mt-16 text-center p-8 rounded-3xl bg-gradient-to-br from-primary/5 via-chart-2/5 to-chart-3/5 border-2 border-primary/20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Review your first NDA in 60 seconds
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            No credit card. No installation. Just upload and see the difference.
          </p>
          <motion.button
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Try It Now — Free
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  )
}
