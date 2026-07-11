"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { easing } from "@/lib/animation"
import { SpinnerToCheck } from "@/components/shared/spinner-to-check"
import { BlurReveal } from "@/components/shared/blur-reveal"
import { DashflowLine } from "@/components/shared/dashflow-line"
import { FlowingParticles } from "@/components/shared/flowing-particles"
import { SectionHeader } from "@/components/shared/section-header"

const steps = [
  {
    label: "Parsed 147 clauses",
    detail: "Document decomposed into structured sections",
    visual: "parse",
  },
  {
    label: "Compared with 38 internal policies",
    detail: "3 deviations found",
    visual: "compare",
  },
  {
    label: "Retrieved 6 reference agreements",
    detail: "Similar contracts from your portfolio",
    visual: "retrieve",
  },
  {
    label: "Found 8 deviations",
    detail: "2 high-risk · 3 medium · 3 low",
    visual: "deviations",
  },
  {
    label: "Generated safer rewrite",
    detail: "Liability limited to fees paid",
    visual: "rewrite",
  },
  {
    label: "Decision Ready",
    detail: "Safety score: 91/100",
    visual: "decision",
  },
]

function ParseVisual({ isInView, delay }: { isInView: boolean; delay: number }) {
  return (
    <motion.div
      className="flex gap-1"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="h-8 w-3 rounded-sm bg-primary/20"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ delay: delay + i * 0.05, duration: 0.3, ease: easing }}
          style={{ transformOrigin: "bottom" }}
        />
      ))}
    </motion.div>
  )
}

function CompareVisual({ isInView, delay }: { isInView: boolean; delay: number }) {
  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col gap-1"
        initial={{ x: -20, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: delay + 0.2, duration: 0.5, ease: easing }}
      >
        <div className="h-2 w-16 rounded bg-primary/30" />
        <div className="h-2 w-12 rounded bg-primary/30" />
        <div className="h-2 w-14 rounded bg-primary/30" />
      </motion.div>
      <motion.div
        className="text-lg text-muted-foreground"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: delay + 0.4, duration: 0.3 }}
      >
        =
      </motion.div>
      <motion.div
        className="flex flex-col gap-1"
        initial={{ x: 20, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: delay + 0.2, duration: 0.5, ease: easing }}
      >
        <div className="h-2 w-16 rounded bg-yellow-500/30" />
        <div className="h-2 w-12 rounded bg-primary/30" />
        <div className="h-2 w-14 rounded bg-red-500/30" />
      </motion.div>
    </motion.div>
  )
}

function RetrieveVisual({ isInView, delay }: { isInView: boolean; delay: number }) {
  return (
    <motion.div
      className="relative h-10 w-20"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute h-6 w-8 rounded border border-border bg-card"
          style={{ left: i * 8, top: i * 4 }}
          initial={{ x: 30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: delay + i * 0.15, duration: 0.4, ease: easing }}
        />
      ))}
    </motion.div>
  )
}

function DeviationsVisual({ isInView, delay }: { isInView: boolean; delay: number }) {
  const colors = ["bg-green-500", "bg-green-500", "bg-yellow-500", "bg-red-500", "bg-red-500", "bg-green-500", "bg-yellow-500", "bg-green-500"]
  return (
    <motion.div
      className="flex gap-1"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      {colors.map((color, i) => (
        <motion.div
          key={i}
          className={`h-3 w-3 rounded-full ${color}`}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: delay + i * 0.08, duration: 0.3, type: "spring", stiffness: 300, damping: 15 }}
        />
      ))}
    </motion.div>
  )
}

function RewriteVisual({ isInView, delay }: { isInView: boolean; delay: number }) {
  return (
    <motion.div
      className="flex flex-col gap-1 text-xs"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.div
        className="flex items-center gap-2 rounded bg-red-500/10 px-2 py-1"
        initial={{ opacity: 1 }}
        animate={isInView ? { opacity: 0.4 } : {}}
        transition={{ delay: delay + 0.5, duration: 0.5 }}
      >
        <span className="text-red-500">-</span>
        <span className="line-through text-muted-foreground">Unlimited liability</span>
      </motion.div>
      <motion.div
        className="flex items-center gap-2 rounded bg-green-500/10 px-2 py-1"
        initial={{ opacity: 0, x: -10 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: delay + 0.7, duration: 0.4, ease: easing }}
      >
        <span className="text-green-500">+</span>
        <span className="text-green-600 dark:text-green-400">Liability limited to fees paid</span>
      </motion.div>
    </motion.div>
  )
}

function DecisionVisual({ isInView, delay }: { isInView: boolean; delay: number }) {
  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.5, type: "spring", stiffness: 200, damping: 15 }}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
        91
      </div>
      <div className="text-xs text-muted-foreground">Safety Score</div>
    </motion.div>
  )
}

const visualComponents = {
  parse: ParseVisual,
  compare: CompareVisual,
  retrieve: RetrieveVisual,
  deviations: DeviationsVisual,
  rewrite: RewriteVisual,
  decision: DecisionVisual,
}

export function InsideAIBrain() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-surface px-6 py-32"
    >
      <div className="container mx-auto max-w-4xl">
        <SectionHeader
          label="Inside the AI Brain"
          heading="How did it reach that decision?"
          subtitle="Every step is transparent. Every reasoning is explainable."
          delay={0}
        />

        {/* Reasoning Steps with Flow Spine */}
        <div className="relative mx-auto max-w-2xl">
          <svg
            className="absolute left-6 top-0 -z-10 h-full"
            width="2"
            viewBox="0 0 2 100"
            preserveAspectRatio="none"
          >
            <DashflowLine
              path="M 1 0 L 1 100"
              color="rgba(99, 102, 241, 0.2)"
              dashSize={4}
              gapSize={4}
              speed={2}
              strokeWidth={2}
            />
          </svg>

          <FlowingParticles
            path="M 0 0 C 0 20 0 40 0 60"
            particleCount={2}
            speed={4}
            color="rgba(99, 102, 241, 0.6)"
            glowColor="rgba(99, 102, 241, 0.2)"
            particleSize={3}
            className="left-6 top-0"
          />

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Visual = visualComponents[step.visual as keyof typeof visualComponents]
              const stepDelay = 0.3 + index * 0.8

              return (
                <BlurReveal key={index} delay={stepDelay} duration={0.5} blur={4} yOffset={15}>
                  <div className="flex items-center gap-6 rounded-2xl border-2 border-border bg-background p-6 transition-colors duration-300 hover:border-primary/30">
                    <SpinnerToCheck
                      label=""
                      delay={stepDelay}
                      duration={0.6}
                    />

                    <div className="flex flex-shrink-0 items-center justify-center">
                      {Visual && <Visual isInView={isInView} delay={stepDelay + 0.3} />}
                    </div>

                    <div className="flex-1">
                      <motion.div
                        className="font-medium"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: stepDelay + 0.4, duration: 0.3 }}
                      >
                        {step.label}
                      </motion.div>
                      <motion.div
                        className="text-sm text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: stepDelay + 0.6, duration: 0.3 }}
                      >
                        {step.detail}
                      </motion.div>
                    </div>
                  </div>
                </BlurReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
