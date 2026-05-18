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

const features = [
  {
    icon: Lock,
    title: "Private-by-Design Infrastructure",
    description:
      "Deployed on your network with encrypted storage. Contracts never leave your infrastructure or touch external APIs.",
    gradient: "from-primary to-chart-2",
  },
  {
    icon: Scale,
    title: "Policy-Aware Decision Engine",
    description:
      "Transforms contract analysis into clear approve, reject, or review decisions based on your internal legal policies.",
    gradient: "from-chart-2 to-chart-3",
  },
  {
    icon: Brain,
    title: "Reference-Driven Intelligence",
    description:
      "Compares NDAs against your approved templates, past contracts, and company standards for precise evaluation.",
    gradient: "from-chart-3 to-chart-4",
  },
  {
    icon: TrendingUp,
    title: "Clause-Level Risk Analysis",
    description:
      "Identifies risky clauses, missing protections, and deviations with visual heatmaps and structured explanations.",
    gradient: "from-chart-4 to-chart-5",
  },
  {
    icon: FileCheck,
    title: "Audit-Backed Workflows",
    description:
      "Track every review action, decision, and change with tamper-evident audit logs and full version history.",
    gradient: "from-chart-5 to-primary",
  },
  {
    icon: RefreshCw,
    title: "Policy-Aligned Rewrite Engine",
    description:
      "Automatically generates safer clause alternatives aligned with your legal standards and risk tolerance.",
    gradient: "from-primary to-chart-3",
  },
]

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

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
            <span className="text-sm font-medium text-primary">Features</span>
          </motion.div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Everything you need for
            <br />
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              confident legal decisions
            </span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
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
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                    initial={false}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className="relative mb-2"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="relative h-14 w-14">
                      {/* Glow Effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-50`}
                      />
                      {/* Icon Box */}
                      <div
                        className={`relative h-full w-full rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center p-3`}
                      >
                        <feature.icon className="h-full w-full text-white" />
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
                  <motion.div
                    className={`absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                    style={{ transformOrigin: "left" }}
                  />

                  {/* Hover Shine Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                      backgroundSize: "200% 200%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 0%", "200% 200%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Feature Highlight */}
        {/* <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-chart-2/5 to-chart-3/5 p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="mb-4 text-2xl font-bold">
                Built for Legal Teams, Secured by Design
              </h3>
              <p className="text-lg text-muted-foreground">
                Lexon AI combines the power of modern AI with the security and
                control your legal team demands. No compromises, no cloud
                dependencies, no data exposure.
              </p>
            </div>
          </Card>
        </motion.div> */}
      </div>
    </section>
  )
}
