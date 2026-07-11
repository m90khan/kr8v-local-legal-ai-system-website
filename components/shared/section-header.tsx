"use client"

import { BlurReveal } from "@/components/shared/blur-reveal"
import { ReactNode } from "react"

interface SectionHeaderProps {
  label: string
  heading: string
  subtitle: string
  labelVariant?: "primary" | "green"
  labelIcon?: ReactNode
  delay?: number
}

export function SectionHeader({
  label,
  heading,
  subtitle,
  labelVariant = "primary",
  labelIcon,
  delay = 0,
}: SectionHeaderProps) {
  const isGreen = labelVariant === "green"

  return (
    <BlurReveal delay={delay} duration={0.6}>
      <div className="mb-16 text-center">
        <div
          className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 ${
            isGreen
              ? "border-green-500/30 bg-green-500/10"
              : "border-primary/20 bg-primary/10"
          }`}
        >
          {labelIcon}
          <span
            className={`text-sm font-medium ${
              isGreen ? "text-green-600 dark:text-green-400" : "text-primary"
            }`}
          >
            {label}
          </span>
        </div>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">{heading}</h2>
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      </div>
    </BlurReveal>
  )
}
