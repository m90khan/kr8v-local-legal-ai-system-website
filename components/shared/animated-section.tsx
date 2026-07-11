"use client"

import { ReactNode, useRef } from "react"
import { useInView } from "motion/react"
import { AmbientOrb } from "@/components/shared/ambient-orb"

interface OrbConfig {
  color: string
  size: number
  x: string
  y: string
  blur: number
  delay: number
}

interface AnimatedSectionProps {
  children: ReactNode
  bg?: "background" | "surface"
  maxWidth?: "4xl" | "5xl" | "6xl" | "7xl"
  orbs?: OrbConfig[]
  className?: string
}

const defaultOrbs: OrbConfig[] = [
  { color: "rgba(99, 102, 241, 0.05)", size: 500, x: "10%", y: "40%", blur: 80, delay: 1 },
  { color: "rgba(139, 92, 246, 0.04)", size: 400, x: "90%", y: "60%", blur: 60, delay: 4 },
]

export function AnimatedSection({
  children,
  bg = "background",
  maxWidth = "6xl",
  orbs = defaultOrbs,
  className = "",
}: AnimatedSectionProps) {
  return (
    <section
      className={`relative overflow-hidden ${bg === "surface" ? "bg-surface" : "bg-background"} px-6 py-32 ${className}`}
    >
      {orbs.map((orb, i) => (
        <AmbientOrb key={i} {...orb} />
      ))}
      <div className={`container mx-auto max-w-${maxWidth}`}>
        {children}
      </div>
    </section>
  )
}
