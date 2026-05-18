"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Cloud, Server, X, Check } from "lucide-react"
import { getDifferentiatorContent } from "@/lib/content"

export function DifferentiatorSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const content = getDifferentiatorContent()
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
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl">
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
              {content.title}
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 text-3xl font-bold tracking-tight md:text-3xl lg:text-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block">{content.subtitle.split(", ")[0]}.</span>
            <span className="block bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              {content.subtitle.split(", ")[1]}
            </span>
          </motion.h1>
        </motion.div>

        {/* Visual Comparison */}
        <div className="mx-auto max-w-5xl">
          {/* Headers */}
          <div className="mb-8 grid grid-cols-3 gap-6">
            <div className="col-span-1" />
            <motion.div
              className="rounded-2xl border border-border bg-muted/50 p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Cloud className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
              <h3 className="text-lg font-bold">
                {content.comparison_headers[0]}
              </h3>
            </motion.div>
            <motion.div
              className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-chart-2/10 p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Server className="mx-auto mb-2 h-8 w-8 text-primary" />
              <h3 className="text-lg font-bold">
                {" "}
                {content.comparison_headers[1]}
              </h3>
            </motion.div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-3">
            {content.items.map((item, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-3 items-center gap-6 rounded-2xl border border-border bg-card p-4 transition-colors duration-300 hover:border-primary/30"
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1 + 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="font-medium">{item.feature}</div>

                {/* Traditional Tools */}
                <div className="flex justify-center">
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: item.cloud ? 0 : -10,
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item.cloud ? (
                      <Check className="h-6 w-6 text-muted-foreground" />
                    ) : (
                      <X className="h-6 w-6 text-destructive" />
                    )}
                  </motion.div>
                </div>

                {/* Lexon AI */}
                <div className="flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item.kr8v ? (
                      <Check className="h-6 w-6 text-primary" />
                    ) : (
                      <X className="h-6 w-6 text-destructive" />
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Highlight */}
          <motion.div
            className="mt-12 rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-chart-2/5 to-chart-3/5 p-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h3 className="mb-4 text-xl font-bold">
              {content.bottom_highlight.title}
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {content.bottom_highlight.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
