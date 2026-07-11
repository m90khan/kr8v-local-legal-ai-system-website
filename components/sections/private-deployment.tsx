"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { easing } from "@/lib/animation"
import { BlurReveal } from "@/components/shared/blur-reveal"
import { DashflowLine } from "@/components/shared/dashflow-line"
import { AmbientOrb } from "@/components/shared/ambient-orb"
import { SectionHeader } from "@/components/shared/section-header"

// ─── Icons ──────────────────────────────────────────────────────────────────

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function CloudIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  )
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function ArrowDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  )
}

// ─── Grid Card ──────────────────────────────────────────────────────────────

function GridCard({
  title,
  subtitle,
  variant,
  children,
}: {
  title: string
  subtitle: string
  variant: "danger" | "safe" | "success"
  children: React.ReactNode
}) {
  const borderColor =
    variant === "danger"
      ? "border-red-500/20"
      : variant === "safe"
        ? "border-primary/30"
        : "border-emerald-500/30"
  const bg =
    variant === "danger"
      ? "bg-red-500/5"
      : variant === "safe"
        ? "bg-primary/10"
        : "bg-emerald-500/10"
  const labelColor =
    variant === "danger"
      ? "text-red-400/60"
      : variant === "safe"
        ? "text-primary"
        : "text-emerald-400"

  return (
    <div
      className={`relative flex flex-col items-center rounded-2xl border ${borderColor} ${bg} px-6 py-8`}
    >
      <p className={`mb-1 font-mono text-xs font-medium tracking-wider ${labelColor}`}>
        {title}
      </p>
      <p className="mb-6 text-sm font-semibold text-white/80">{subtitle}</p>
      {children}
    </div>
  )
}

// ─── Pipeline Step ──────────────────────────────────────────────────────────

function PipelineStep({
  label,
  description,
  isLast,
}: {
  label: string
  description: string
  isLast?: boolean
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-lg border border-border bg-card px-4 py-2 text-center">
        <p className="text-xs font-medium text-white/80">{label}</p>
        <p className="text-[10px] text-white/40">{description}</p>
      </div>
      {!isLast && (
        <div className="my-1.5">
          <ArrowDownIcon className="text-white/20" />
        </div>
      )}
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
      className="relative overflow-hidden bg-surface px-6 py-32"
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

      <div className="container mx-auto max-w-5xl">
        <SectionHeader
          label="Private Deployment"
          heading="Nothing left your network."
          subtitle="Every contract stays inside your infrastructure. Always."
          delay={0}
        />

        {/* 3-Column Grid */}
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1.5fr_auto_1fr]">
            {/* Left: Public Cloud */}
            <BlurReveal delay={0.2} duration={0.6}>
              <GridCard
                title="PUBLIC CLOUD"
                subtitle="Third-party AI Services"
                variant="danger"
              >
                <div className="flex flex-wrap justify-center gap-2">
                  {["OpenAI", "Claude", "Gemini", "Internet"].map((name) => (
                    <span
                      key={name}
                      className="rounded bg-red-500/10 px-2 py-0.5 text-[10px] text-red-400/40 line-through"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </GridCard>
            </BlurReveal>

            {/* Connector: Left → Center */}
            <BlurReveal delay={0.4} duration={0.5} className="hidden md:block">
              <div className="flex flex-col items-center gap-2">
                <XIcon className="text-red-400/60" />
                <svg width="60" height="20" className="overflow-visible">
                  <DashflowLine
                    path="M0 10 L60 10"
                    color="rgba(239, 68, 68, 0.3)"
                    strokeWidth={1.5}
                  />
                </svg>
              </div>
            </BlurReveal>

            {/* Center: Your Network */}
            <BlurReveal delay={0.5} duration={0.6}>
              <GridCard
                title="YOUR NETWORK"
                subtitle="Local AI"
                variant="safe"
              >
                <div className="flex items-center gap-2">
                  <ShieldIcon className="text-primary" />
                  <span className="text-xs text-primary/80">Private Processing</span>
                </div>
              </GridCard>
            </BlurReveal>

            {/* Connector: Center → Right */}
            <BlurReveal delay={0.7} duration={0.5} className="hidden md:block">
              <div className="flex flex-col items-center gap-2">
                <svg width="60" height="20" className="overflow-visible">
                  <DashflowLine
                    path="M0 10 L60 10"
                    color="rgba(99, 102, 241, 0.4)"
                    strokeWidth={1.5}
                  />
                </svg>
                <ArrowRightIcon className="text-primary/40" />
              </div>
            </BlurReveal>

            {/* Right: Review Complete */}
            <BlurReveal delay={0.8} duration={0.6}>
              <GridCard
                title="REVIEW COMPLETE"
                subtitle="Secure Outcome"
                variant="success"
              >
                <div className="flex items-center gap-2">
                  <CheckIcon className="text-emerald-400" />
                  <span className="text-xs text-emerald-400/80">Nothing exposed</span>
                </div>
              </GridCard>
            </BlurReveal>
          </div>

          {/* Vertical Pipeline */}
          <BlurReveal delay={1.0} duration={0.6}>
            <div className="mt-12 flex justify-center">
              <div className="flex flex-col items-center">
                <PipelineStep
                  label="Lexon Contract"
                  description="Upload & parsing"
                />
                <PipelineStep
                  label="AI Review Engine"
                  description="Clause extraction & analysis"
                />
                <PipelineStep
                  label="Policy Comparison"
                  description="Risk identification & scoring"
                />
                <PipelineStep
                  label="Local AI Models"
                  description="Private inference only"
                />
                <PipelineStep
                  label="Decision"
                  description="Approve / Reject / Flag"
                />
                <PipelineStep
                  label="Audit History"
                  description="Complete traceability"
                  isLast
                />
              </div>
            </div>
          </BlurReveal>

          {/* Outcomes */}
          <BlurReveal delay={1.2} duration={0.6}>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { label: "Private processing", color: "emerald" },
                { label: "Local AI execution", color: "emerald" },
                { label: "Encrypted storage", color: "emerald" },
                { label: "Complete audit trail", color: "emerald" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="flex items-center justify-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3"
                >
                  <CheckIcon className="text-emerald-400" />
                  <span className="text-xs text-emerald-400/80">{item.label}</span>
                </div>
              ))}
            </div>
          </BlurReveal>
        </div>
      </div>
    </section>
  )
}
