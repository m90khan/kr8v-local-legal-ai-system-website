"use client"
import { motion, useInView, AnimatePresence } from "motion/react"
import { useRef, useState, useEffect, useCallback } from "react"
import {
  Scale,
  BriefcaseBusiness,
  Shield,
  ClipboardList,
  Check,
  FileText,
} from "lucide-react"
import { easing } from "@/lib/animation"
import { getWhoItsFor } from "@/lib/content"

// ─── Constants ──────────────────────────────────────────────────────────────

const LOOP_DURATION = 9000
const LEXON_LAYERS = ["Review Engine", "Decision Engine", "Audit Trail"]

const teamIconMap = { Scale, BriefcaseBusiness, Shield, ClipboardList }

const CONTRACTS = [
  "Vendor_Agreement.pdf",
  "NDA.pdf",
  "MSA.pdf",
  "DPA.pdf",
  "Supplier_Agreement.pdf",
]

// ─── Lexon Card ─────────────────────────────────────────────────────────────

function LexonCard({
  revealed,
  flowPhase,
  cardRef,
}: {
  revealed: boolean
  flowPhase: number
  cardRef?: React.Ref<HTMLDivElement>
}) {
  const [activeLayer, setActiveLayer] = useState(-1)

  useEffect(() => {
    if (flowPhase === 2) {
      // Sequential: Review → Decision → Audit
      const t1 = setTimeout(() => setActiveLayer(0), 0)
      const t2 = setTimeout(() => setActiveLayer(1), 300)
      const t3 = setTimeout(() => setActiveLayer(2), 600)
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
    } else if (flowPhase >= 3) {
      setActiveLayer(2) // Stay on last layer
    } else {
      setActiveLayer(-1)
    }
  }, [flowPhase])

  return (
    <motion.div
      ref={cardRef}
      className="mx-auto w-full max-w-[240px] rounded-2xl border border-primary/30 bg-primary/5 p-5"
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

// ─── Contract Card ──────────────────────────────────────────────────────────

function ContractCard({ revealed }: { revealed: boolean }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!revealed) return
    const interval = setInterval(() => {
      setCurrent((p) => (p + 1) % CONTRACTS.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [revealed])

  return (
    <motion.div
      className="mx-auto w-full max-w-[280px] rounded-lg border border-white/10 bg-[#0d0d0d] px-4 py-3"
      initial={{ opacity: 0, y: 20 }}
      animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: easing }}
    >
      <div className="mb-2 text-center font-mono text-[10px] tracking-wider text-white/50">
        CONTRACT REVIEW
      </div>
      <div className="flex items-center justify-center gap-2">
        <FileText className="h-4 w-4 text-primary" />
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            className="text-sm font-medium text-white/80"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {CONTRACTS[current]}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

// ─── Team Card ──────────────────────────────────────────────────────────────

function TeamCard({
  team,
  index,
  isActive,
  revealed,
  cardRef,
}: {
  team: { title: string; icon: string; roles: string[] }
  index: number
  isActive: boolean
  revealed: boolean
  cardRef?: React.Ref<HTMLDivElement>
}) {
  const Icon = teamIconMap[team.icon as keyof typeof teamIconMap]

  return (
    <motion.div
      ref={cardRef}
      className="w-full max-w-[240px] rounded-2xl border border-border bg-card p-4 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={
        revealed
          ? {
              opacity: 1,
              y: 0,
              borderColor: isActive
                ? "rgba(99, 102, 241, 0.5)"
                : "rgba(255, 255, 255, 0.1)",
              boxShadow: isActive
                ? "0 0 20px rgba(99, 102, 241, 0.1)"
                : "0 0 0 rgba(99, 102, 241, 0)",
            }
          : { opacity: 0, y: 20 }
      }
      transition={{ duration: 0.4, ease: easing }}
    >
      <motion.div
        className="mb-3 flex items-center gap-2"
        animate={{ opacity: isActive ? 1 : 0.6 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
          {Icon && <Icon className="h-4 w-4 text-primary" />}
        </div>
        <span className="font-mono text-xs font-medium tracking-wider text-white/80">
          {team.title.toUpperCase()}
        </span>
      </motion.div>
      <motion.div
        className="space-y-1.5"
        animate={{ opacity: isActive ? 1 : 0.6 }}
        transition={{ duration: 0.3 }}
      >
        {team.roles.map((role) => (
          <div
            key={role}
            className="flex items-center gap-1.5 text-[11px] text-white/50"
          >
            <span className="h-1 w-1 rounded-full bg-white/20" />
            {role}
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

// ─── Approved Badge ─────────────────────────────────────────────────────────

function ApprovedBadge({ flowPhase }: { flowPhase: number }) {
  return (
    <AnimatePresence>
      {flowPhase >= 8 && (
        <motion.div
          className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Check className="h-4 w-4 text-emerald-400" />
          <span className="text-sm font-medium text-emerald-400">
            Approved
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── Branch Lines (ref-based) ───────────────────────────────────────────────

function BranchLines({
  lexonCardRef,
  teamRefs,
  containerRef,
  isActive,
}: {
  lexonCardRef: React.RefObject<HTMLDivElement | null>
  teamRefs: React.RefObject<(HTMLDivElement | null)[]>
  containerRef: React.RefObject<HTMLDivElement | null>
  isActive: boolean
}) {
  const [paths, setPaths] = useState<string[]>([])

  const measure = useCallback(() => {
    const lexon = lexonCardRef.current
    const teams = teamRefs.current
    const container = containerRef.current
    if (!lexon || !container) return

    const containerRect = container.getBoundingClientRect()
    const lexonRect = lexon.getBoundingClientRect()
    const lexonCx = lexonRect.left + lexonRect.width / 2 - containerRect.left
    const lexonCy = lexonRect.top + lexonRect.height / 2 - containerRect.top
    const lexonLeft = lexonRect.left - containerRect.left
    const lexonRight = lexonRect.right - containerRect.left
    const lexonBottom = lexonRect.bottom - containerRect.top

    const newPaths = teams.map((team, i) => {
      if (!team) return ""
      const teamRect = team.getBoundingClientRect()
      const teamCx = teamRect.left + teamRect.width / 2 - containerRect.left
      const teamCy = teamRect.top + teamRect.height / 2 - containerRect.top
      const teamLeft = teamRect.left - containerRect.left
      const teamRight = teamRect.right - containerRect.left
      const teamTop = teamRect.top - containerRect.top

      if (i === 0) {
        // Legal: Lexon left center → Legal right center (horizontal left then vertical)
        const r = 6
        const dx = lexonLeft - teamRight
        if (dx < r * 2) {
          return `M ${lexonLeft} ${lexonCy} L ${teamRight} ${teamCy}`
        }
        return `M ${lexonLeft} ${lexonCy} L ${lexonLeft - dx + r} ${lexonCy} A ${r} ${r} 0 0 0 ${lexonLeft - dx} ${lexonCy + r} L ${teamRight} ${teamCy + r}`
      } else if (i === 2) {
        // Compliance: Lexon right center → Compliance left center (horizontal right then vertical)
        const r = 6
        const dx = teamLeft - lexonRight
        if (dx < r * 2) {
          return `M ${lexonRight} ${lexonCy} L ${teamLeft} ${teamCy}`
        }
        return `M ${lexonRight} ${lexonCy} L ${lexonRight + dx - r} ${lexonCy} A ${r} ${r} 0 0 1 ${lexonRight + dx} ${lexonCy + r} L ${teamLeft} ${teamCy + r}`
      } else if (i === 1) {
        // Procurement: Lexon bottom-center → right center (vertical down then horizontal right)
        const r = 6
        const dy = teamCy - lexonBottom
        if (dy < r * 2) {
          return `M ${lexonCx} ${lexonBottom} L ${teamRight} ${teamCy}`
        }
        return `M ${lexonCx} ${lexonBottom} L ${lexonCx} ${lexonBottom + dy - r} A ${r} ${r} 0 0 1 ${lexonCx + r} ${lexonBottom + dy} L ${teamRight} ${teamCy}`
      } else if (i === 3) {
        // Operations: Lexon bottom-center → right center (vertical down then horizontal right)
        const r = 6
        const dy = teamCy - lexonBottom
        if (dy < r * 2) {
          return `M ${lexonCx} ${lexonBottom} L ${teamRight} ${teamCy}`
        }
        return `M ${lexonCx} ${lexonBottom} L ${lexonCx} ${lexonBottom + dy - r} A ${r} ${r} 0 0 1 ${lexonCx + r} ${lexonBottom + dy} L ${teamRight} ${teamCy}`
      }
      return ""
    })

    setPaths(newPaths)
  }, [lexonCardRef, teamRefs, containerRef])

  useEffect(() => {
    measure()
    const obs = new ResizeObserver(measure)
    if (containerRef.current) obs.observe(containerRef.current)
    return () => obs.disconnect()
  }, [measure, containerRef])

  useEffect(() => {
    const timer = setTimeout(measure, 100)
    return () => clearTimeout(timer)
  }, [isActive, measure])

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0"
      overflow="visible"
    >
      {paths.map((path, i) =>
        path ? (
          <path
            key={i}
            d={path}
            stroke={
              isActive
                ? "rgba(99, 102, 241, 0.4)"
                : "rgba(255, 255, 255, 0.08)"
            }
            strokeWidth="2"
            strokeDasharray="8 8"
            fill="none"
            className={isActive ? "animate-dashflow" : ""}
          />
        ) : null
      )}
    </svg>
  )
}

// ─── Desktop Layout ─────────────────────────────────────────────────────────

function DesktopLayout({
  teams,
  revealed,
  flowPhase,
}: {
  teams: { title: string; icon: string; roles: string[] }[]
  revealed: boolean
  flowPhase: number
}) {
  const showContractLine = flowPhase >= 1
  const showBranchLines = flowPhase >= 3
  const activeTeamIndex =
    flowPhase >= 4 && flowPhase <= 7 ? flowPhase - 4 : -1

  const containerRef = useRef<HTMLDivElement>(null)
  const lexonRef = useRef<HTMLDivElement>(null)
  const lexonCardRef = useRef<HTMLDivElement>(null)
  const teamRefs = useRef<(HTMLDivElement | null)[]>([])

  return (
    <div className="hidden md:block">
      <div ref={containerRef} className="relative isolate mx-auto max-w-5xl">
        {/* Contract Card */}
        <div className="flex justify-center">
          <ContractCard revealed={revealed} />
        </div>

        {/* Vertical Line: Contract → Lexon */}
        <div className="flex justify-center">
          <svg width="2" height="48" className="overflow-visible">
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="48"
              stroke={
                showContractLine
                  ? "rgba(99, 102, 241, 0.5)"
                  : "rgba(255, 255, 255, 0.08)"
              }
              strokeWidth="2"
              strokeDasharray="8 8"
              className="animate-dashflow"
            />
          </svg>
        </div>

        {/* Branch lines — z-0 */}
        <BranchLines
          lexonCardRef={lexonCardRef}
          teamRefs={teamRefs}
          containerRef={containerRef}
          isActive={showBranchLines}
        />

        {/* Content — z-10 */}
        <div className="relative z-10">
          {/* Row 1: Legal + Lexon + Compliance — aligned */}
          <div className="grid grid-cols-3 items-center gap-6">
            <div className="flex justify-end">
              <TeamCard
                team={teams[0]}
                index={0}
                isActive={activeTeamIndex === 0}
                revealed={revealed}
                cardRef={(el) => { teamRefs.current[0] = el }}
              />
            </div>
            <div ref={lexonRef}>
              <LexonCard revealed={revealed} flowPhase={flowPhase} cardRef={lexonCardRef} />
            </div>
            <div className="flex justify-start">
              <TeamCard
                team={teams[2]}
                index={2}
                isActive={activeTeamIndex === 2}
                revealed={revealed}
                cardRef={(el) => { teamRefs.current[2] = el }}
              />
            </div>
          </div>

          {/* Row 2: Procurement + Operations — aligned below */}
          <div className="mt-4 grid grid-cols-[1fr_1fr] gap-6">
            <div className="flex justify-center">
              <TeamCard
                team={teams[1]}
                index={1}
                isActive={activeTeamIndex === 1}
                revealed={revealed}
                cardRef={(el) => { teamRefs.current[1] = el }}
              />
            </div>
            <div className="flex justify-center">
              <TeamCard
                team={teams[3]}
                index={3}
                isActive={activeTeamIndex === 3}
                revealed={revealed}
                cardRef={(el) => { teamRefs.current[3] = el }}
              />
            </div>
          </div>
        </div>

        {/* Approved Badge */}
        <div className="relative z-10 flex justify-center">
          <ApprovedBadge flowPhase={flowPhase} />
        </div>
      </div>
    </div>
  )
}

// ─── Mobile Layout ──────────────────────────────────────────────────────────

function MobileLayout({
  teams,
  revealed,
  flowPhase,
}: {
  teams: { title: string; icon: string; roles: string[] }[]
  revealed: boolean
  flowPhase: number
}) {
  const activeTeamIndex =
    flowPhase >= 4 && flowPhase <= 7 ? flowPhase - 4 : -1

  return (
    <div className="block md:hidden">
      <div className="mx-auto max-w-sm space-y-4">
        {/* Contract Card */}
        <ContractCard revealed={revealed} />

        {/* Line */}
        <div className="flex justify-center">
          <svg width="2" height="32">
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="32"
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
        </div>

        {/* Lexon Card */}
        <LexonCard revealed={revealed} flowPhase={flowPhase} />

        {/* Team Cards — vertical stack */}
        {teams.map((team, i) => (
          <div key={team.title}>
            {/* Line */}
            <div className="flex justify-center">
              <svg width="2" height="32">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="32"
                  stroke={
                    flowPhase >= 3
                      ? "rgba(99, 102, 241, 0.4)"
                      : "rgba(255, 255, 255, 0.06)"
                  }
                  strokeWidth="1.5"
                  strokeDasharray="8 8"
                  className="animate-dashflow"
                />
              </svg>
            </div>
            <TeamCard
              team={team}
              index={i}
              isActive={activeTeamIndex === i}
              revealed={revealed}
            />
          </div>
        ))}

        {/* Approved Badge */}
        <ApprovedBadge flowPhase={flowPhase} />
      </div>
    </div>
  )
}

// ─── WhoItsFor ──────────────────────────────────────────────────────────────

export function WhoItsFor() {
  const content = getWhoItsFor()
  const teams = content?.teams || []

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
      setTimeout(() => setFlowPhase(1), 500),     // Contract → Lexon line
      setTimeout(() => setFlowPhase(2), 1500),    // Lexon highlights
      setTimeout(() => setFlowPhase(3), 3000),    // Branch lines draw
      setTimeout(() => setFlowPhase(4), 4000),    // Legal lights up
      setTimeout(() => setFlowPhase(5), 4500),    // Procurement lights up
      setTimeout(() => setFlowPhase(6), 5000),    // Compliance lights up
      setTimeout(() => setFlowPhase(7), 5500),    // Operations lights up
      setTimeout(() => setFlowPhase(8), 6500),    // Approved badge
      setTimeout(() => {
        setFlowPhase(0)
        setLoopKey((k) => k + 1)
      }, LOOP_DURATION),
    ]

    return () => timers.forEach(clearTimeout)
  }, [revealed, loopKey])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-background px-6 py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-primary">
              {content?.title || "One Platform. Every Team."}
            </span>
          </motion.div>

          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            {content?.subtitle}
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <DesktopLayout
          teams={teams}
          revealed={revealed}
          flowPhase={flowPhase}
        />

        {/* Mobile Layout */}
        <MobileLayout
          teams={teams}
          revealed={revealed}
          flowPhase={flowPhase}
        />
      </div>
    </section>
  )
}
