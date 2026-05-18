"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { CtaSection } from "@/components/sections/cta-section"
import visionData from "../../vision.json"
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
  ShieldAlert,
  CloudOff,
  Layers3,
  FileSearch,
  ShieldCheck,
  BrainCircuit,
  BookOpenCheck,
  FilePenLine,
  Scale,
  Workflow,
  LibraryBig,
  BadgeCheck,
  GitCompareArrows,
  ClipboardList,
  Network,
  LockKeyhole,
  FileClock,
  UsersRound,
  MessagesSquare,
  Check,
} from "lucide-react"

function IconRenderer({ name }: { name: string }) {
  switch (name) {
    case "FileText":
      return <FileText className="h-8 w-8" />
    case "Brain":
      return <Brain className="h-8 w-8" />
    case "Shield":
      return <Shield className="h-8 w-8" />
    case "Layers":
      return <Layers className="h-8 w-8" />
    case "GitBranch":
      return <GitBranch className="h-8 w-8" />
    case "Target":
      return <Target className="h-8 w-8" />
    case "Zap":
      return <Zap className="h-8 w-8" />
    case "Lock":
      return <Lock className="h-8 w-8" />
    case "Users":
      return <Users className="h-8 w-8" />
    case "TrendingUp":
      return <TrendingUp className="h-8 w-8" />
    case "ShieldAlert":
      return <ShieldAlert className="h-8 w-8" />
    case "CloudOff":
      return <CloudOff className="h-8 w-8" />
    case "Layers3":
      return <Layers3 className="h-8 w-8" />
    case "FileSearch":
      return <FileSearch className="h-8 w-8" />
    case "ShieldCheck":
      return <ShieldCheck className="h-8 w-8" />
    case "BrainCircuit":
      return <BrainCircuit className="h-8 w-8" />
    case "BookOpenCheck":
      return <BookOpenCheck className="h-8 w-8" />
    case "FilePenLine":
      return <FilePenLine className="h-8 w-8" />
    case "Scale":
      return <Scale className="h-8 w-8" />
    case "Workflow":
      return <Workflow className="h-8 w-8" />
    case "LibraryBig":
      return <LibraryBig className="h-8 w-8" />
    case "BadgeCheck":
      return <BadgeCheck className="h-8 w-8" />
    case "GitCompareArrows":
      return <GitCompareArrows className="h-8 w-8" />
    case "ClipboardList":
      return <ClipboardList className="h-8 w-8" />
    case "Network":
      return <Network className="h-8 w-8" />
    case "LockKeyhole":
      return <LockKeyhole className="h-8 w-8" />
    case "FileClock":
      return <FileClock className="h-8 w-8" />
    case "UsersRound":
      return <UsersRound className="h-8 w-8" />
    case "MessagesSquare":
      return <MessagesSquare className="h-8 w-8" />
    case "Check":
      return <Check className="h-8 w-8" />
    default:
      return <FileText className="h-8 w-8" />
  }
}

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

  {
    icon: "ClipboardList",
    title: "Obligation Extraction & Tracking",
    description:
      "Extract deadlines, renewals, deliverables, payment terms, and compliance obligations",
    phase: "Operational Intelligence",
    priority: "high",
    color: "from-chart-2 to-chart-3",
  },
  {
    icon: "ShieldAlert",
    title: "Vendor Risk Intelligence",
    description:
      "Analyze procurement, liability, jurisdiction, indemnity, and data security risks",
    phase: "Risk Intelligence",
    priority: "high",
    color: "from-chart-3 to-chart-4",
  },
  {
    icon: "Network",
    title: "Legal Knowledge Graph",
    description:
      "Connect vendors, clauses, obligations, departments, and risks into searchable legal intelligence",
    phase: "Knowledge Infrastructure",
    priority: "medium",
    color: "from-chart-4 to-chart-5",
  },
  {
    icon: "Lock",
    title: "Air-Gapped Enterprise Deployment",
    description:
      "Fully isolated deployment for government, healthcare, banking, and defense organizations",
    phase: "Enterprise Infrastructure",
    priority: "high",
    color: "from-chart-5 to-primary",
  },
  {
    icon: "FileAudit",
    title: "Audit Trails & Decision History",
    description:
      "Track AI reasoning, approvals, policy violations, and reviewer decisions",
    phase: "Governance",
    priority: "medium",
    color: "from-primary to-chart-3",
  },
  {
    icon: "Users",
    title: "Role-Based Legal Access",
    description:
      "Department-specific access controls for legal, procurement, finance, and compliance teams",
    phase: "Enterprise Infrastructure",
    priority: "medium",
    color: "from-chart-2 to-chart-5",
  },
  {
    icon: "BrainCircuit",
    title: "Private Legal Copilot",
    description:
      "Internal AI assistant for legal Q&A, policy interpretation, contract comparison, and clause reasoning",
    phase: "AI Intelligence Layer",
    priority: "medium",
    color: "from-chart-4 to-primary",
  },
]

export default function VisionPageV3() {
  const heroRef = useRef<HTMLDivElement>(null)
  const problemsRef = useRef<HTMLDivElement>(null)
  const startRef = useRef<HTMLDivElement>(null)
  const roadmapRef = useRef<HTMLDivElement>(null)
  const principlesRef = useRef<HTMLDivElement>(null)
  const securityRef = useRef<HTMLDivElement>(null)
  const useCasesRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

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
  const securityInView = useInView(securityRef, {
    once: true,
    margin: "-100px",
  })
  const useCasesInView = useInView(useCasesRef, {
    once: true,
    margin: "-100px",
  })
  const featuresInView = useInView(featuresRef, {
    once: true,
    margin: "-100px",
  })

  const vision = visionData

  return (
    <>
      <main className="relative min-h-screen bg-background">
        {/* Vision Hero (data-driven) */}
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
                {vision.hero.headline || "The future of legal decisions is"}
                {/* <br />
                <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
                  {vision.hero.subhead || "private, local, and intelligent"}
                </span> */}
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-muted-foreground">
                {vision.hero.subhead ||
                  "We started with NDAs. We're building the infrastructure for private legal intelligence."}
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
              {vision?.problems?.map((p, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={problemsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="h-full border-2 border-border p-6">
                    {
                      <IconRenderer
                        name={typeof p.icon === "string" ? p.icon : ""}
                      />
                    }
                    <h3 className="mb-3 text-xl font-bold">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {p.description}
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

        {/* Vision-driven Start Section */}
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
                NDA review is the entry point, not the destination. This is
                Layer 1 of the system.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {vision?.start?.map((s, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={startInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  <Card className="h-full border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                        {
                          <IconRenderer
                            name={typeof s.icon === "string" ? s.icon : ""}
                          />
                        }
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-bold text-primary">
                          {s.status}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {s.layer}
                        </span>
                      </div>
                    </div>
                    <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
                    <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                    <div className="inline-block rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                      {s.metric}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
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
              {vision?.roadmap?.map((r: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  animate={roadmapInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="group border-2 border-border p-6 transition-colors hover:border-primary/30">
                    <div className="flex items-start gap-6">
                      <div
                        className={`h-14 w-14 rounded-xl bg-gradient-to-br ${r.color} flex flex-shrink-0 items-center justify-center`}
                      >
                        {
                          <IconRenderer
                            name={typeof r.icon === "string" ? r.icon : ""}
                          />
                        }
                      </div>
                      <div className="flex-1">
                        <div className="mb-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <h3 className="text-2xl font-bold transition-colors group-hover:text-primary">
                              {r.title}
                            </h3>
                            {r.built && (
                              <span className="flex items-center gap-1 rounded-full bg-primary/20 px-2 py-0.5 text-xs font-bold text-primary">
                                <Check className="h-3 w-3" />
                                Built
                              </span>
                            )}
                          </div>
                          <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium">
                            {r.phase}
                          </span>
                        </div>
                        <p className="leading-relaxed text-muted-foreground">
                          {r.description}
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
              {vision?.principles?.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={principlesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="h-full border-2 border-border p-8">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                      <IconRenderer name={item.icon} />
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

        {/* Security & Compliance */}
        {vision?.security && (
          <section ref={securityRef} className="bg-muted/30 px-6 py-32">
            <div className="container mx-auto max-w-7xl">
              <motion.div
                className="mb-16 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={securityInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  {vision.security.title}
                </h2>
                <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                  {vision.security.trust_statement.description}
                </p>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-6">
                  <h3 className="mb-4 text-xl font-bold">
                    {vision.security.trust_statement.title}
                  </h3>
                  <ul className="space-y-2">
                    {vision.security.trust_statement.markers?.map(
                      (m: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Lock className="h-4 w-4 text-primary" />
                          {m}
                        </li>
                      )
                    )}
                  </ul>
                </Card>
                <div className="grid gap-4">
                  {vision.security.controls?.map((c: any, i: number) => (
                    <Card key={i} className="border-2 border-border p-4">
                      <h4 className="mb-1 font-bold">{c.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {c.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Use Cases */}
        {vision?.use_cases && vision.use_cases.length > 0 && (
          <section ref={useCasesRef} className="px-6 py-32">
            <div className="container mx-auto max-w-7xl">
              <motion.div
                className="mb-16 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Use Cases
                </h2>
              </motion.div>
              <div className="grid gap-6 md:grid-cols-2">
                {vision.use_cases.map((uc: any, i: number) => (
                  <Card key={i} className="border-2 border-border p-6">
                    <h3 className="mb-2 text-lg font-bold">{uc.scenario}</h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                      {uc.outcome}
                    </p>
                    <div className="inline-block rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                      {uc.metric}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Features */}
        {/* {vision?.features && vision.features.length > 0 && (
          <section ref={featuresRef} className="bg-muted/30 px-6 py-32">
            <div className="container mx-auto max-w-7xl">
              <motion.div
                className="mb-16 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Features
                </h2>
              </motion.div>
              <div className="grid gap-6 md:grid-cols-3">
                {vision.features.map((f: any, i: number) => (
                  <Card key={i} className="border-2 border-border p-6">
                    <h3 className="mb-3 text-lg font-bold">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {f.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )} */}

        {/* CTA */}
        <CtaSection />
      </main>
    </>
  )
}
