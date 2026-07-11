"use client"

import { motion } from "motion/react"

interface AmbientOrbProps {
  color?: string
  size?: number
  x?: string
  y?: string
  blur?: number
  delay?: number
  className?: string
}

export function AmbientOrb({
  color = "rgba(99, 102, 241, 0.15)",
  size = 400,
  x = "50%",
  y = "50%",
  blur = 80,
  delay = 0,
  className,
}: AmbientOrbProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0, 0.6, 0],
        scale: [0.8, 1.1, 0.8],
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
      }}
      transition={{
        delay,
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          filter: `blur(${blur}px)`,
        }}
      />
    </motion.div>
  )
}

interface AmbientOrbsProps {
  count?: number
  colors?: string[]
  className?: string
}

export function AmbientOrbs({
  count = 3,
  colors = [
    "rgba(99, 102, 241, 0.12)",
    "rgba(139, 92, 246, 0.1)",
    "rgba(52, 211, 153, 0.08)",
  ],
  className,
}: AmbientOrbsProps) {
  const orbs = Array.from({ length: count }).map((_, i) => ({
    color: colors[i % colors.length],
    x: `${15 + (i * 70) / count}%`,
    y: `${30 + (i % 2) * 40}%`,
    size: 300 + (i % 2) * 200,
    delay: i * 2,
  }))

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {orbs.map((orb, i) => (
        <AmbientOrb key={i} {...orb} />
      ))}
    </div>
  )
}
