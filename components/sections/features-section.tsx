"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import {
  Lock,
  Scale,
  Brain,
  TrendingUp,
  FileCheck,
  RefreshCw,
} from "lucide-react"
import content from "@/content.json"

export const iconMap: Record<string, React.ComponentType<any>> = {
  Lock: Lock,
  Brain: Brain,
  TrendingUp: TrendingUp,
  Scale: Scale,
  FileCheck: FileCheck,
  RefreshCw: RefreshCw,
}
export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const features = content.features
  return (
    <section
      id="features"
      ref={containerRef}
      className="relative overflow-hidden bg-background px-6 py-32"
    >
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
              {features.badge}
            </span>
          </motion.div>

          <motion.h2
            className="mb-6 text-3xl font-bold tracking-tight md:text-3xl lg:text-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block">{features.title.split(", ")[0]}.</span>
            <span className="block bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              {features.title.split(", ")[1]}
            </span>
          </motion.h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.items.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1 + 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <motion.div
                  className="group h-full"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="relative h-full overflow-hidden border-2 border-border p-8 transition-colors duration-300 hover:border-primary/50">
                    {/* Animated Background Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br from-primary to-chart-2 opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                      initial={false}
                    />

                    {/* Icon Container */}
                    <motion.div
                      className="relative mb-2"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <div className="relative h-14 w-14">
                        {/* Glow Effect */}
                        <motion.div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-chart-2 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-50`}
                        />
                        {/* Icon Box */}
                        <div
                          className={`relative flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-chart-2 p-3`}
                        >
                          {Icon && <Icon className="h-6 w-6 text-white" />}
                        </div>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-primary">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>

                    {/* Bottom Accent */}
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
