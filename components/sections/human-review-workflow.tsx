"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { easing } from "@/lib/animation"
import { StatusBadge } from "@/components/shared/status-badge"
import { BlurReveal } from "@/components/shared/blur-reveal"
import { AmbientOrb } from "@/components/shared/ambient-orb"
import { FlowingParticles } from "@/components/shared/flowing-particles"
import { SectionHeader } from "@/components/shared/section-header"

export function HumanReviewWorkflow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-background px-6 py-32"
    >
      <AmbientOrb color="rgba(52, 211, 153, 0.05)" size={500} x="80%" y="20%" blur={80} delay={2} />
      <AmbientOrb color="rgba(99, 102, 241, 0.04)" size={400} x="10%" y="80%" blur={60} delay={0} />

      <div className="container mx-auto max-w-5xl">
        <SectionHeader
          label="Human + AI Workflow"
          heading="AI assists. Humans approve."
          subtitle="Every action is auditable. Every decision is traceable."
          delay={0}
        />

        {/* Timeline */}
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* State-aware vertical line (color changes as it passes nodes) */}
            <div className="absolute left-6 top-0 bottom-0">
              {/* Base line */}
              <motion.div
                className="absolute inset-0 w-0.5 bg-border"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ delay: 0.5, duration: 1.5, ease: easing }}
                style={{ transformOrigin: "top" }}
              />
              {/* Animated colored overlay */}
              <motion.div
                className="absolute inset-0 w-0.5 origin-top"
                style={{
                  background: "linear-gradient(to bottom, rgba(99, 102, 241, 0.4), rgba(99, 102, 241, 0.4), rgba(52, 211, 153, 0.5))",
                }}
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ delay: 0.5, duration: 2, ease: easing }}
              />
              {/* Flowing particles along timeline */}
              <FlowingParticles
                path="M 0 0 C 0 10 0 20 0 30"
                particleCount={1}
                speed={6}
                color="rgba(99, 102, 241, 0.5)"
                glowColor="rgba(99, 102, 241, 0.15)"
                particleSize={2}
                className="absolute left-0 top-0"
              />
            </div>

            {/* Timeline nodes */}
            <div className="space-y-8">
              {/* Analysis Complete */}
              <BlurReveal delay={0.8} duration={0.5}>
                <div className="relative flex gap-6">
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 11l3 3L22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  </div>
                  <div className="flex-1 rounded-2xl border-2 border-border bg-card p-6">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="font-bold">Analysis Complete</span>
                      <StatusBadge label="8 Issues Found" variant="warning" delay={1.2} />
                      <StatusBadge label="Confidence: High" variant="success" delay={1.4} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      AI identified 8 potential issues across 147 clauses. 2 high-risk deviations require legal review.
                    </p>
                  </div>
                </div>
              </BlurReveal>

              {/* Assigned to Legal */}
              <BlurReveal delay={1.5} duration={0.5}>
                <div className="relative flex gap-6">
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-border bg-background">
                    <svg className="h-5 w-5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="flex-1 rounded-2xl border-2 border-border bg-card p-6">
                    <div className="mb-2 font-bold">Assigned to Legal</div>
                    <p className="text-sm text-muted-foreground">
                      Sarah Chen · Senior Legal Counsel · Estimated review time: 15 minutes
                    </p>
                  </div>
                </div>
              </BlurReveal>

              {/* Legal Review */}
              <BlurReveal delay={2.2} duration={0.5}>
                <div className="relative flex gap-6">
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-border bg-background">
                    <svg className="h-5 w-5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                  <div className="flex-1 rounded-2xl border-2 border-border bg-card p-6">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="font-bold">Legal Review</span>
                      <StatusBadge label="2 clauses flagged" variant="danger" delay={2.6} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Reviewer flagged Section 3.2 (Liability) and Section 7.1 (Indemnification) for revision.
                    </p>
                  </div>
                </div>
              </BlurReveal>

              {/* Approved - with GlowFilter */}
              <BlurReveal delay={2.9} duration={0.5}>
                <div className="relative flex gap-6">
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-green-500 bg-green-500/10">
                    <svg className="h-5 w-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    {/* Glow effect on approved node */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={isInView ? {
                        boxShadow: [
                          "0 0 0 0 rgba(34, 197, 94, 0)",
                          "0 0 15px 5px rgba(34, 197, 94, 0.2)",
                          "0 0 0 0 rgba(34, 197, 94, 0)",
                        ],
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
                    />
                  </div>
                  <div className="flex-1 rounded-2xl border-2 border-green-500/30 bg-green-500/5 p-6">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="font-bold text-green-600 dark:text-green-400">Approved</span>
                      <StatusBadge label="Ready for signature" variant="success" delay={3.3} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Contract approved with 2 clause revisions. Awaiting counter-party signature.
                    </p>
                  </div>
                </div>
              </BlurReveal>

              {/* Audit Updated */}
              <BlurReveal delay={3.6} duration={0.5}>
                <div className="relative flex gap-6">
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-border bg-background">
                    <svg className="h-5 w-5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="flex-1 rounded-2xl border-2 border-border bg-card p-6">
                    <div className="mb-2 font-bold">Audit Updated</div>
                    <p className="text-sm text-muted-foreground">
                      Full review history recorded. All actions timestamped and attributed. Export available.
                    </p>
                  </div>
                </div>
              </BlurReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
