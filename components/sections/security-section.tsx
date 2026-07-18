"use client"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import content from "@/content.json"
import {
  LockKeyhole,
  ShieldCheck,
  ScrollText,
  ClipboardList,
  Settings,
} from "lucide-react"

const featureIconMap = {
  LockKeyhole,
  ShieldCheck,
  ScrollText,
  ClipboardList,
  Settings,
}

export function SecuritySection() {
  const securityData = content.security_section
  const security = securityData?.security

  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-card px-6 py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-primary">
              {security?.title || "Enterprise Operations"}
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 text-3xl font-bold tracking-tight md:text-3xl lg:text-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block">{security.subtitle.split(", ")[0]}.</span>
            <span className="block bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              {security.subtitle.split(", ")[1]}
            </span>
          </motion.h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            {security?.tagline}
          </p>
        </motion.div>

        {/* Bento Grid - 2 large top, 3 small bottom */}
        <div className="space-y-6">
          {/* Row 1 - 2 large cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {security.features.slice(0, 2).map((feature, index) => {
              const Icon =
                featureIconMap[feature.icon as keyof typeof featureIconMap]

              return (
                <motion.div
                  key={index}
                  className="rounded-2xl border-2 border-border bg-background p-6 transition-colors duration-300 hover:border-primary/50"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -4 }}
                >
                  <motion.div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {Icon && <Icon className="h-6 w-6 text-primary" />}
                  </motion.div>
                  <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Row 2 - 3 small cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {security.features.slice(2, 5).map((feature, index) => {
              const Icon =
                featureIconMap[feature.icon as keyof typeof featureIconMap]

              return (
                <motion.div
                  key={index + 2}
                  className="rounded-2xl border-2 border-border bg-background p-6 transition-colors duration-300 hover:border-primary/50"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: (index + 2) * 0.1 + 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -4 }}
                >
                  <motion.div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {Icon && <Icon className="h-6 w-6 text-primary" />}
                  </motion.div>
                  <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
