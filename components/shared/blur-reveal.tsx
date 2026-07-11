"use client"

import { motion, useInView } from "motion/react"
import { useRef, ReactNode } from "react"
import { easing } from "@/lib/animation"

interface BlurRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  blur?: number
  yOffset?: number
  className?: string
}

export function BlurReveal({
  children,
  delay = 0,
  duration = 0.6,
  blur = 6,
  yOffset = 20,
  className,
}: BlurRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        filter: `blur(${blur}px)`,
        y: yOffset,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }
          : {
              opacity: 0,
              filter: `blur(${blur}px)`,
              y: yOffset,
            }
      }
      transition={{
        delay,
        duration,
        ease: easing,
      }}
    >
      {children}
    </motion.div>
  )
}
