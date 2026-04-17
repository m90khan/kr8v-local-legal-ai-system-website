"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { CheckCircle, AlertTriangle, XCircle, ArrowRight } from "lucide-react"

export function DecisionOutputSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const decisions = [
    {
      icon: CheckCircle,
      status: "Safe to Sign",
      color: "green",
      description: "Standard clauses, minimal risk, ready to execute",
      example:
        "Mutual NDA with 2-year term and standard confidentiality provisions",
      action: "Sign with confidence",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/5",
      borderColor: "border-green-500/20 hover:border-green-500/40",
    },
    {
      icon: AlertTriangle,
      status: "Needs Review",
      color: "yellow",
      description: "Some clauses require attention before signing",
      example:
        "Non-standard liability clause in section 4.2 needs clarification",
      action: "Review flagged sections",
      gradient: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/5",
      borderColor: "border-yellow-500/30 hover:border-yellow-500/50",
    },
    {
      icon: XCircle,
      status: "High Risk",
      color: "red",
      description: "Dangerous clauses detected, do not sign without changes",
      example: "Indefinite non-compete and unlimited liability exposure",
      action: "Request modifications",
      gradient: "from-red-500 to-rose-500",
      bgColor: "bg-red-500/5",
      borderColor: "border-red-500/30 hover:border-red-500/50",
    },
  ]

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-background px-6 py-32"
    >
      <div className="container mx-auto max-w-7xl">
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
              Decision Intelligence
            </span>
          </motion.div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Get structured risk
            <br />
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              decisions instantly
            </span>
          </h2>
          <p className="text-md mx-auto max-w-2xl text-muted-foreground">
            Every contract is classified with clear reasoning, impact, and next
            steps, not just a score.
          </p>
        </motion.div>

        {/* Decision Cards */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {decisions.map((decision, index) => (
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
                className={`relative rounded-3xl p-8 ${decision.bgColor} border-2 ${decision.borderColor} group h-full transition-all duration-300`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${decision.gradient} rounded-3xl opacity-0 transition-opacity group-hover:opacity-5`}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <decision.icon
                    className={`h-16 w-16 text-${decision.color}-500`}
                  />
                </div>

                {/* Status */}
                <h3
                  className={`mb-3 text-2xl font-bold text-${decision.color}-600 dark:text-${decision.color}-400`}
                >
                  {decision.status}
                </h3>

                {/* Description */}
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  {decision.description}
                </p>

                {/* Example */}
                <div className="mb-4 rounded-xl border border-border bg-background/50 p-4">
                  <p className="text-sm text-muted-foreground italic">
                    "{decision.example}"
                  </p>
                </div>

                {/* Action */}
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span
                    className={`text-${decision.color}-600 dark:text-${decision.color}-400`}
                  >
                    {decision.action}
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </div>

                {/* Bottom Accent */}
                <motion.div
                  className={`absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r ${decision.gradient} rounded-b-3xl`}
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
          className="mx-auto max-w-4xl rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-chart-2/5 to-chart-3/5 p-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="mb-4 text-2xl font-bold">
            This is the feature that changes everything
          </h3>
          <p className="mb-6 text-lg text-muted-foreground">
            Most tools give you analysis. KR8V gives you a decision. You don't
            need to be a lawyer to know if an NDA is safe — the AI tells you
            directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Clear recommendation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Specific reasoning</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Suggested fixes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
