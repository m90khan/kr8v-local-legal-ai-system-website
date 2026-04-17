"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload, ArrowRight, CheckCircle } from "lucide-react"

export function CtaSectionV3() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-background px-6 py-32"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "80px 80px"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute top-1/3 left-1/4 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-xl border-2 border-border bg-gradient-to-br from-card/90 to-muted/90 p-12 backdrop-blur-xl md:p-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-chart-2/5 to-chart-3/5 opacity-50" />

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Headline */}
            <motion.h2
              className="mb-6 text-4xl leading-tight font-bold md:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Instantly analyze
              <br />
              <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
                contract risk in seconds
              </span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              className="mx-auto mb-4 max-w-2xl text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Upload an NDA and receive structured risk analysis, clause-level
              breakdowns, and review guidance in seconds.
            </motion.p>

            <motion.p
              className="mb-12 text-sm text-muted-foreground/80"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Works locally. No external API dependency. Designed for private
              deployment.
            </motion.p>

            {/* Primary CTA */}
            <motion.div
              className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="group rounded-full bg-gradient-to-r from-primary to-chart-2 px-12 py-8 text-lg text-white shadow-xl"
                >
                  <Upload className="mr-2 h-6 w-6" />
                  Run NDA Analysis
                  <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="border-t border-border/50 pt-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="mx-auto mb-8 grid max-w-3xl grid-cols-3 gap-8">
                {[
                  { metric: "< 100 sec", label: "Typical NDA analysis" },
                  { metric: "Local-first", label: "No external API calls" },
                  { metric: "Deployable", label: "On-prem & private systems" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1 + 0.8,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <div className="mb-1 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-3xl font-bold text-transparent">
                      {item.metric}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Micro-trust signals */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Local-first execution</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No external API dependency</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Audit-ready analysis logs</span>
                </div>
              </div>
            </motion.div>

            {/* Social proof */}
            <motion.p
              className="mt-8 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Trusted by 100+ teams for faster contract review workflows
            </motion.p>
          </div>

          {/* Floating Decorations */}
          <motion.div
            className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-primary/20 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-chart-2/20 blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-16 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="mb-6 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="#" className="transition-colors hover:text-foreground">
              Documentation
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="/vision"
              className="transition-colors hover:text-foreground"
            >
              Vision
            </a>
          </div>
          <p>© 2024 KR8V. Private AI for legal contract intelligence.</p>
        </motion.footer>
      </div>
    </section>
  )
}
