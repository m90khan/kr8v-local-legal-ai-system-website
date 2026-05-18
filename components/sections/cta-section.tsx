"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Play, Calendar } from "lucide-react"
import { VideoModal } from "@/components/shared/video-modal"
import content from "@/content.json"

export function CtaSection() {
  const router = useRouter()
  const ctaData = content.cta
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [showVideo, setShowVideo] = useState(false)

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

      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="relative overflow-hidden rounded-xl border-2 border-border bg-background p-12 backdrop-blur-xl md:p-16"
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
                {ctaData?.headline || "Instantly analyze"}
                <br />
                <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
                  {ctaData?.subHeadline || "in seconds"}
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
                {ctaData?.subhead ||
                  "Upload an NDA and receive structured risk analysis, clause-level breakdowns, and review guidance in seconds."}
              </motion.p>

              <motion.p
                className="mb-12 text-sm text-muted-foreground/80"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {ctaData?.tagline ||
                  "Works locally. No external API dependency. Designed for private deployment."}
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
                    onClick={() => router.push("/contact?activeTab=demo")}
                    className="group rounded-sm bg-gradient-to-r from-primary to-chart-2 px-12 py-8 text-lg text-white shadow-xl"
                  >
                    <Calendar className="mr-2 h-6 w-6" />
                    {ctaData?.cta?.[0]?.label || "Book a Demo"}
                    <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setShowVideo(true)}
                    className="group rounded-sm px-12 py-8 text-lg"
                  >
                    <Play className="mr-2 h-6 w-6" />
                    {ctaData?.cta?.[1]?.label || "Watch Demo Video"}
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
                  {ctaData?.metrics?.map((item, index) => (
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
                  {ctaData?.trust_signals?.map((signal, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{signal}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social proof */}
              <motion.p
                className="mt-8 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {ctaData?.social_proof ||
                  "Trusted by 100+ teams for faster contract review workflows"}
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
        </div>

        {/* Footer */}
        <motion.footer
          className="mt-16 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="mb-6 flex flex-col items-center justify-center gap-6 sm:flex-row">
            {ctaData?.footer?.links?.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p>
            {ctaData?.footer?.copyright ||
              "© 2024 Lexon AI. Private AI for legal contract intelligence."}
          </p>
        </motion.footer>
      </div>

      {/* Modals */}
      <VideoModal isOpen={showVideo} onClose={() => setShowVideo(false)} />
    </section>
  )
}
