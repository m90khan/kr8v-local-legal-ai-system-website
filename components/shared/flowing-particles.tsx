"use client"

import { motion, useInView } from "motion/react"
import { useRef, useId } from "react"

interface FlowingParticlesProps {
  path: string
  particleCount?: number
  speed?: number
  color?: string
  glowColor?: string
  particleSize?: number
  delay?: number
  className?: string
}

export function FlowingParticles({
  path,
  particleCount = 3,
  speed = 2,
  color = "rgba(99, 102, 241, 0.8)",
  glowColor = "rgba(99, 102, 241, 0.4)",
  particleSize = 3,
  delay = 0,
  className,
}: FlowingParticlesProps) {
  const ref = useRef<SVGSVGElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const id = useId()
  const pathId = `particle-path-${id}`

  return (
    <svg
      ref={ref}
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <path id={pathId} d={path} />
        <filter id={`${pathId}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ghost path */}
      <use
        href={`#${pathId}`}
        stroke={glowColor}
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />

      {/* Particles */}
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.circle
          key={i}
          r={particleSize}
          fill={color}
          filter={`url(#${pathId}-glow)`}
          initial={{ offsetDistance: "0%" }}
          animate={
            isInView
              ? { offsetDistance: "100%" }
              : { offsetDistance: "0%" }
          }
          transition={{
            delay: delay + (i * speed) / particleCount,
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            offsetPath: `path("${path}")`,
          }}
        />
      ))}
    </svg>
  )
}

interface FlowingDotsProps {
  paths: string[]
  particleCount?: number
  speed?: number
  colors?: string[]
  delay?: number
  className?: string
}

export function FlowingDots({
  paths,
  particleCount = 2,
  speed = 3,
  colors = ["rgba(99, 102, 241, 0.8)", "rgba(139, 92, 246, 0.6)", "rgba(52, 211, 153, 0.5)"],
  delay = 0,
  className,
}: FlowingDotsProps) {
  const ref = useRef<SVGSVGElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <svg
      ref={ref}
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        {paths.map((path, i) => (
          <path key={i} id={`dot-path-${i}`} d={path} />
        ))}
        <filter id="dot-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {paths.map((path, pathIndex) =>
        Array.from({ length: particleCount }).map((_, particleIndex) => {
          const color = colors[(pathIndex + particleIndex) % colors.length]
          return (
            <motion.circle
              key={`${pathIndex}-${particleIndex}`}
              r="3"
              fill={color}
              filter="url(#dot-glow)"
              initial={{ offsetDistance: "0%" }}
              animate={
                isInView
                  ? { offsetDistance: "100%" }
                  : { offsetDistance: "0%" }
              }
              transition={{
                delay: delay + (particleIndex * speed) / particleCount,
                duration: speed,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                offsetPath: `path("${path}")`,
              }}
            />
          )
        })
      )}
    </svg>
  )
}
