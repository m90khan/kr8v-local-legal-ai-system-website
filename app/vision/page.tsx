"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { CtaSectionV3 } from "@/components/sections/cta-section-v3"
import {
  FileText,
  Brain,
  Shield,
  Layers,
  GitBranch,
  Target,
  Zap,
  Lock,
  Users,
  TrendingUp,
} from "lucide-react"

const problems = [
  {
    icon: TrendingUp,
    title: "Legal AI today depends on external infrastructure",
    description:
      "Every contract sent to external APIs creates data exposure. Your most sensitive business information travels through systems you don't control.",
  },
  {
    icon: Shield,
    title: "Sensitive contracts are processed outside your control",
    description:
      "NDAs, contracts, and agreements contain trade secrets, financials, and strategic plans that must never be compromised.",
  },
  {
    icon: Layers,
    title: "Fragmented tools break decision-making",
    description:
      "Teams juggle document management, manual review, and external counsel. No unified system exists for legal intelligence.",
  },
]

const start = [
  {
    icon: FileText,
    title: "NDA Review",
    description: "Instantly analyzes 50+ clause types in seconds",
    status: "Live",
    metric: "10 sec avg",
    layer: "Layer 1",
  },
  {
    icon: Brain,
    title: "Risk Detection Engine",
    description: "Pattern recognition across thousands of contracts",
    status: "Live",
    metric: "95% accuracy",
    layer: "Layer 2",
  },
  {
    icon: Shield,
    title: "Decision Intelligence",
    description: "Clear recommendations: Safe, Review, or High Risk",
    status: "Live",
    metric: "3 risk levels",
    layer: "Layer 3",
  },
]

const roadmap = [
  {
    icon: Brain,
    title: "Multi-Document Reasoning",
    description: "Compare NDAs against master agreements and related contracts",
    phase: "Intelligence Expansion",
    color: "from-primary to-chart-2",
  },
  {
    icon: Target,
    title: "Policy Compliance Engine",
    description:
      "Automated compliance checks across regulations and company policy",
    phase: "Intelligence Expansion",
    color: "from-chart-2 to-chart-3",
  },
  {
    icon: Layers,
    title: "Contract Lifecycle Management",
    description: "Track contracts from draft to signature to renewal",
    phase: "System Integration",
    color: "from-chart-3 to-chart-4",
  },
  {
    icon: GitBranch,
    title: "Workflow Automation",
    description: "Automatic routing, approvals, and stakeholder notifications",
    phase: "System Integration",
    color: "from-chart-4 to-chart-5",
  },
  {
    icon: Users,
    title: "AI Legal Assistant",
    description: "Natural language contract queries and clause explanations",
    phase: "AI Interface",
    color: "from-chart-5 to-primary",
  },
]

const principles = [
  {
    icon: Lock,
    title: "Privacy is not a feature. It's the architecture.",
    description:
      "Ollama, on-device models, self-hosted infrastructure. Your contracts never leave your network.",
  },
  {
    icon: Shield,
    title: "Security is guaranteed, not assumed.",
    description:
      "No external API calls. No model training on your data. No third-party access. Ever.",
  },
  {
    icon: Zap,
    title: "AI augments human judgment — not replaces it.",
    description:
      "We automate document review, not legal judgment. Lawyers focus on strategy, not reading.",
  },
]

export default function VisionPageV3() {
  const heroRef = useRef<HTMLDivElement>(null)
  const problemsRef = useRef<HTMLDivElement>(null)
  const startRef = useRef<HTMLDivElement>(null)
  const roadmapRef = useRef<HTMLDivElement>(null)
  const principlesRef = useRef<HTMLDivElement>(null)

  const problemsInView = useInView(problemsRef, {
    once: true,
    margin: "-100px",
  })
  const startInView = useInView(startRef, { once: true, margin: "-100px" })
  const roadmapInView = useInView(roadmapRef, { once: true, margin: "-100px" })
  const principlesInView = useInView(principlesRef, {
    once: true,
    margin: "-100px",
  })

  return (
    <main className="relative min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden px-6 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

        <div className="relative z-10 container mx-auto max-w-7xl px-6">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
              <span className="text-sm font-medium text-primary">
                Product Vision
              </span>
            </div>
            <h1 className="mb-6 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
              The future of legal decisions is
              <br />
              <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
                private, local, and intelligent
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-muted-foreground">
              We started with NDAs. We're building the infrastructure for
              private legal intelligence.
            </p>
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-4 py-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Lock className="h-4 w-4 text-primary" />
              <span className="text-sm">
                Runs locally. Your contracts never leave your system.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Problem with Legal AI Today */}
      <section ref={problemsRef} className="bg-muted/30 px-6 py-32">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={problemsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              The Problem with Legal AI Today
            </h2>
            <p className="text-md mx-auto max-w-2xl text-muted-foreground">
              Legal intelligence must be private by design.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {problems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={problemsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="h-full border-2 border-border p-6">
                  <item.icon className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-chart-2/10 p-8 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={problemsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="mb-2 text-2xl font-bold">
              This is why private legal intelligence is the only logical path
              forward.
            </p>
            <p className="text-muted-foreground">
              Private infrastructure. Local AI. Complete control.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Where It Starts */}
      <section ref={startRef} className="px-6 py-32">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={startInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Where It Starts
            </h2>
            <p className="mx-auto max-w-2xl text-center text-xl text-muted-foreground">
              NDA review is the entry point, not the destination. This is Layer
              1 of the system.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {start.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={startInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              >
                <Card className="h-full border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-bold text-primary">
                        {item.status}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {item.layer}
                      </span>
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="inline-block rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                    {item.metric}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We're Going */}
      <section ref={roadmapRef} className="bg-muted/30 px-6 py-32">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={roadmapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Where We're Going
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              From single-document analysis to complete legal intelligence.
            </p>
          </motion.div>

          <div className="space-y-4">
            {roadmap.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={roadmapInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="group border-2 border-border p-6 transition-colors hover:border-primary/30">
                  <div className="flex items-start gap-6">
                    <div
                      className={`h-14 w-14 rounded-xl bg-gradient-to-br ${item.color} flex flex-shrink-0 items-center justify-center`}
                    >
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-2xl font-bold transition-colors group-hover:text-primary">
                          {item.title}
                        </h3>
                        <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium">
                          {item.phase}
                        </span>
                      </div>
                      <p className="leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Behind the System */}
      <section ref={principlesRef} className="px-6 py-32">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={principlesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Principles Behind the System
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Legal AI should never require trust. It should guarantee it.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {principles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={principlesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="h-full border-2 border-border p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSectionV3 />
    </main>
  )
}
