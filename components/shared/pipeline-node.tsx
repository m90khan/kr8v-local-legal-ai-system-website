"use client"

import { motion, AnimatePresence, type HTMLMotionProps } from "motion/react"
import { type ReactNode } from "react"

// ─── Spinner Icon ────────────────────────────────────────────────────────────

export function SpinnerIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className={`text-white/40 ${className}`}
    >
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="50"
        strokeDashoffset="15"
        strokeLinecap="round"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "center" }}
      />
    </svg>
  )
}

// ─── Check Icon ──────────────────────────────────────────────────────────────

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <motion.path
        d="M5 13l4 4L19 7"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </svg>
  )
}

// ─── Variants ────────────────────────────────────────────────────────────────

export const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

export const statusVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

export const listContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

export const rowContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

// ─── Stage Card ──────────────────────────────────────────────────────────────

interface StageCardProps extends HTMLMotionProps<"div"> {
  icon: ReactNode
  label: string
  subtitle: string
  isActive?: boolean
  isCompleted?: boolean
}

export function StageCard({
  icon,
  label,
  subtitle,
  isActive = false,
  isCompleted = false,
  ...props
}: StageCardProps) {
  return (
    <motion.div
      className="relative flex flex-col items-center text-center"
      variants={cardVariants}
      {...props}
    >
      <div
        className={`relative w-[220px] rounded-lg border bg-[#0d0d0d] px-3 py-3.5 transition-colors duration-500 ${
          isActive
            ? "border-primary/60 shadow-[0_0_20px_rgba(99,102,241,0.15)]"
            : isCompleted
              ? "border-primary/30"
              : "border-white/10"
        } `}
      >
        {/* Left port — rectangle */}
        <div
          data-port="left"
          className={`absolute top-1/2 left-0 h-1 w-2 -translate-x-1/2 -translate-y-1/2 rounded-sm transition-colors duration-500 ${isActive || isCompleted ? "bg-primary/80" : "bg-white/40"} `}
        />

        {/* Right port — circle */}
        <div
          data-port="right"
          className={`absolute top-1/2 right-0 h-2 w-2 translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-500 ${isActive || isCompleted ? "bg-primary/80" : "bg-white/40"} `}
        />

        {/* Bottom port — circle */}
        <div
          className={`absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full transition-colors duration-500 ${isActive || isCompleted ? "bg-primary/80" : "bg-white/40"} `}
        />

        <div className="mx-auto flex items-center justify-center gap-4">
          {/* Icon */}
          <div
            className={`-ml-2 flex justify-center transition-all duration-500 ${isActive ? "scale-110 text-primary" : isCompleted ? "text-primary/80" : "text-white/50"} `}
          >
            {icon}
          </div>
          <div className="flex flex-col items-start">
            {/* Label — monospace */}
            <p className="font-mono text-[11px] leading-tight text-white/90">
              {label}
            </p>

            {/* Subtitle */}
            <p className="mt-0.5 text-[9px] leading-tight text-white/50">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Status Box ──────────────────────────────────────────────────────────────

interface StatusBoxProps {
  beforeContent: ReactNode
  afterContent: ReactNode
  isActive?: boolean
  isCompleted?: boolean
  className?: string
}

export function StatusBox({
  beforeContent,
  afterContent,
  isActive = false,
  isCompleted = false,
  className = "",
}: StatusBoxProps) {
  const showAfter = isActive || isCompleted

  return (
    <motion.div
      variants={statusVariants}
      className={`w-[220px] rounded-lg border px-3 py-3 text-left transition-all duration-500 ${
        isActive
          ? "border-primary/40 bg-primary/[0.03]"
          : isCompleted
            ? "border-white/[0.06] bg-white/[0.01]"
            : "border-white/[0.04] bg-transparent"
      } ${className} `}
    >
      {/* Fixed-height container — content swaps inside, height never changes */}
      <div className="h-[150px] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          {!showAfter ? (
            <motion.div
              key="before"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {beforeContent}
            </motion.div>
          ) : (
            <motion.div
              key="after"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="h-full"
            >
              {afterContent}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

// ─── Animated List Item ──────────────────────────────────────────────────────

interface AnimatedListItemProps {
  icon: ReactNode
  label: string
}

export function AnimatedListItem({ icon, label }: AnimatedListItemProps) {
  return (
    <motion.div
      className="flex items-center gap-1.5"
      variants={listItemVariants}
    >
      {icon}
      <span className="text-[11px] text-white/80">{label}</span>
    </motion.div>
  )
}
