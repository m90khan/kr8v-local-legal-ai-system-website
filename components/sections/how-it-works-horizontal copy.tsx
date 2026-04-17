"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { Upload, Scan, Brain, FileCheck, Zap } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Upload",
    description: "Drop your NDA file",
    detail: "PDF, DOCX, or TXT — we handle all formats",
  },
  {
    icon: Scan,
    title: "Parse",
    description: "AI reads every clause",
    detail: "Semantic analysis of all contract sections",
  },
  {
    icon: Brain,
    title: "Analyze",
    description: "Compare against policy",
    detail: "Check for 50+ risk patterns and red flags",
  },
  {
    icon: FileCheck,
    title: "Decide",
    description: "Get your recommendation",
    detail: "Safe, Review, or High Risk with reasoning",
  },
  {
    icon: Zap,
    title: "Act",
    description: "Sign or request changes",
    detail: "Export report or get suggested rewrites",
  },
]

export function HowItWorksHorizontal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-muted/30 px-6 py-32"
    >
      <div className="container mx-auto mb-16 max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
            <span className="text-sm font-medium text-primary">
              How It Works
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-4xl">
            From upload to decision
            <br />
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              in 5 simple steps
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Strip */}
      <div className="relative">
        <motion.div className="flex gap-6 pb-8" style={{ x }}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="w-80 flex-shrink-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="group relative h-full rounded-3xl border-2 border-border bg-card p-8 transition-all duration-300 hover:border-primary/50">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-chart-2 text-xl font-bold text-white shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mt-4 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 transition-transform group-hover:scale-110">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-2 text-2xl font-bold">{step.title}</h3>
                <p className="mb-4 text-lg text-muted-foreground">
                  {step.description}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground/70">
                  {step.detail}
                </p>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-8 hidden -translate-y-1/2 text-primary/30 md:block">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M5 12h14m-7-7l7 7-7 7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Time Indicator */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <div className="inline-block rounded-2xl border-2 border-primary/20 bg-primary/10 p-6">
          <div className="mb-2 text-4xl font-bold">
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              10 seconds
            </span>
          </div>
          <p className="text-muted-foreground">
            Total time from upload to decision
          </p>
        </div>
      </motion.div>
    </section>
  )
}
