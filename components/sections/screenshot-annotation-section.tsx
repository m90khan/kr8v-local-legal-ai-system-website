"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Zap, Shield, Target, TrendingUp } from "lucide-react"

export function ScreenshotAnnotationSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const annotations = [
    {
      icon: Zap,
      title: "Structured Risk Scoring",
      description:
        "Policy-driven safety score with clause-level breakdown and reasoning.",
      position: "top-8 left-8",
      color: "primary",
    },
    {
      icon: Shield,
      title: "Clause-Level Risk Detection",
      description:
        "Highlights risky clauses, missing protections, and deviations from your standards.",
      position: "top-8 right-8",
      color: "chart-2",
    },
    {
      icon: Target,
      title: "Policy-Aligned Recommendations",
      description:
        "Generates safer clause alternatives based on your company policy and reference contracts.",
      position: "bottom-8 left-8",
      color: "chart-3",
    },
    {
      icon: TrendingUp,
      title: "Clear Decision Outcomes",
      description:
        "Actionable decisions: approve, review, or reject with full legal context.",
      position: "bottom-8 right-8",
      color: "chart-4",
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
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Complete internal
            <br />
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              NDA workflow
            </span>
          </h2>
        </motion.div>

        {/* Main Screenshot Area */}
        <div className="relative mx-auto max-w-6xl">
          <motion.div
            className="relative overflow-hidden rounded-3xl border-2 border-primary/20 bg-card shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Mock Interface */}
            <div className="aspect-video bg-gradient-to-br from-background via-muted/50 to-background p-12">
              <div className="grid h-full grid-cols-3 gap-6">
                {/* Left Panel */}
                <div className="space-y-4">
                  <div className="h-12 rounded-lg border border-primary/30 bg-primary/20" />
                  <div className="h-32 rounded-lg bg-muted/50" />
                  <div className="h-32 rounded-lg bg-muted/50" />
                  <div className="h-24 rounded-lg bg-muted/50" />
                </div>

                {/* Center Panel - Document */}
                <div className="relative col-span-2 rounded-lg border-2 border-border bg-background p-6">
                  {/* Document header */}
                  <div className="mb-4 h-8 w-3/4 rounded bg-muted/50" />

                  {/* Document lines */}
                  <div className="space-y-2">
                    <div className="h-3 w-full rounded bg-muted/30" />
                    <div className="h-3 w-full rounded bg-muted/30" />
                    <div className="h-3 w-5/6 rounded bg-muted/30" />
                    <div className="h-3 w-full rounded bg-muted/30" />

                    {/* Highlighted risk clause */}
                    <div className="my-3 rounded-lg border-l-4 border-destructive bg-destructive/10 p-3">
                      <div className="mb-2 h-3 w-full rounded bg-destructive/30" />
                      <div className="h-3 w-4/5 rounded bg-destructive/30" />
                    </div>

                    <div className="h-3 w-full rounded bg-muted/30" />
                    <div className="h-3 w-3/4 rounded bg-muted/30" />

                    {/* Another highlighted section */}
                    <div className="my-3 rounded-lg border-l-4 border-yellow-500 bg-yellow-500/10 p-3">
                      <div className="mb-2 h-3 w-full rounded bg-yellow-500/30" />
                      <div className="h-3 w-5/6 rounded bg-yellow-500/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Annotations */}
          {annotations.map((annotation, index) => (
            <motion.div
              key={index}
              className={`absolute ${annotation.position} hidden lg:block`}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
            >
              <div className="relative max-w-xs">
                {/* Connector Line */}
                <div
                  className={`absolute h-0.5 w-16 bg-${annotation.color} ${
                    annotation.position.includes("right")
                      ? "right-full"
                      : "left-full"
                  } top-1/2`}
                />

                {/* Annotation Card */}
                <motion.div
                  className={`rounded-xl border-2 bg-card p-4 border-${annotation.color}/30 shadow-lg backdrop-blur-sm`}
                  whileHover={{
                    scale: 1.05,
                    borderColor: `hsl(var(--${annotation.color}))`,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`h-10 w-10 rounded-lg bg-${annotation.color}/20 flex flex-shrink-0 items-center justify-center`}
                    >
                      <annotation.icon
                        className={`h-5 w-5 text-${annotation.color}`}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-1 text-sm font-bold">
                        {annotation.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {annotation.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Annotations */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:hidden">
          {annotations.map((annotation, index) => (
            <motion.div
              key={index}
              className="rounded-xl border-2 border-border bg-card p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`h-10 w-10 rounded-lg bg-${annotation.color}/20 flex flex-shrink-0 items-center justify-center`}
                >
                  <annotation.icon
                    className={`h-5 w-5 text-${annotation.color}`}
                  />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-bold">{annotation.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {annotation.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
