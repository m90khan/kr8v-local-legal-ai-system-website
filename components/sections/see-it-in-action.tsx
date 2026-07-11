"use client"

import {
  useEffect,
  useState,
  useRef,
  useCallback,
  Fragment,
  type ReactNode,
} from "react"
import { motion } from "motion/react"
import {
  StageCard,
  StatusBox,
  CheckIcon,
  AnimatedListItem,
  listContainerVariants,
  listItemVariants,
  rowContainerVariants,
} from "@/components/shared/pipeline-node"

// ─── Icons ───────────────────────────────────────────────────────────────────

const UploadIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
)

const BrainIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
)

const ClipboardIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <path d="m9 14 2 2 4-4" />
  </svg>
)

const AlertIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

const CheckCircleIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

const PersonIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const PdfIcon = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="text-red-400"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
)

// ─── Helpers ─────────────────────────────────────────────────────────────────

function CheckCircle() {
  return (
    <div className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500/20">
      <svg
        width="8"
        height="8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="text-emerald-400"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </div>
  )
}

function SeverityDot({ color }: { color: string }) {
  return <span className={`inline-block h-2 w-2 rounded-full ${color}`} />
}

// ─── Stage Data ──────────────────────────────────────────────────────────────

interface Stage {
  label: string
  subtitle: string
  icon: ReactNode
  currentIndex: number

  beforeContent: ReactNode
  afterContent: ReactNode
}

const STAGES: Stage[] = [
  {
    label: "Upload",
    subtitle: "Contract Upload",
    icon: UploadIcon,
    currentIndex: 0,
    beforeContent: (
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-white/50">Document Uploader()</span>
      </div>
    ),
    afterContent: (
      <motion.div
        variants={listContainerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-1.5"
      >
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="flex items-center gap-1.5"
        >
          {PdfIcon}
          <span className="truncate text-[11px] font-medium text-white/80">
            Vendor_Agreement.pdf
          </span>
        </motion.div>
        <motion.p
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="text-[10px] text-white/40"
        >
          14 Pages
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            },
          }}
          className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5"
        >
          <CheckIcon className="text-emerald-400" />
          <span className="text-[10px] text-emerald-400">Uploaded</span>
        </motion.div>
      </motion.div>
    ),
  },
  {
    label: "Understand",
    subtitle: "AI Processing",
    icon: BrainIcon,
    currentIndex: 1,

    beforeContent: (
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-white/50">Structure Parser()</span>
      </div>
    ),
    afterContent: (
      <motion.div
        variants={listContainerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-2"
      >
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="flex items-center gap-1.5"
        >
          <CheckIcon className="text-emerald-400" />
          <span className="text-[10px] text-white/60">Structure parsed</span>
        </motion.div>
        <div className="grid grid-cols-1 gap-x-2 gap-y-1">
          {[
            { value: "147", label: "Clauses" },
            { value: "12", label: "Obligations" },
            { value: "8", label: "Entities" },
            { value: "3", label: "Laws" },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                },
              }}
              className="grid grid-cols-[.3fr_.1.5fr] items-center justify-start gap-5 rounded bg-white/[0.04] px-1.5 py-1 text-center"
            >
              <p className="text-[12px] font-medium text-white/90">
                {item.value}
              </p>
              <p className="text-[10px] text-white/40">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    ),
  },
  {
    label: "Compare",
    subtitle: "Policy Check",
    icon: ClipboardIcon,
    currentIndex: 2,

    beforeContent: (
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-white/50">Policy Comparator()</span>
      </div>
    ),
    afterContent: (
      <motion.div
        variants={listContainerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-1.5"
      >
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="mb-1 flex items-center gap-1.5"
        >
          <CheckIcon className="text-emerald-400" />
          <span className="text-[10px] text-white/60">Policies checked</span>
        </motion.div>
        {[
          "Company Policies",
          "Reference Agreements",
          "Laws",
          "Vendor History",
          "Templates",
        ].map((item) => (
          <AnimatedListItem key={item} icon={<CheckCircle />} label={item} />
        ))}
      </motion.div>
    ),
  },
  {
    label: "Approve",
    subtitle: "Human Review",
    icon: PersonIcon,
    currentIndex: 5,

    beforeContent: (
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-white/50">Review Router()</span>
      </div>
    ),
    afterContent: (
      <motion.div
        variants={listContainerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-1.5"
      >
        {[
          { label: "Analysis Complete", detail: "8 issues · High confidence" },
          { label: "Assigned to Legal", detail: "Sarah Chen · 15 min" },
          { label: "Legal Review", detail: "2 clauses flagged" },
          { label: "Approved", detail: "Ready for signature" },
          { label: "Audit Updated", detail: "History recorded" },
        ].map((step) => (
          <motion.div
            key={step.label}
            variants={listItemVariants}
            className="flex items-start gap-1.5"
          >
            <CheckCircle />
            <div>
              <p className="text-[10px] font-medium text-white/80">
                {step.label}
              </p>
              <p className="text-[9px] text-white/40">{step.detail}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
  },
  {
    label: "Decision",
    subtitle: "AI Decision",
    icon: CheckCircleIcon,
    currentIndex: 4,

    beforeContent: (
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-white/50">Decision Engine()</span>
      </div>
    ),
    afterContent: (
      <motion.div
        variants={listContainerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-1.5"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              },
            },
          }}
          className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5"
        >
          <span className="text-[10px] text-amber-400">Review Required</span>
        </motion.div>
        <motion.p
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="text-[11px] text-white/60"
        >
          8 Issues Found
        </motion.p>
        <motion.p
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="text-[10px] text-white/40"
        >
          Confidence: High
        </motion.p>
      </motion.div>
    ),
  },
  {
    label: "Find Risks",
    subtitle: "Risk Analysis",
    icon: AlertIcon,
    currentIndex: 3,

    beforeContent: (
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-white/50">Risk Analyzer()</span>
      </div>
    ),
    afterContent: (
      <motion.div
        variants={listContainerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-2"
      >
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="mb-1 flex items-center gap-1.5"
        >
          <CheckIcon className="text-emerald-400" />
          <span className="text-[10px] text-white/60">Analysis complete</span>
        </motion.div>
        <div className="space-y-1">
          {[
            {
              count: "2",
              label: "High",
              dot: <SeverityDot color="bg-red-400" />,
            },
            {
              count: "4",
              label: "Medium",
              dot: <SeverityDot color="bg-amber-400" />,
            },
            {
              count: "2",
              label: "Low",
              dot: <SeverityDot color="bg-emerald-400" />,
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                },
              }}
              className="flex items-center gap-1.5"
            >
              {item.dot}
              <span className="text-[11px] text-white/70">
                {item.count} {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    ),
  },
]

const ROW1 = STAGES.slice(0, 3)
const ROW2 = STAGES.slice(3, 6)

// ─── Layout Constants ────────────────────────────────────────────────────────

const CARD_GAP = 80
const ROW_GAP = 120
const CARD_W = 220

// ─── Horizontal Line (inline between cards) ──────────────────────────────────

function HorizontalLine({ isActive }: { isActive: boolean }) {
  return (
    <svg
      className="h-2 flex-shrink-0"
      style={{ width: CARD_GAP }}
      overflow="visible"
    >
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        stroke={
          isActive ? "rgba(99, 102, 241, 0.6)" : "rgba(255, 255, 255, 0.12)"
        }
        strokeWidth="2"
        strokeDasharray="8 8"
        className="animate-dashflow"
      />
    </svg>
  )
}

// ─── Row Connector (ref-based positioning) ───────────────────────────────────

function RowConnector({
  activeIdx,
  pipelineRef,
}: {
  activeIdx: number
  pipelineRef: React.RefObject<HTMLDivElement | null>
}) {
  const isActive = activeIdx >= 2
  const [path, setPath] = useState("")

  const measure = useCallback(() => {
    const container = pipelineRef.current
    if (!container) return

    const containerRect = container.getBoundingClientRect()
    const rights = container.querySelectorAll<HTMLElement>(
      '[data-port="right"]'
    )
    const lefts = container.querySelectorAll<HTMLElement>('[data-port="left"]')

    // Compare card (index 2) right port, Find Risks card (index 3) left port
    const rEl = rights[2]
    const lEl = lefts[3]
    if (!rEl || !lEl) return

    const rRect = rEl.getBoundingClientRect()
    const lRect = lEl.getBoundingClientRect()

    const x1 = rRect.left + rRect.width / 2 - containerRect.left
    const y1 = rRect.top + rRect.height / 2 - containerRect.top
    const x2 = lRect.left + lRect.width / 2 - containerRect.left
    const y2 = lRect.top + lRect.height / 2 - containerRect.top

    const cr = 10
    const ext = 30

    const d = [
      `M ${x1} ${y1}`,
      `L ${x1 + ext - cr} ${y1}`,
      `Q ${x1 + ext} ${y1} ${x1 + ext} ${y1 + cr}`,
      `L ${x1 + ext} ${y2 - cr}`,
      `Q ${x1 + ext} ${y2} ${x1 + ext - cr} ${y2}`,
      `L ${x2 + cr} ${y2}`,
      `Q ${x2} ${y2} ${x2} ${y2 - cr}`,
    ].join(" ")

    setPath(d)
  }, [pipelineRef])

  useEffect(() => {
    measure()
    const container = pipelineRef.current
    if (!container) return

    const obs = new ResizeObserver(measure)
    obs.observe(container)
    document.fonts.ready.then(measure)

    return () => obs.disconnect()
  }, [measure, pipelineRef])

  useEffect(() => {
    const timer = setTimeout(measure, 100)
    return () => clearTimeout(timer)
  }, [activeIdx, measure])

  if (!path) return null

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      overflow="visible"
    >
      <path
        d={path}
        stroke={
          isActive ? "rgba(99, 102, 241, 0.5)" : "rgba(255, 255, 255, 0.1)"
        }
        strokeWidth="2"
        strokeDasharray="8 8"
        fill="none"
        className="animate-dashflow"
      />
    </svg>
  )
}

// ─── SeeItInAction ───────────────────────────────────────────────────────────

export function SeeItInAction() {
  const [activeIdx, setActiveIdx] = useState(-1)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const pipelineRef = useRef<HTMLDivElement>(null)

  // Viewport detection
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Start loop when in view
  useEffect(() => {
    if (!isInView) {
      setActiveIdx(-1)
      return
    }
    const timer = setTimeout(() => setActiveIdx(0), 400)
    return () => clearTimeout(timer)
  }, [isInView])

  // Stage advancement + seamless loop
  useEffect(() => {
    if (activeIdx < 0 || activeIdx >= STAGES.length) return

    if (activeIdx === STAGES.length - 1) {
      // After last stage, pause then restart from 0 (loop)
      const reset = setTimeout(() => setActiveIdx(0), 3000)
      return () => clearTimeout(reset)
    }

    const t = setTimeout(() => setActiveIdx((p) => p + 1), 2800)
    return () => clearTimeout(t)
  }, [activeIdx])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#030305] py-28"
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Section header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5">
            <motion.span
              className="inline-block h-1.5 w-1.5 rounded-full bg-primary"
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-mono text-[11px] tracking-wider text-white/60 uppercase">
              Live Pipeline
            </span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            See It In Action
          </h2>
          <p className="mt-3 text-sm text-white/40">
            From upload to audit-ready decision — fully autonomous.
          </p>
        </motion.div>

        {/* Pipeline */}
        <div ref={pipelineRef} className="relative">
          {/* Row 1 — Cards layer */}
          <motion.div
            variants={rowContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="flex items-center justify-center">
              {ROW1.map((stage, i) => (
                <Fragment key={i}>
                  <StageCard
                    icon={stage.icon}
                    label={stage.label}
                    subtitle={stage.subtitle}
                    isActive={activeIdx === stage.currentIndex}
                    isCompleted={activeIdx > stage.currentIndex}
                  />
                  {i < ROW1.length - 1 && (
                    <HorizontalLine isActive={activeIdx > stage.currentIndex} />
                  )}
                </Fragment>
              ))}
            </div>
          </motion.div>

          {/* Row 1 — Status layer (vertical lines + status boxes) */}
          <motion.div
            variants={rowContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="flex items-center justify-center">
              {ROW1.map((stage, i) => (
                <Fragment key={i}>
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-px flex-shrink-0"
                      style={{ height: ROW_GAP / 2 }}
                      preserveAspectRatio="none"
                    >
                      <line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="100%"
                        stroke={
                          activeIdx >= stage.currentIndex
                            ? "rgba(99, 102, 241, 0.35)"
                            : "rgba(255, 255, 255, 0.06)"
                        }
                        strokeWidth="2"
                        strokeDasharray="8 8"
                        className="animate-dashflow"
                      />
                    </svg>
                    <StatusBox
                      beforeContent={stage.beforeContent}
                      afterContent={stage.afterContent}
                      isActive={activeIdx === stage.currentIndex}
                      isCompleted={activeIdx > stage.currentIndex}
                    />
                  </div>
                  {i < ROW1.length - 1 && <div style={{ width: CARD_GAP }} />}
                </Fragment>
              ))}
            </div>
          </motion.div>

          {/* Spacer between rows */}
          <div style={{ height: 50 }} />

          {/* Row connector */}
          <RowConnector activeIdx={activeIdx} pipelineRef={pipelineRef} />

          {/* Row 2 — Cards layer */}
          <motion.div
            variants={rowContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="flex items-center justify-center">
              {ROW2.map((stage, i) => (
                <Fragment key={i}>
                  <StageCard
                    icon={stage.icon}
                    label={stage.label}
                    subtitle={stage.subtitle}
                    isActive={activeIdx === stage.currentIndex}
                    isCompleted={activeIdx > stage.currentIndex}
                  />
                  {i < ROW2.length - 1 && (
                    <HorizontalLine isActive={activeIdx > stage.currentIndex} />
                  )}
                </Fragment>
              ))}
            </div>
          </motion.div>

          {/* Row 2 — Status layer (vertical lines + status boxes) */}
          <motion.div
            variants={rowContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="flex items-center justify-center">
              {ROW2.map((stage, i) => (
                <Fragment key={i}>
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-px flex-shrink-0"
                      style={{ height: ROW_GAP / 2 }}
                      preserveAspectRatio="none"
                    >
                      <line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="100%"
                        stroke={
                          activeIdx >= stage.currentIndex
                            ? "rgba(99, 102, 241, 0.35)"
                            : "rgba(255, 255, 255, 0.06)"
                        }
                        strokeWidth="2"
                        strokeDasharray="8 8"
                        className="animate-dashflow"
                      />
                    </svg>
                    <StatusBox
                      beforeContent={stage.beforeContent}
                      afterContent={stage.afterContent}
                      isActive={activeIdx === stage.currentIndex}
                      isCompleted={activeIdx > stage.currentIndex}
                    />
                  </div>
                  {i < ROW2.length - 1 && <div style={{ width: CARD_GAP }} />}
                </Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
