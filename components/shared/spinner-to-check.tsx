"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Check } from "lucide-react"
import { easing } from "@/lib/animation"

interface SpinnerToCheckProps {
  label: string
  detail?: string
  delay?: number
  duration?: number
  className?: string
}

export function SpinnerToCheck({
  label,
  detail,
  delay = 0,
  duration = 0.8,
  className,
}: SpinnerToCheckProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className={`flex items-center gap-4 ${className}`}>
      <motion.div
        className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay, duration: 0.4, ease: easing }}
      >
        {/* Spinner */}
        <motion.svg
          className="absolute inset-0"
          viewBox="0 0 32 32"
          initial={{ opacity: 1 }}
          animate={isInView ? { opacity: 0 } : { opacity: 1 }}
          transition={{ delay: delay + duration * 0.6, duration: 0.2 }}
        >
          <motion.circle
            cx="16"
            cy="16"
            r="12"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            className="text-primary"
            strokeDasharray="75"
            strokeDashoffset="25"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          />
        </motion.svg>

        {/* Checkmark */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center rounded-full bg-primary"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: delay + duration * 0.6, duration: 0.4, ease: easing }}
        >
          <Check className="h-4 w-4 text-white" strokeWidth={3} />
        </motion.div>
      </motion.div>

      <div className="flex flex-col">
        <motion.span
          className="text-sm font-medium"
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: delay + 0.2, duration: 0.4, ease: easing }}
        >
          {label}
        </motion.span>
        {detail && (
          <motion.span
            className="text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: delay + 0.4, duration: 0.4 }}
          >
            {detail}
          </motion.span>
        )}
      </div>
    </div>
  )
}
