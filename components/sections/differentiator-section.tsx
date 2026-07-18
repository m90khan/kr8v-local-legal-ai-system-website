"use client"

import { motion, useInView, AnimatePresence } from "motion/react"
import { useRef, useState, useEffect } from "react"
import {
  BookOpen,
  FileText,
  Scale,
  History,
  CheckCircle,
  File,
} from "lucide-react"
import { easing } from "@/lib/animation"
import { BlurReveal } from "@/components/shared/blur-reveal"
import { AmbientOrb } from "@/components/shared/ambient-orb"
import { SectionHeader } from "@/components/shared/section-header"

// ─── Constants ──────────────────────────────────────────────────────────────

const LOOP_DURATION = 8000 // 8 seconds per loop
const KNOWLEDGE_ITEMS = [
  { icon: BookOpen, label: "Company Policies" },
  { icon: FileText, label: "Legal Playbooks" },
  { icon: Scale, label: "Clause Library" },
  { icon: History, label: "Previous Reviews" },
]

const LEXON_LAYERS = ["Knowledge Layer", "Review Engine", "Decision Engine"]

const OUTCOME_ITEMS = [
  "Policy Validation",
  "Clause Matches",
  "Risk Detection",
  "AI Recommendations",
  "Approval Decision",
]

const CONTRACTS = [
  "Vendor_Agreement.pdf",
  "NDA.pdf",
  "MSA.pdf",
  "Supplier_Agreement.pdf",
]

// ─── Knowledge Card ─────────────────────────────────────────────────────────

function KnowledgeCard({ revealed }: { revealed: boolean }) {
  return (
    <motion.div
      className="rounded-2xl border border-border bg-card p-5"
      initial={{ opacity: 0, x: -30 }}
      animate={revealed ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, ease: easing }}
    >
      <div className="mb-4 font-mono text-[10px] font-medium tracking-wider text-muted-foreground">
        COMPANY KNOWLEDGE
      </div>

      <div className="space-y-2.5">
        {KNOWLEDGE_ITEMS.map((item, i) => (
          <motion.div
            key={item.label}
            className="flex items-center gap-2.5"
            initial={{ opacity: 0, x: -10 }}
            animate={revealed ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ delay: 0.1 * i, duration: 0.4, ease: easing }}
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
              <item.icon className="h-3.5 w-3.5 text-primary" />
            </div>
            <span className="text-xs font-medium text-white/80">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// ─── Lexon Card ─────────────────────────────────────────────────────────────

function LexonCard({
  revealed,
  flowPhase,
}: {
  revealed: boolean
  flowPhase: number
}) {
  const [activeLayer, setActiveLayer] = useState(-1)

  useEffect(() => {
    // Sequential layer activation by flowPhase
    if (flowPhase === 1) {
      setActiveLayer(0) // Knowledge Layer
    } else if (flowPhase === 3) {
      setActiveLayer(1) // Review Engine
    } else if (flowPhase === 4) {
      setActiveLayer(2) // Decision Engine
    } else {
      setActiveLayer(-1)
    }
  }, [flowPhase])

  return (
    <motion.div
      className="rounded-2xl border border-primary/30 bg-primary/5 p-5"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={revealed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, ease: easing }}
    >
      <div className="mb-4 text-center">
        <div className="font-mono text-sm font-medium tracking-wider text-primary">
          LEXON
        </div>
      </div>

      <div className="space-y-2">
        {LEXON_LAYERS.map((layer, i) => (
          <motion.div
            key={layer}
            className="rounded-lg border px-3 py-2 text-center text-xs font-medium transition-colors duration-300"
            animate={{
              borderColor:
                activeLayer === i
                  ? "rgba(99, 102, 241, 0.5)"
                  : "rgba(255, 255, 255, 0.1)",
              backgroundColor:
                activeLayer === i
                  ? "rgba(99, 102, 241, 0.15)"
                  : "rgba(255, 255, 255, 0.02)",
              color:
                activeLayer === i
                  ? "rgba(255, 255, 255, 0.9)"
                  : "rgba(255, 255, 255, 0.5)",
            }}
            transition={{ duration: 0.3 }}
          >
            {layer}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// ─── Outcomes Card ──────────────────────────────────────────────────────────

function OutcomesCard({
  revealed,
  flowPhase,
}: {
  revealed: boolean
  flowPhase: number
}) {
  const showItems = flowPhase >= 5

  return (
    <motion.div
      className="rounded-2xl border border-border bg-card p-5"
      initial={{ opacity: 0, x: 30 }}
      animate={revealed ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
      transition={{ duration: 0.6, ease: easing }}
    >
      <div className="mb-4 font-mono text-[10px] font-medium tracking-wider text-muted-foreground">
        OUTCOMES
      </div>

      <div className="space-y-2.5">
        {OUTCOME_ITEMS.map((item, i) => (
          <motion.div
            key={item}
            className="flex items-center gap-2.5"
            animate={{
              opacity: showItems ? 1 : 0.4,
              x: showItems ? 0 : 10,
            }}
            transition={{
              delay: showItems ? 0.15 * i : 0,
              duration: 0.35,
              ease: easing,
            }}
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20">
              <CheckCircle className="h-3 w-3 text-emerald-400" />
            </div>
            <span className="text-xs font-medium text-white/80">{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// ─── Contract Card ──────────────────────────────────────────────────────────

function ContractCard({ revealed }: { revealed: boolean }) {
  const [currentContract, setCurrentContract] = useState(0)

  useEffect(() => {
    if (!revealed) return

    const interval = setInterval(() => {
      setCurrentContract((prev) => (prev + 1) % CONTRACTS.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [revealed])

  return (
    <motion.div
      className="w-full max-w-[280px] rounded-2xl border border-border bg-card px-6 py-4"
      initial={{ opacity: 0, y: 30 }}
      animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: easing }}
    >
      <div className="mb-3 text-center text-[10px] font-medium text-muted-foreground">
        Every New Contract
      </div>

      <div className="flex items-center justify-center gap-2">
        <File className="h-4 w-4 text-primary" />
        <AnimatePresence mode="wait">
          <motion.span
            key={currentContract}
            className="text-sm font-medium text-white/80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {CONTRACTS[currentContract]}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

// ─── Phase Pill ─────────────────────────────────────────────────────────────

function PhasePill({ flowPhase }: { flowPhase: number }) {
  const getText = () => {
    if (flowPhase >= 2 && flowPhase < 3) return "✓ Knowledge Ready"
    if (flowPhase >= 1 && flowPhase < 2) return "One-Time Setup"
    return ""
  }

  const text = getText()
  const show = flowPhase >= 1 && flowPhase < 3

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute top-18 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, ease: easing }}
        >
          <div className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
            <span className="text-[10px] font-medium whitespace-nowrap text-primary">
              {text}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── IntelligenceLayer ──────────────────────────────────────────────────────

export function DifferentiatorSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [revealed, setRevealed] = useState(false)
  const [flowPhase, setFlowPhase] = useState(0)
  const [loopKey, setLoopKey] = useState(0)

  // Revealed: becomes true once, never resets
  useEffect(() => {
    if (isInView && !revealed) {
      setRevealed(true)
    }
  }, [isInView, revealed])

  // Flow: loops continuously after reveal
  useEffect(() => {
    if (!revealed) return

    const timers = [
      setTimeout(() => setFlowPhase(1), 300), // Knowledge line draws
      setTimeout(() => setFlowPhase(2), 1200), // Pill: Knowledge Ready
      setTimeout(() => setFlowPhase(3), 3000), // Contract line draws
      setTimeout(() => setFlowPhase(4), 4000), // Lexon layers highlight
      setTimeout(() => setFlowPhase(5), 5000), // Outcomes line draws
      setTimeout(() => {
        setFlowPhase(0)
        setLoopKey((k) => k + 1)
      }, LOOP_DURATION), // Reset and loop
    ]

    return () => timers.forEach(clearTimeout)
  }, [revealed, loopKey])

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
        color="rgba(52, 211, 153, 0.04)"
        size={400}
        x="95%"
        y="70%"
        blur={70}
        delay={3}
      />

      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          label="The Intelligence Layer"
          heading="How Lexon works inside your organization"
          subtitle="Knowledge flows in. Intelligence flows out."
          delay={0}
        />

        {/* Organization Block */}
        <BlurReveal delay={0.2} duration={0.6}>
          <div className="relative rounded-2xl border border-border bg-card p-8">
            {/* Organization Label */}
            <div className="mb-1 font-mono text-xs font-medium tracking-wider text-muted-foreground">
              YOUR ORGANIZATION
            </div>
            <p className="mb-8 max-w-2xl text-sm text-muted-foreground">
              Upload your legal knowledge once. Every future contract is
              reviewed against it.
            </p>

            {/* 3-Column Layout */}
            <div className="relative grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_100px_1fr_100px_1fr]">
              {/* Legal Knowledge Base */}
              <KnowledgeCard revealed={revealed} />

              {/* Line: Knowledge → Lexon */}
              <div className="relative hidden h-20 md:block">
                <svg
                  width="80"
                  height="80"
                  className="absolute top-0 left-0 overflow-visible"
                >
                  <line
                    x1="0"
                    y1="40"
                    x2="105"
                    y2="40"
                    stroke={
                      flowPhase >= 1
                        ? "rgba(99, 102, 241, 0.5)"
                        : "rgba(255, 255, 255, 0.08)"
                    }
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    className="animate-dashflow"
                  />
                </svg>
                <PhasePill flowPhase={flowPhase} />
              </div>

              {/* Lexon */}
              <LexonCard revealed={revealed} flowPhase={flowPhase} />

              {/* Line: Lexon → Outcomes */}
              <div className="relative hidden h-20 md:block">
                <svg
                  width="80"
                  height="80"
                  className="absolute top-0 left-0 overflow-visible"
                >
                  <line
                    x1="0"
                    y1="40"
                    x2="105"
                    y2="40"
                    stroke={
                      flowPhase >= 4
                        ? "rgba(99, 102, 241, 0.5)"
                        : "rgba(255, 255, 255, 0.08)"
                    }
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    className="animate-dashflow"
                  />
                </svg>
              </div>

              {/* Outcomes */}
              <OutcomesCard revealed={revealed} flowPhase={flowPhase} />
            </div>

            {/* Contract Input (bottom center) */}
            <div className="relative mt-8 flex justify-center">
              {/* Vertical Line: Contract → Lexon */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <svg width="2" height="32" className="overflow-visible">
                  <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="32"
                    stroke={
                      flowPhase >= 3
                        ? "rgba(52, 211, 153, 0.5)"
                        : "rgba(99, 102, 241, 0.15)"
                    }
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    className="animate-dashflow"
                  />
                </svg>
              </div>

              <ContractCard revealed={revealed} />
            </div>
          </div>
        </BlurReveal>
      </div>
    </section>
  )
}
