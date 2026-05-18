"use client"
import { motion, useInView } from "motion/react"
import { useRef } from "react"

import { getWhoItsFor } from "@/lib/content"

import { Scale, BriefcaseBusiness, Shield, ClipboardList } from "lucide-react"

const whoItsForIconMap = {
  Scale,
  BriefcaseBusiness,
  Shield,
  ClipboardList,
}
export function WhoItsFor() {
  const content = getWhoItsFor()
  const groups = content?.groups

  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-background px-6 py-32"
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
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            {content?.title || "Security built"}
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            {content?.subtitle ||
              "Your data security is our foundation, not an afterthought"}
          </p>
        </motion.div>

        {/* Security Features Grid */}

        {/* Compliance - Simple List Items */}
        <motion.div
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
            {groups?.map((item, index) => {
              const Icon =
                whoItsForIconMap[item.icon as keyof typeof whoItsForIconMap]

              return (
                <motion.div
                  key={index}
                  className="rounded-2xl border-2 border-border bg-card p-6 transition-colors duration-300 hover:border-primary/50"
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
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
