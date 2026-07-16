"use client"

import { motion, useInView } from "motion/react"
import { useRef, useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { getLicensingContent } from "@/lib/content"
import { easing, stagger } from "@/lib/animation"
import Link from "next/link"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger.normal,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easing } },
}

export function PricingSection() {
  const content = getLicensingContent()
  const containerRef = useRef<HTMLDivElement>(null)
  const journeyContainerRef = useRef<HTMLDivElement>(null)
  const blockRefs = useRef<(HTMLDivElement | null)[]>([])
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeStep, setActiveStep] = useState(0)
  const [offsets, setOffsets] = useState<string[]>([])

  // Measure horizontal center positions of each journey block
  const measureOffsets = useCallback(() => {
    const container = journeyContainerRef.current
    if (!container) return

    const containerRect = container.getBoundingClientRect()
    const containerWidth = containerRect.width

    const newOffsets = blockRefs.current.map((block) => {
      if (!block) return "0%"
      const blockRect = block.getBoundingClientRect()
      const blockCenter =
        blockRect.left + blockRect.width / 2 - containerRect.left
      const percentage = (blockCenter / containerWidth) * 100
      return `${percentage}%`
    })

    setOffsets(newOffsets)
  }, [])

  useEffect(() => {
    measureOffsets()
    const obs = new ResizeObserver(measureOffsets)
    if (journeyContainerRef.current) obs.observe(journeyContainerRef.current)
    return () => obs.disconnect()
  }, [measureOffsets])

  useEffect(() => {
    const timer = setTimeout(measureOffsets, 100)
    return () => clearTimeout(timer)
  }, [isInView, measureOffsets])

  // Auto-cycle through implementation steps
  useEffect(() => {
    if (!isInView) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % content.journey.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [isInView, content.journey.length])

  return (
    <section
      id="pricing"
      ref={containerRef}
      className="relative overflow-hidden bg-background px-6 py-32"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easing }}
        >
          <motion.div
            className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-primary">
              {content.title}
            </span>
          </motion.div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            {content.subtitle}
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            {content.description}
          </p>
        </motion.div>

        {/* Main License Card */}
        <motion.div
          className="mx-auto mb-16 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: easing }}
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12">
            {/* Price */}
            <div className="mb-8 text-center">
              <div className="mb-2 font-mono text-sm tracking-wider text-muted-foreground">
                ANNUAL LICENSE
              </div>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold">{content.price}</span>
                <span className="text-muted-foreground">/ year</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3">
              {content.highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.05 }}
                >
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="mb-8 border-t border-border" />

            {/* Trust Badges */}
            <div className="mb-8 flex flex-wrap justify-center gap-6">
              {content.trust.map((badge, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{badge}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8"
                asChild
              >
                <Link href="/contact">
                  {content.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Implementation Journey */}
        <motion.div
          className="mx-auto max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3
            className="mb-12 text-center font-mono text-sm font-medium tracking-wider text-muted-foreground"
            variants={itemVariants}
          >
            IMPLEMENTATION
          </motion.h3>

          {/* Desktop: Horizontal flow */}
          <div className="hidden md:block">
            <div className="relative px-12">
              {/* Animated dashed line connecting all steps */}
              <svg
                className="absolute top-24 right-0 left-0 h-12 w-full overflow-visible"
                viewBox="0 0 1000 48"
                preserveAspectRatio="none"
              >
                {/* Background path - center of circles */}
                <path
                  d="M40 16 L224 16 L408 16 L592 16 L776 16 L960 16"
                  fill="none"
                  stroke="rgba(255,255,255,.08)"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                />

                {/* Animated path */}
                <motion.path
                  d="M40 16 L224 16 L408 16 L592 16 L776 16 L960 16"
                  fill="none"
                  stroke="rgb(99 102 241)"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                  }}
                />

                {/* Glow effect */}
                <motion.circle
                  r="10"
                  fill="rgba(99, 102, 241, 0.3)"
                  animate={{
                    offsetDistance: offsets[activeStep] || "0%",
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    offsetPath:
                      'path("M40 16 L224 16 L408 16 L592 16 L776 16 L960 16")',
                  }}
                />

                {/* Moving dot */}
                <motion.circle
                  r="5"
                  fill="rgb(99 102 241)"
                  animate={{
                    offsetDistance: offsets[activeStep] || "0%",
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    offsetPath:
                      'path("M40 16 L224 16 L408 16 L592 16 L776 16 L960 16")',
                  }}
                />
              </svg>

              {/* Steps */}
              <div
                ref={journeyContainerRef}
                className="relative flex justify-between"
              >
                {content.journey.map((step, i) => {
                  const isActive = i === activeStep
                  return (
                    <motion.div
                      key={i}
                      ref={(el) => {
                        blockRefs.current[i] = el
                      }}
                      className="flex flex-col items-center justify-center"
                      variants={itemVariants}
                    >
                      {i === 0 ? (
                        <Link href="/contact">
                          <motion.div
                            className="group flex cursor-pointer flex-col items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {/* Arrow indicator */}
                            <motion.div
                              className="absolute -top-8 mb-2 flex flex-col items-center"
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1, duration: 0.5 }}
                            >
                              <span className="mb-1 text-[10px] font-medium text-primary">
                                Start here
                              </span>
                              <svg
                                width="12"
                                height="8"
                                viewBox="0 0 12 8"
                                fill="none"
                                className="text-primary"
                              >
                                <path
                                  d="M6 8L0 0H12L6 8Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </motion.div>
                            <div
                              className={`mb-3 flex h-8 w-8 items-center justify-center rounded-full border-2 font-mono text-xs font-bold transition-all duration-300 ${
                                isActive
                                  ? "border-primary bg-primary text-white shadow-lg shadow-primary/30"
                                  : "border-primary/30 bg-primary/10 text-primary"
                              }`}
                            >
                              {i + 1}
                            </div>
                            <span
                              className={`block text-center text-xs font-medium transition-colors duration-300 ${
                                isActive ? "text-primary" : "text-primary/60"
                              }`}
                            >
                              {step}
                            </span>
                          </motion.div>
                        </Link>
                      ) : (
                        <div className="group flex flex-col items-center justify-center">
                          <div
                            className={`mb-3 flex h-8 w-8 items-center justify-center rounded-full border-2 font-mono text-xs font-bold transition-all duration-300 ${
                              isActive
                                ? "border-primary bg-primary text-white shadow-lg shadow-primary/30"
                                : "border-border bg-card text-muted-foreground"
                            }`}
                          >
                            {i + 1}
                          </div>
                          <span
                            className={`block text-center text-xs transition-colors duration-300 ${
                              isActive
                                ? "text-foreground"
                                : "text-muted-foreground"
                            }`}
                          >
                            {step}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical flow */}
          <div className="md:hidden">
            <div className="relative ml-4 border-l-2 border-dashed border-border pl-8">
              {content.journey.map((step, i) => {
                const isActive = i === activeStep
                return (
                  <motion.div
                    key={i}
                    className="relative mb-8 last:mb-0"
                    variants={itemVariants}
                  >
                    {/* Dot on the line */}
                    <div
                      className={`absolute top-0 -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? "border-primary bg-primary text-white shadow-lg shadow-primary/30"
                          : "border-border bg-card text-muted-foreground"
                      }`}
                    >
                      <span className="font-mono text-[10px] font-bold">
                        {i + 1}
                      </span>
                    </div>

                    {i === 0 ? (
                      <Link href="/contact">
                        <div
                          className={`cursor-pointer rounded-lg p-3 transition-colors ${
                            isActive
                              ? "border border-primary/30 bg-primary/5"
                              : "border border-transparent"
                          }`}
                        >
                          <span
                            className={`text-sm font-medium ${
                              isActive ? "text-primary" : "text-primary/60"
                            }`}
                          >
                            {step}
                          </span>
                        </div>
                      </Link>
                    ) : (
                      <div
                        className={`rounded-lg p-3 transition-colors ${
                          isActive ? "bg-muted/50" : ""
                        }`}
                      >
                        <span
                          className={`text-sm ${
                            isActive
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {step}
                        </span>
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
