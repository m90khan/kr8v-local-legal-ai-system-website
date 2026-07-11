"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { FileText, AlertTriangle, CheckCircle } from "lucide-react"
import { easing } from "@/lib/animation"
import { BlurReveal } from "@/components/shared/blur-reveal"
import { DashflowLine } from "@/components/shared/dashflow-line"
import { FlowingParticles } from "@/components/shared/flowing-particles"
import { AmbientOrb } from "@/components/shared/ambient-orb"
import { GlowFilter } from "@/components/shared/glow-filter"

export function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-32"
    >
      {/* SVG Filters */}
      <GlowFilter />

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary) / 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary) / 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "80px 80px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Ambient Orbs */}
      <AmbientOrb color="rgba(99, 102, 241, 0.08)" size={600} x="20%" y="30%" blur={100} delay={0} />
      <AmbientOrb color="rgba(139, 92, 246, 0.06)" size={500} x="80%" y="60%" blur={80} delay={3} />

      <div className="relative z-10 container mx-auto max-w-7xl px-6 text-center">
        {/* Eyebrow */}
        <BlurReveal delay={0.1} duration={0.6}>
          <div className="mb-8 flex justify-center">
            <div className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
              <span className="text-sm font-medium text-primary">Private Contract Intelligence Platform</span>
            </div>
          </div>
        </BlurReveal>

        {/* Pipeline Animation */}
        <div className="relative mx-auto mb-16 max-w-2xl">
          {/* Flow Spine (vertical line connecting all steps) */}
          <svg
            className="absolute left-1/2 top-0 -z-10 h-full -translate-x-1/2"
            width="2"
            height="100%"
            viewBox="0 0 2 100"
            preserveAspectRatio="none"
          >
            <DashflowLine
              path="M 1 0 L 1 100"
              color="rgba(99, 102, 241, 0.3)"
              dashSize={4}
              gapSize={4}
              speed={2}
              strokeWidth={2}
            />
          </svg>

          {/* Flowing particles along the spine */}
          <FlowingParticles
            path="M 0 0 C 0 50 0 100 0 150"
            particleCount={2}
            speed={3}
            color="rgba(99, 102, 241, 0.8)"
            glowColor="rgba(99, 102, 241, 0.3)"
            particleSize={4}
            className="left-1/2 top-0 -translate-x-1/2"
          />

          {/* Step 1: PDF Document */}
          <BlurReveal delay={0.3} duration={0.6} blur={8} yOffset={30}>
            <div className="flex flex-col items-center">
              <motion.div
                className="flex items-center gap-3 rounded-2xl border-2 border-border bg-card px-6 py-4 shadow-lg"
                animate={isInView ? {
                  borderColor: ["hsl(var(--border))", "hsl(var(--primary) / 0.5)", "hsl(var(--border))"],
                } : {}}
                transition={{ duration: 2, delay: 1.5, ease: easing }}
              >
                <FileText className="h-8 w-8 text-primary" />
                <div className="text-left">
                  <div className="font-medium">Vendor Agreement.pdf</div>
                  <div className="text-xs text-muted-foreground">12 pages · Northwind Manufacturing</div>
                </div>
              </motion.div>
            </div>
          </BlurReveal>

          {/* Step 2: Understanding → Clauses */}
          <BlurReveal delay={1.2} duration={0.6} blur={8} yOffset={30}>
            <div className="flex flex-col items-center">
              <motion.div
                className="rounded-2xl border-2 border-primary/30 bg-primary/5 px-6 py-4"
                initial={{ scale: 1 }}
                animate={isInView ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 1.5, delay: 2, ease: easing }}
              >
                <div className="text-sm text-muted-foreground">Understanding...</div>
                <motion.div
                  className="mt-2 text-2xl font-bold text-primary"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 2.5 }}
                >
                  147 Clauses
                </motion.div>
              </motion.div>
            </div>
          </BlurReveal>

          {/* Step 3: Risk Detection */}
          <BlurReveal delay={3.2} duration={0.6} blur={8} yOffset={30}>
            <div className="flex flex-col items-center">
              <motion.div
                className="rounded-2xl border-2 border-yellow-500/30 bg-yellow-500/5 px-6 py-4"
                initial={{ scale: 1 }}
                animate={isInView ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 1.5, delay: 3.8, ease: easing }}
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  Comparing...
                </div>
                <motion.div
                  className="mt-2 text-2xl font-bold text-yellow-600 dark:text-yellow-400"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 4.2 }}
                >
                  8 Risks
                </motion.div>
              </motion.div>
            </div>
          </BlurReveal>

          {/* Step 4: Decision */}
          <BlurReveal delay={5} duration={0.6} blur={8} yOffset={30}>
            <div className="flex flex-col items-center">
              <motion.div
                className="flex items-center gap-3 rounded-2xl border-2 border-yellow-500/30 bg-yellow-500/10 px-8 py-5 shadow-lg"
                initial={{ scale: 0.9 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 5.2, type: "spring", stiffness: 200, damping: 15 }}
              >
                <CheckCircle className="h-6 w-6 text-yellow-500" />
                <span className="text-xl font-bold">Review Required</span>
              </motion.div>
            </div>
          </BlurReveal>
        </div>

        {/* Headline (appears after animation) */}
        <BlurReveal delay={5.8} duration={0.8} blur={6} yOffset={30}>
          <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
            Contract risks hide in every document.
            <br />
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              Identify them in seconds.
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Start with NDA review. Scale to vendor agreements, DPAs, and procurement workflows.
            Deployed on your network with local AI.
          </p>
        </BlurReveal>

        {/* CTA Buttons */}
        <BlurReveal delay={6.2} duration={0.6}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href="/contact?activeTab=demo"
              className="inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-primary to-chart-2 px-6 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Demo
            </motion.a>
            <motion.a
              href="/vision"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See the Vision
            </motion.a>
          </div>
        </BlurReveal>

        {/* Trust Items */}
        <BlurReveal delay={6.5} duration={0.8}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {["SOC 2-Aligned Controls", "Local AI Deployment", "Encrypted Storage", "No External API Dependency"].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </BlurReveal>
      </div>
    </section>
  )
}
