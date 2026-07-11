"use client"

import { motion } from "motion/react"
import { easing } from "@/lib/animation"

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info"

interface StatusBadgeProps {
  label: string
  variant?: BadgeVariant
  delay?: number
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "border-border bg-muted/50 text-muted-foreground",
  success: "border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400",
  warning: "border-yellow-500/30 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  danger: "border-red-500/30 bg-red-500/10 text-red-600",
  info: "border-primary/30 bg-primary/10 text-primary",
}

export function StatusBadge({
  label,
  variant = "default",
  delay = 0,
  className,
}: StatusBadgeProps) {
  return (
    <motion.span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${variantStyles[variant]} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: easing }}
    >
      {label}
    </motion.span>
  )
}

interface NumberBadgeProps {
  value: number | string
  label: string
  variant?: BadgeVariant
  delay?: number
  className?: string
}

export function NumberBadge({
  value,
  label,
  variant = "info",
  delay = 0,
  className,
}: NumberBadgeProps) {
  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: easing }}
    >
      <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-sm font-bold ${variantStyles[variant]}`}>
        {value}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </motion.div>
  )
}
