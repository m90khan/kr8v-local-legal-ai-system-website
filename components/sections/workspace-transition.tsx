"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { easing } from "@/lib/animation"
import { BlurReveal } from "@/components/shared/blur-reveal"
import { AmbientOrb } from "@/components/shared/ambient-orb"
import { SectionHeader } from "@/components/shared/section-header"

export function WorkspaceTransition() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-surface px-6 py-32"
    >
      <AmbientOrb color="rgba(99, 102, 241, 0.06)" size={600} x="50%" y="50%" blur={100} delay={0} />

      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          label="Analysis Complete"
          heading="Open Workspace"
          subtitle="Everything you just watched is what happens inside this interface."
          labelVariant="green"
          labelIcon={
            <svg className="h-4 w-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          }
          delay={0}
        />

        {/* Dashboard Preview (zooms in) */}
        <BlurReveal delay={0.5} duration={1}>
          <div className="mx-auto max-w-5xl">
            <motion.div
              className="relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-card shadow-2xl"
              whileHover={{ borderColor: "rgba(99, 102, 241, 0.3)" }}
            >
              {/* Glow on dashboard */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                animate={isInView ? {
                  boxShadow: [
                    "0 0 0 0 rgba(99, 102, 241, 0)",
                    "0 0 40px 10px rgba(99, 102, 241, 0.08)",
                    "0 0 0 0 rgba(99, 102, 241, 0)",
                  ],
                } : {}}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Browser Chrome */}
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <div className="h-3 w-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <div className="rounded-md bg-background/50 px-4 py-1 text-xs text-muted-foreground">
                    app.lexon.ai/workspace
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="bg-gradient-to-br from-background via-background to-muted/30 p-8">
                <div className="grid grid-cols-3 gap-6">
                  {/* Left Panel - Document */}
                  <div className="col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Vendor Agreement.pdf</div>
                      <div className="rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-xs text-green-600">
                        Approved
                      </div>
                    </div>
                    <div className="space-y-2 rounded-lg border border-border bg-background p-4">
                      <div className="h-3 w-full rounded bg-muted/30" />
                      <div className="h-3 w-full rounded bg-muted/30" />
                      <div className="h-3 w-4/5 rounded bg-muted/30" />
                      <div className="my-2 rounded border-l-4 border-green-500 bg-green-500/10 p-2">
                        <div className="h-2 w-3/4 rounded bg-green-500/30" />
                      </div>
                      <div className="h-3 w-full rounded bg-muted/30" />
                      <div className="h-3 w-2/3 rounded bg-muted/30" />
                    </div>
                  </div>

                  {/* Right Panel - Analysis */}
                  <div className="space-y-4">
                    <div className="rounded-lg border border-border bg-background p-4">
                      <div className="mb-2 text-xs text-muted-foreground">Risk Score</div>
                      <div className="text-2xl font-bold text-primary">91/100</div>
                    </div>
                    <div className="rounded-lg border border-border bg-background p-4">
                      <div className="mb-2 text-xs text-muted-foreground">Issues Found</div>
                      <div className="flex gap-2">
                        <span className="rounded-full bg-red-500/10 px-2 py-0.5 text-xs text-red-500">2 High</span>
                        <span className="rounded-full bg-yellow-500/10 px-2 py-0.5 text-xs text-yellow-500">3 Med</span>
                        <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs text-green-500">3 Low</span>
                      </div>
                    </div>
                    <div className="rounded-lg border border-border bg-background p-4">
                      <div className="mb-2 text-xs text-muted-foreground">Assigned To</div>
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">
                          SC
                        </div>
                        <span className="text-sm">Sarah Chen</span>
                      </div>
                    </div>
                    <div className="rounded-lg border border-border bg-background p-4">
                      <div className="mb-2 text-xs text-muted-foreground">Actions</div>
                      <div className="space-y-2">
                        <div className="rounded bg-primary/10 px-3 py-1.5 text-center text-xs font-medium text-primary">
                          View Analysis
                        </div>
                        <div className="rounded bg-muted/50 px-3 py-1.5 text-center text-xs text-muted-foreground">
                          Export DOCX
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA below dashboard */}
            <BlurReveal delay={1.2} duration={0.6}>
              <div className="mt-12 text-center">
                <motion.a
                  href="/contact?activeTab=demo"
                  className="inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-primary to-chart-2 px-8 py-4 text-sm font-medium text-white shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Demo
                </motion.a>
              </div>
            </BlurReveal>
          </div>
        </BlurReveal>
      </div>
    </section>
  )
}
