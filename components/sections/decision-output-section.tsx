"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { CheckCircle, AlertTriangle, XCircle, ArrowRight } from "lucide-react"
import content from "@/content.json"

export function DecisionOutputSection() {
  const decisionData = content.decision_output_section
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-background px-6 py-32"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-primary">
              {decisionData?.badge || "Decision Intelligence"}
            </span>
          </motion.div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            {decisionData?.title || "Get structured risk"}
            <br />
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              {decisionData?.badge || "decisions instantly"}
            </span>
          </h2>
          <p className="text-md mx-auto max-w-2xl text-muted-foreground">
            {decisionData?.subtitle ||
              "Every contract is classified with clear reasoning, impact, and next steps, not just a score."}
          </p>
        </motion.div>

        {/* Decision Cards */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {decisionData?.decisions?.map((decision, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2 + 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.div
                className={`relative rounded-3xl p-8 ${
                  decision.mode === "low"
                    ? "border-green-500/20 bg-green-500/5 hover:border-green-500/40"
                    : decision.mode === "medium"
                      ? "border-yellow-500/30 bg-yellow-500/5 hover:border-yellow-500/50"
                      : "border-red-500/30 bg-red-500/5 hover:border-red-500/50"
                } group h-full border-2 transition-all duration-300`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  {decision.mode === "low" && (
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  )}
                  {decision.mode === "medium" && (
                    <AlertTriangle className="h-16 w-16 text-yellow-500" />
                  )}
                  {(decision.mode === "high" || decision.mode === "high") && (
                    <XCircle className="h-16 w-16 text-red-500" />
                  )}
                </div>

                {/* Status */}
                <h3
                  className={`mb-3 text-2xl font-bold ${
                    decision.mode === "low"
                      ? "text-green-600 dark:text-green-400"
                      : decision.mode === "medium"
                        ? "text-yellow-600 dark:text-yellow-400"
                        : "text-red-600"
                  }`}
                >
                  {decision.status}
                </h3>

                {/* Description */}
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  {decision.description}
                </p>

                {/* Example */}
                {decision.example && (
                  <div className="mb-4 rounded-xl border border-border bg-background/50 p-4">
                    <p className="text-sm text-muted-foreground italic">
                      "{decision.example}"
                    </p>
                  </div>
                )}

                {/* Action */}
                {decision.action && (
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <span
                      className={
                        decision.mode === "low"
                          ? "text-green-600 dark:text-green-400"
                          : decision.mode === "medium"
                            ? "text-yellow-600"
                            : "text-red-600"
                      }
                    >
                      {decision.action}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}

                {/* Bottom Accent */}
                <motion.div
                  className={`absolute right-0 bottom-0 left-0 h-1 rounded-b-3xl ${
                    decision.mode === "low"
                      ? "bg-green-500"
                      : decision.mode === "medium"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Why This Matters */}
        <motion.div
          className="mx-auto max-w-5xl rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-chart-2/5 to-chart-3/5 p-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="mb-4 text-2xl font-bold">
            {decisionData?.highlight?.title ||
              "This is the feature that changes everything"}
          </h3>
          <p className="mb-6 text-lg text-muted-foreground">
            {decisionData?.highlight?.description ||
              "Most tools give you analysis. KR8V gives you a decision."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {decisionData?.highlight?.benefits?.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
