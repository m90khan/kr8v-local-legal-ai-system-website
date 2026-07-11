"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import {
  Shield,
  Lock,
  X,
  Cloud,
  Globe,
  Cpu,
  Database,
  FileText,
  Check,
  Zap,
  ShieldCheck,
} from "lucide-react"
import { easing } from "@/lib/animation"
import { BlurReveal } from "@/components/shared/blur-reveal"
import { DashflowLine } from "@/components/shared/dashflow-line"
import { AmbientOrb } from "@/components/shared/ambient-orb"
import { SectionHeader } from "@/components/shared/section-header"

// ─── Blocked Service ────────────────────────────────────────────────────────

function BlockedService({
  name,
  icon,
  delay,
}: {
  name: string
  icon: React.ReactNode
  delay: number
}) {
  return (
    <BlurReveal delay={delay} duration={0.5}>
      <div className="flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
        <div className="text-red-400/60">{icon}</div>
        <div className="flex-1">
          <p className="text-sm font-medium text-white/80">{name}</p>
          <p className="text-[10px] text-red-400/60">Blocked</p>
        </div>
        <X className="text-red-400/60" />
      </div>
    </BlurReveal>
  )
}

// ─── Block Icon ─────────────────────────────────────────────────────────────

function BlockIcon({ delay }: { delay: number }) {
  return (
    <BlurReveal delay={delay} duration={0.5}>
      <div className="flex flex-col items-center gap-2">
        <motion.div
          className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-red-500/40 bg-red-900/100"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(239, 68, 68, 0)",
              "0 0 20px 5px rgba(239, 68, 68, 0.3)",
              "0 0 0 0 rgba(239, 68, 68, 0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <X className="h-8 w-8 text-red-200" />
        </motion.div>
        <span className="font-mono text-[10px] font-medium tracking-wider text-red-400/60">
          BLOCK
        </span>
      </div>
    </BlurReveal>
  )
}

// ─── Feature Card ───────────────────────────────────────────────────────────

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-white/10 bg-black/15 px-4 py-5 text-center">
      <div className="mb-3 text-primary">{icon}</div>
      <p className="mb-1 text-xs font-medium text-white/80">{title}</p>
      <p className="text-[10px] text-white/40">{description}</p>
    </div>
  )
}

// ─── Why It Matters Item ────────────────────────────────────────────────────

function WhyItMattersItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-emerald-400">{icon}</div>
      <div>
        <p className="text-sm font-medium text-white/80">{title}</p>
        <p className="text-xs text-white/40">{description}</p>
      </div>
    </div>
  )
}

// ─── PrivateDeployment ──────────────────────────────────────────────────────

export function PrivateDeployment() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="bg-surface relative overflow-hidden px-6 py-32"
    >
      <AmbientOrb
        color="rgba(52, 211, 153, 0.05)"
        size={500}
        x="10%"
        y="50%"
        blur={80}
        delay={1}
      />
      <AmbientOrb
        color="rgba(99, 102, 241, 0.04)"
        size={400}
        x="90%"
        y="30%"
        blur={60}
        delay={4}
      />

      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          label="Private Deployment"
          heading={
            <>
              Your contracts <span className="text-primary">never</span> leave
              your infrastructure.
            </>
          }
          subtitle="100% private. 100% secure. 100% yours."
          delay={0}
        />

        {/* Main Layout */}
        <div className="mx-auto mt-16 grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto_2fr_1.2fr]">
          {/* Left: Blocked Services */}
          <div className="flex flex-col gap-4">
            <BlockedService
              name="Third-party Cloud AI"
              icon={<Cloud />}
              delay={0.2}
            />
            <BlockedService name="Internet" icon={<Globe />} delay={0.3} />
          </div>

          {/* Block Icon + Animated Lines */}
          <div className="relative flex items-center justify-center">
            {/* SVG with bezier paths from services to block icon */}
            <svg
              className="pointer-events-none absolute top-0 left-0 h-full overflow-visible"
              width="60"
              style={{ marginLeft: -30 }}
            >
              {/* Path from Third-party Cloud AI → BlockIcon center */}
              <DashflowLine
                path="M0 25 C25 25, 25 50, 50 50"
                color="rgba(239, 68, 68, 0.5)"
                strokeWidth={1.5}
                dashSize={6}
                gapSize={4}
              />
              {/* Path from Internet → BlockIcon center */}
              <DashflowLine
                path="M0 75 C25 75, 25 50, 50 50"
                color="rgba(239, 68, 68, 0.5)"
                strokeWidth={1.5}
                dashSize={6}
                gapSize={4}
              />
            </svg>
            <BlockIcon delay={0.5} />
          </div>

          {/* Center: Infrastructure Card */}
          <BlurReveal delay={0.6} duration={0.7}>
            <div className="relative rounded-2xl border border-primary/30 bg-background p-6">
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow: [
                    "0 0 20px 5px rgba(99, 102, 241, 0.1)",
                    "0 0 40px 10px rgba(99, 102, 241, 0.2)",
                    "0 0 20px 5px rgba(99, 102, 241, 0.1)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Header */}
              <div className="relative mb-6 flex items-center justify-center gap-2">
                <Shield className="text-primary" />
                <span className="font-mono text-lg font-medium tracking-wider text-primary">
                  LEXON AI
                </span>
              </div>

              {/* Feature Cards Grid */}
              <div className="relative grid grid-cols-2 gap-3">
                <FeatureCard
                  icon={<Cpu />}
                  title="Local AI"
                  description="Models run inside your network"
                />
                <FeatureCard
                  icon={<Database />}
                  title="Encrypted Storage"
                  description="All data encrypted at rest"
                />
                <FeatureCard
                  icon={<ShieldCheck />}
                  title="Private Processing"
                  description="Contracts processed securely, locally"
                />
                <FeatureCard
                  icon={<FileText />}
                  title="Audit Logging"
                  description="Complete visibility & audit trail"
                />
              </div>

              {/* Bottom Banner */}
              <div className="relative mt-6 flex items-center justify-center gap-2 rounded-lg border border-primary/20 bg-primary/10 py-3">
                <Lock className="text-primary" />
                <span className="font-mono text-[10px] font-medium tracking-wider text-primary">
                  ZERO DATA LEAVES YOUR ENVIRONMENT
                </span>
              </div>
            </div>
          </BlurReveal>

          {/* Right: Why It Matters */}
          <BlurReveal delay={0.8} duration={0.6}>
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
              <p className="mb-6 font-mono text-xs font-medium tracking-wider text-emerald-400">
                WHY IT MATTERS
              </p>
              <div className="flex flex-col gap-5">
                <WhyItMattersItem
                  icon={<ShieldCheck />}
                  title="Complete Privacy"
                  description="Your contracts stay exclusively yours."
                />
                <WhyItMattersItem
                  icon={<Check />}
                  title="Full Compliance"
                  description="Meet internal & external compliance with ease."
                />
                <WhyItMattersItem
                  icon={<FileText />}
                  title="Complete Audit Trail"
                  description="Every action logged. Every detail recorded."
                />
                <WhyItMattersItem
                  icon={<Zap />}
                  title="Faster Decisions"
                  description="No latency. No dependency. Just results."
                />
              </div>
            </div>
          </BlurReveal>
        </div>

        {/* Bottom Banner */}
        <BlurReveal delay={1.0} duration={0.6}>
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="flex items-center justify-center gap-3 rounded-2xl border border-primary/20 bg-primary/10 py-5">
              <Shield className="text-primary" />
              <p className="text-lg font-semibold text-white/80">
                Your data. Your rules.{" "}
                <span className="text-primary">Your infrastructure.</span>
              </p>
            </div>
          </div>
        </BlurReveal>
      </div>
    </section>
  )
}
