"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { easing } from "@/lib/animation"
import { BlurReveal } from "@/components/shared/blur-reveal"
import { AmbientOrb } from "@/components/shared/ambient-orb"
import { SectionHeader } from "@/components/shared/section-header"

export function ProcurementIntelligence() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-background px-6 py-32"
    >
      <AmbientOrb
        color="rgba(99, 102, 241, 0.05)"
        size={600}
        x="5%"
        y="30%"
        blur={100}
        delay={0}
      />
      <AmbientOrb
        color="rgba(234, 179, 8, 0.04)"
        size={400}
        x="95%"
        y="70%"
        blur={70}
        delay={3}
      />

      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          label="Procurement Intelligence"
          heading="It remembers every supplier."
          subtitle="Cross-document intelligence across your entire vendor portfolio."
          delay={0}
        />

        {/* Phase 1: Vendor Memory */}
        <div className="mx-auto mb-20 max-w-4xl">
          <BlurReveal delay={0.3} duration={0.5}>
            <div className="mb-8 text-center text-sm font-medium text-muted-foreground">
              Single Vendor View
            </div>
          </BlurReveal>

          <BlurReveal delay={0.5} duration={0.6}>
            <motion.div
              className="mx-auto max-w-md rounded-2xl border-2 border-border bg-card p-8"
              whileHover={{ borderColor: "rgba(99, 102, 241, 0.3)" }}
            >
              <div className="mb-6 text-center">
                <div className="text-2xl font-bold">
                  Northwind Manufacturing
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                {["NDA", "MSA", "DPA", "Vendor Agreement"].map((doc, i) => (
                  <motion.div
                    key={doc}
                    className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: 1 + i * 0.15,
                      duration: 0.4,
                      ease: easing,
                    }}
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </BlurReveal>
        </div>

        {/* Phase 2: Vendor Intelligence */}
        <div className="mx-auto mb-20 max-w-4xl">
          <BlurReveal delay={2} duration={0.5}>
            <div className="mb-8 text-center text-sm font-medium text-muted-foreground">
              Intelligence Summary
            </div>
          </BlurReveal>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { label: "Total Contracts", value: "12", color: "text-primary" },
              {
                label: "Average Risk",
                value: "Medium",
                color: "text-yellow-500",
              },
              {
                label: "Repeated Liability Language",
                value: "Seen in 5 contracts",
                color: "text-red-500",
              },
              {
                label: "Preferred Language",
                value: '"Liability limited to fees paid"',
                color: "text-green-500",
              },
              {
                label: "Negotiation History",
                value: "2 revisions",
                color: "text-muted-foreground",
              },
              {
                label: "Last Review",
                value: "3 days ago",
                color: "text-muted-foreground",
              },
            ].map((item, i) => (
              <BlurReveal key={i} delay={2.3 + i * 0.1} duration={0.4}>
                <motion.div
                  className="rounded-xl border-2 border-border bg-card p-4"
                  whileHover={{ borderColor: "rgba(99, 102, 241, 0.3)" }}
                >
                  <div className="text-xs text-muted-foreground">
                    {item.label}
                  </div>
                  <div className={`mt-1 font-bold ${item.color}`}>
                    {item.value}
                  </div>
                </motion.div>
              </BlurReveal>
            ))}
          </div>
        </div>

        {/* Phase 3: Policy Comparison */}
        <div className="mx-auto mb-20 max-w-4xl">
          <BlurReveal delay={3.2} duration={0.5}>
            <div className="mb-8 text-center text-sm font-medium text-muted-foreground">
              Policy Comparison
            </div>
          </BlurReveal>

          <BlurReveal delay={3.4} duration={0.6}>
            <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border-2 border-border bg-card">
              {/* Company Policy */}
              <div className="border-b border-border p-6">
                <div className="mb-2 text-xs font-medium text-muted-foreground">
                  Company Policy
                </div>
                <motion.div
                  className="rounded-lg bg-primary/5 p-3 font-mono text-sm"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 3.8, duration: 0.5 }}
                >
                  Liability capped at fees paid
                </motion.div>
              </div>

              {/* Vendor Contract */}
              <div className="p-6">
                <div className="mb-2 text-xs font-medium text-muted-foreground">
                  Vendor Contract
                </div>
                <motion.div
                  className="rounded-lg bg-red-500/5 p-3 font-mono text-sm"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 4.2, duration: 0.5 }}
                >
                  Unlimited liability
                </motion.div>
              </div>

              {/* Deviation Result */}
              <motion.div
                className="border-t border-border bg-red-500/5 p-4 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 4.6, duration: 0.4, ease: easing }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-600">
                  Deviation Found
                </span>
              </motion.div>
            </div>
          </BlurReveal>
        </div>

        {/* Phase 4: Procurement Bottleneck (Before/After) */}
        <div className="mx-auto mb-20 max-w-5xl">
          <BlurReveal delay={5} duration={0.5}>
            <div className="mb-8 text-center text-sm font-medium text-muted-foreground">
              Procurement Bottleneck - Eliminated
            </div>
          </BlurReveal>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Before */}
            <BlurReveal delay={5.2} duration={0.6}>
              <div className="rounded-2xl border-2 border-border bg-card p-6">
                <div className="mb-4 text-sm font-medium text-muted-foreground">
                  Before
                </div>
                <div className="space-y-3">
                  {[
                    "Vendor sends contract",
                    "Inbox",
                    "Waiting...",
                    "Waiting...",
                    "Waiting...",
                    "Legal Review",
                    "Signed",
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      className={`flex items-center gap-3 rounded-lg border border-border px-3 py-2 text-sm ${
                        step.includes("Waiting")
                          ? "border-yellow-500/30 bg-yellow-500/5 text-yellow-600"
                          : ""
                      }`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 5.4 + i * 0.1, duration: 0.3 }}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
                      {step}
                    </motion.div>
                  ))}
                </div>
              </div>
            </BlurReveal>

            {/* With Lexon */}
            <BlurReveal delay={5.2} duration={0.6}>
              <div className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-6">
                <div className="mb-4 text-sm font-medium text-primary">
                  With Lexon
                </div>
                <div className="space-y-3">
                  {[
                    "Vendor sends contract",
                    "Lexon analyzes",
                    "Review Required",
                    "Legal Review",
                    "Signed",
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3 rounded-lg border border-border px-3 py-2 text-sm"
                      initial={{ opacity: 0, x: 10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 5.4 + i * 0.15, duration: 0.3 }}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {step}
                    </motion.div>
                  ))}
                </div>
              </div>
            </BlurReveal>
          </div>
        </div>

        {/* Phase 5: Zoom Out */}
        <BlurReveal delay={6.5} duration={0.8}>
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {[
                { value: "127", label: "Vendors" },
                { value: "482", label: "Contracts" },
                { value: "41", label: "Pending Reviews" },
                { value: "92", label: "Approved" },
                { value: "18", label: "High Risk" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border-2 border-border bg-card p-4 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 6.8 + i * 0.1,
                    duration: 0.4,
                    ease: easing,
                  }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(99, 102, 241, 0.3)",
                  }}
                >
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </BlurReveal>
      </div>
    </section>
  )
}
