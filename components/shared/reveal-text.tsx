"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"

type ElementType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div"

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
  as?: ElementType
  staggerDelay?: number
}

export function RevealText({
  text,
  className = "",
  delay = 0,
  as: Component = "p",
  staggerDelay = 0.03,
}: RevealTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const words = text.split(" ")

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Component ref={ref as any} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: delay + wordIndex * staggerDelay,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </Component>
  )
}

interface RevealLinesProps {
  lines: string[]
  className?: string
  delay?: number
  as?: ElementType
}

export function RevealLines({
  lines,
  className = "",
  delay = 0,
  as: Component = "div",
}: RevealLinesProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Component ref={ref as any} className={className}>
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: delay + index * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </Component>
  )
}
