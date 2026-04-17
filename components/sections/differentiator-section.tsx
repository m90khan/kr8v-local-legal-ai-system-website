"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Cloud, Server, X, Check } from "lucide-react"

const comparisons = [
  {
    feature: "Data stays inside your infrastructure",
    traditional: false,
    kr8v: true,
  },
  {
    feature: "Runs on local or self-hosted AI",
    traditional: false,
    kr8v: true,
  },
  {
    feature: "Policy-aware contract analysis",
    traditional: false,
    kr8v: true,
  },
  {
    feature: "Reference-driven comparisons",
    traditional: false,
    kr8v: true,
  },
  {
    feature: "Clause-level risk detection",
    traditional: true,
    kr8v: true,
  },
  {
    feature: "Audit logs and version history",
    traditional: false,
    kr8v: true,
  },
  {
    feature: "Workflow-based decisions (approve/reject/review)",
    traditional: false,
    kr8v: true,
  },
  {
    feature: "No vendor lock-in or external dependency",
    traditional: false,
    kr8v: true,
  },
]

export function DifferentiatorSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-background px-6 py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

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
              Why KR8V is different
            </span>
          </motion.div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Unlike cloud AI tools,
            <br />
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              KR8V never sends your contracts outside your control
            </span>
          </h2>
        </motion.div>

        {/* Visual Comparison */}
        <div className="mx-auto max-w-5xl">
          {/* Headers */}
          <div className="mb-8 grid grid-cols-3 gap-6">
            <div className="col-span-1" />
            <motion.div
              className="rounded-2xl border border-border bg-muted/50 p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Cloud className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
              <h3 className="text-lg font-bold">Cloud AI Tools</h3>
            </motion.div>
            <motion.div
              className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-chart-2/10 p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Server className="mx-auto mb-2 h-8 w-8 text-primary" />
              <h3 className="text-lg font-bold">KR8V</h3>
            </motion.div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-3">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-3 items-center gap-6 rounded-2xl border border-border bg-card p-4 transition-colors duration-300 hover:border-primary/30"
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1 + 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="font-medium">{item.feature}</div>

                {/* Traditional Tools */}
                <div className="flex justify-center">
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: item.traditional ? 0 : -10,
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item.traditional ? (
                      <Check className="h-6 w-6 text-muted-foreground" />
                    ) : (
                      <X className="h-6 w-6 text-destructive" />
                    )}
                  </motion.div>
                </div>

                {/* KR8V */}
                <div className="flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item.kr8v ? (
                      <Check className="h-6 w-6 text-primary" />
                    ) : (
                      <X className="h-6 w-6 text-destructive" />
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Highlight */}
          <motion.div
            className="mt-12 rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-chart-2/5 to-chart-3/5 p-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h3 className="mb-4 text-xl font-bold">
              Your Data, Your Infrastructure, Your Control
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Most AI tools require sending your contracts to external servers.
              KR8V keeps everything inside your infrastructure.
            </p>
          </motion.div>
        </div>

        {/* Visual Network Diagram */}
        <motion.div
          className="mx-auto mt-20 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="relative rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-card to-muted/30 p-12">
            <h4 className="mb-8 text-center text-xl font-bold">
              Traditional vs KR8V Data Flow
            </h4>

            <div className="grid gap-12 md:grid-cols-2">
              {/* Traditional Flow */}
              <div className="space-y-4">
                <div className="mb-4 text-center text-sm font-medium text-muted-foreground">
                  Cloud AI Tools
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    "Your Data",
                    "→ Internet",
                    "→ External AI APIs",
                    "→ Third-Party Processing",
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      className={`rounded-lg p-3 text-center ${
                        i === 0
                          ? "border border-primary/30 bg-primary/20"
                          : "border border-destructive/20 bg-destructive/10"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.7 + i * 0.1 }}
                    >
                      {step}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* KR8V Flow */}
              <div className="space-y-4">
                <div className="mb-4 text-center text-sm font-medium text-muted-foreground">
                  KR8V
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    "Your Data",
                    "→ Local AI Models",
                    "→ Private Network",
                    "→ Full Control",
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      className="rounded-lg border border-primary/30 bg-primary/20 p-3 text-center"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.7 + i * 0.1 }}
                    >
                      {step}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
