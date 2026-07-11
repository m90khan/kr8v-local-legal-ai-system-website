"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { easing } from "@/lib/animation"

interface DashflowLineProps {
  path: string
  color?: string
  dashSize?: number
  gapSize?: number
  speed?: number
  delay?: number
  strokeWidth?: number
  className?: string
}

export function DashflowLine({
  path,
  color = "rgba(99, 102, 241, 0.6)",
  dashSize = 8,
  gapSize = 4,
  speed = 1.5,
  delay = 0,
  strokeWidth = 2,
  className,
}: DashflowLineProps) {
  const ref = useRef<SVGPathElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.path
      ref={ref}
      d={path}
      stroke={color}
      strokeWidth={strokeWidth}
      fill="none"
      strokeLinecap="round"
      strokeDasharray={`${dashSize} ${gapSize}`}
      className={className}
      initial={{ strokeDashoffset: 0 }}
      animate={isInView ? { strokeDashoffset: [0, -(dashSize + gapSize) * 2] } : {}}
      transition={{
        delay,
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  )
}

interface DashflowLineDrawProps {
  path: string
  length: number
  color?: string
  dashSize?: number
  gapSize?: number
  delay?: number
  duration?: number
  strokeWidth?: number
  className?: string
}

export function DashflowLineDraw({
  path,
  length,
  color = "rgba(99, 102, 241, 0.6)",
  dashSize = 8,
  gapSize = 4,
  delay = 0,
  duration = 1.5,
  strokeWidth = 2,
  className,
}: DashflowLineDrawProps) {
  const ref = useRef<SVGPathElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.path
      ref={ref}
      d={path}
      stroke={color}
      strokeWidth={strokeWidth}
      fill="none"
      strokeLinecap="round"
      strokeDasharray={`${dashSize} ${gapSize}`}
      initial={{ strokeDashoffset: length }}
      animate={isInView ? { strokeDashoffset: 0 } : {}}
      transition={{
        delay,
        duration,
        ease: easing,
      }}
    />
  )
}
