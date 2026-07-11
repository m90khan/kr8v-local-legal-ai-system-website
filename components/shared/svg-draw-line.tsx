"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { easing } from "@/lib/animation"

interface SvgDrawLineProps {
  path: string
  length: number
  color?: string
  strokeWidth?: number
  delay?: number
  duration?: number
  horizontal?: boolean
  className?: string
}

export function SvgDrawLine({
  path,
  length,
  color = "currentColor",
  strokeWidth = 2,
  delay = 0,
  duration = 1,
  className,
}: SvgDrawLineProps) {
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
      strokeLinejoin="round"
      initial={{ strokeDasharray: length, strokeDashoffset: length }}
      animate={isInView ? { strokeDashoffset: 0 } : { strokeDashoffset: length }}
      transition={{ duration, delay, ease: easing }}
      className={className}
    />
  )
}

interface AnimatedArrowProps {
  direction?: "down" | "right" | "left" | "up"
  length?: number
  color?: string
  delay?: number
  className?: string
}

export function AnimatedArrow({
  direction = "down",
  length = 40,
  color = "currentColor",
  delay = 0,
  className,
}: AnimatedArrowProps) {
  const pathMap = {
    down: `M 12 0 L 12 ${length - 8} M 4 ${length - 16} L 12 ${length - 8} L 20 ${length - 16}`,
    right: `M 0 12 L ${length - 8} 12 M ${length - 16} 4 L ${length - 8} 12 L ${length - 16} 20`,
    left: `M ${length} 12 L 8 12 M 16 4 L 8 12 L 16 20`,
    up: `M 12 ${length} L 12 8 M 4 16 L 12 8 L 20 16`,
  }

  return (
    <svg
      width={direction === "down" || direction === "up" ? 24 : length}
      height={direction === "down" || direction === "up" ? length : 24}
      viewBox={`0 0 ${direction === "down" || direction === "up" ? 24 : length} ${direction === "down" || direction === "up" ? length : 24}`}
      className={className}
    >
      <SvgDrawLine
        path={pathMap[direction]}
        length={length * 2}
        color={color}
        delay={delay}
        duration={0.6}
      />
    </svg>
  )
}
