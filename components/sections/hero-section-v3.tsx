"use client"
import { useState } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Shield,
  Server,
  Eye,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Play,
  Calendar,
} from "lucide-react"
import { useRef } from "react"
import { VideoModal } from "@/components/shared/video-modal"

export function HeroSectionV3() {
  const [showVideo, setShowVideo] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-40"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary) / 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary) / 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "80px 80px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 container mx-auto max-w-7xl px-6 text-center"
        style={{ y, opacity }}
      >
        {/* Trust Badges */}
        <motion.div
          className="mb-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { icon: Shield, text: "SOC 2 Ready" },
            { icon: Server, text: "100% Local AI" },
            { icon: Eye, text: "Zero Data Exposure" },
          ].map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-sm border border-primary/20 bg-card px-4 py-2 text-sm"
            >
              <badge.icon className="h-4 w-4 text-primary" />
              <span className="font-medium">{badge.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Pain-Driven Headline */}
        <motion.h1
          className="mb-6 text-3xl leading-[1.1] font-bold tracking-tight md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block">Stop spending 45 minutes on every NDA.</span>
          <span className="block bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
            Identify contract risks in 10 seconds.
          </span>
        </motion.h1>

        {/* Outcome-Driven Subheadline */}
        <motion.p
          className="mx-auto mb-4 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Deploy on your network. Analyze contracts with local AI. Keep full
          control over sensitive documents.
        </motion.p>

        <motion.div
          className="mb-12 inline-flex items-center gap-2 rounded-sm border border-primary/20 bg-primary/10 px-4 py-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Server className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">
            Runs locally. No data leaves your machine.
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mb-20 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="group text-md rounded-sm bg-gradient-to-r from-primary to-chart-2 px-5 py-6 shadow-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowVideo(true)}
              className="group text-md rounded-sm px-5 py-6"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Decision Output Preview */}
        <motion.div
          className="relative mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-card shadow-2xl">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <div className="h-3 w-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex flex-1 items-center justify-center">
                <div className="rounded-md bg-background/50 px-4 py-1 text-xs text-muted-foreground">
                  localhost:3000/analyze
                </div>
              </div>
            </div>

            {/* Decision Cards */}
            <div className="bg-gradient-to-br from-background via-background to-muted/30 p-8">
              <h3 className="mb-6 text-left text-sm text-muted-foreground">
                Analysis Results
              </h3>

              <div className="grid gap-4 md:grid-cols-3">
                {/* Safe Decision */}
                <motion.div
                  className="group relative overflow-hidden rounded-xl border-2 border-green-500/20 bg-green-500/5 p-6 transition-colors hover:border-green-500/40"
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <CheckCircle className="mb-4 h-12 w-12 text-green-500" />
                  <div className="relative">
                    <h4 className="mb-2 text-2xl font-bold text-green-600 dark:text-green-400">
                      Safe to Sign
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Standard clauses, minimal risk
                    </p>
                  </div>
                </motion.div>

                {/* Review Decision */}
                <motion.div
                  className="group relative overflow-hidden rounded-xl border-2 border-yellow-500/30 bg-yellow-500/5 p-6 transition-colors hover:border-yellow-500/50"
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <AlertTriangle className="mb-4 h-12 w-12 text-yellow-500" />
                  <div className="relative">
                    <h4 className="mb-2 text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                      Needs Review
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      3 clauses need attention
                    </p>
                  </div>
                </motion.div>

                {/* High Risk Decision */}
                <motion.div
                  className="group relative overflow-hidden rounded-xl border-2 border-destructive/30 bg-destructive/5 p-6 transition-colors hover:border-destructive/50"
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <XCircle className="mb-4 h-12 w-12 text-destructive" />
                  <div className="relative">
                    <h4 className="mb-2 text-2xl font-bold text-destructive">
                      High Risk
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Do not sign without changes
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-6 border-t border-border pt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Clear decision + specific reasoning + suggested fixes
                </p>
              </div>
            </div>
          </div>

          {/* Floating Stats */}
          <motion.div
            className="absolute -bottom-4 -left-4 rounded-2xl border-2 border-primary/20 bg-card px-6 py-4 shadow-xl backdrop-blur-sm"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="mb-1 text-3xl font-bold">10 sec</div>
            <div className="text-sm text-muted-foreground">Analysis time</div>
          </motion.div>

          <motion.div
            className="absolute -right-4 -bottom-4 rounded-2xl border-2 border-chart-2/20 bg-card px-6 py-4 shadow-xl backdrop-blur-sm"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <div className="mb-1 text-3xl font-bold">100%</div>
            <div className="text-sm text-muted-foreground">Private</div>
          </motion.div>
        </motion.div>

        {/* Micro-trust signals */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>No signup required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>Works locally</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>Your data stays private</span>
          </div>
        </motion.div>
      </motion.div>

      <VideoModal isOpen={showVideo} onClose={() => setShowVideo(false)} />
    </section>
  )
}
