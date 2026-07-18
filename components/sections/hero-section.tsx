"use client"
import { useState } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Shield,
  Server,
  Play,
  Calendar,
  FileCheck,
  Users,
} from "lucide-react"
import { useRef } from "react"
import { VideoModal } from "@/components/shared/video-modal"
import { ZohoModal } from "@/components/shared/zoho-modal"
import { getHeroContent } from "@/lib/content"
import Image from "next/image"

export function HeroSection() {
  const content = getHeroContent()
  const [showVideo, setShowVideo] = useState(false)
  const [showZoho, setShowZoho] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const getBadgeIcon = (text: string) => {
    if (text.includes("Local")) return Server
    if (text.includes("Organization")) return FileCheck
    if (text.includes("Self-Hosted")) return Shield
    if (text.includes("Unlimited")) return Users
    return Shield
  }

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[120vh] items-center justify-center overflow-hidden bg-background pt-40"
    >
      {/* Animated Background */}

      <motion.div
        className="relative z-10 container mx-auto max-w-7xl px-6 text-center"
        style={{ y, opacity }}
      >
        {/* Trust Badges */}

        <motion.div
          className="mb-12 inline-flex items-center gap-2 rounded-sm border border-primary/20 bg-primary/10 px-4 py-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Server className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">{content.badge}</span>
        </motion.div>
        {/* Pain-Driven Headline */}
        <motion.h1
          className="mx-auto mb-6 max-w-3xl text-3xl leading-[1.1] font-bold tracking-tight md:text-4xl lg:text-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block">{content.headline.split(". ")[0]}.</span>
          <span className="block bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
            {content.headline.split(". ")[1]}
          </span>
        </motion.h1>

        {/* Outcome-Driven Subheadline */}
        <motion.p
          className="mx-auto mb-4 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {content.subhead}
        </motion.p>
        <motion.div
          className="mb-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {content.trust_badges?.map((badge, i) => {
            const BadgeIcon = getBadgeIcon(badge.text)
            return (
              <div
                key={i}
                className="flex items-center gap-2 rounded-sm border border-primary/20 bg-card px-4 py-2 text-sm"
              >
                <BadgeIcon className="h-4 w-4 text-primary" />
                <span className="font-medium">{badge.text}</span>
              </div>
            )
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              onClick={() => setShowZoho(true)}
              className="group text-md bg-gradient-to-r from-primary to-chart-2 px-5 py-6 shadow-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              {content.cta?.[0]?.label || "Book a Demo"}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowVideo(true)}
              className="group text-md px-5 py-6"
            >
              <Play className="mr-2 h-5 w-5" />
              {content.cta?.[1]?.label || "Watch Demo"}
            </Button>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="relative mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Glow Orb 1 - Primary */}
          <motion.div
            className="absolute -inset-20 -z-10 rounded-full bg-gradient-to-r from-primary/30 via-primary/20 to-chart-2/30 blur-[80px]"
            animate={{
              scale: [1, 1.1, 0.95, 1.05, 1],
              rotate: [0, 5, -5, 3, 0],
              borderRadius: [
                "40% 60% 55% 45%",
                "55% 45% 40% 60%",
                "45% 55% 60% 40%",
                "50% 50% 50% 50%",
                "40% 60% 55% 45%",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Glow Orb 2 - Blue */}
          <motion.div
            className="absolute -inset-24 -z-10 rounded-full bg-gradient-to-br from-blue-400/20 via-primary/15 to-blue-600/20 blur-[100px]"
            animate={{
              scale: [0.95, 1.05, 1, 0.9, 0.95],
              rotate: [0, -8, 5, -3, 0],
              borderRadius: [
                "55% 45% 50% 50%",
                "45% 55% 45% 55%",
                "50% 50% 55% 45%",
                "40% 60% 50% 50%",
                "55% 45% 50% 50%",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <Image
            src="/images/lexon-dash.png"
            alt="Lexon AI Dashboard"
            width={1200}
            height={800}
            className="w-full rounded-xl border border-white/10"
          />
        </motion.div>

        {/* Decision Output Preview */}

        {/* Micro-trust signals */}
      </motion.div>

      <VideoModal isOpen={showVideo} onClose={() => setShowVideo(false)} />
      <ZohoModal open={showZoho} onClose={() => setShowZoho(false)} />
    </section>
  )
}
