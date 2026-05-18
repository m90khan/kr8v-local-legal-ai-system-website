"use client"

import { motion, useScroll, useTransform, useSpring } from "motion/react"
import { useRef } from "react"

import {
  Upload,
  FileSearch,
  Database,
  ShieldAlert,
  ClipboardCheck,
  FileOutput,
} from "lucide-react"
import { getHowItWorksContent } from "@/lib/content"

export const iconMap = {
  Upload,
  FileSearch,
  Database,
  ShieldAlert,
  ClipboardCheck,
  FileOutput,
}
export function HowItWorksHorizontal() {
  const containerRef = useRef(null)
  const content = getHowItWorksContent()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const stepCount = content?.steps.length

  // Adjusted horizontal movement:
  // We move by (card width + gap) for each step to keep the "active" card centered.
  const x = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      ["0vw", `-${(stepCount - 1) * 45}vw`]
    ),
    { stiffness: 100, damping: 30 }
  )

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-background">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="container mx-auto mb-16 max-w-7xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
              <span className="text-sm font-medium text-primary">
                {content.title}
              </span>
            </div>

            <motion.h2
              className="mb-6 text-3xl font-bold tracking-tight md:text-3xl lg:text-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="block">{content.subtitle.split(", ")[0]}</span>
              <span className="block bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
                {content.subtitle.split(", ")[1]}
              </span>
            </motion.h2>
          </motion.div>
        </div>

        <div className="relative flex items-center">
          {/* <div className="absolute top-1/2 right-0 left-0 h-[2px] bg-border/40" /> */}

          <motion.div style={{ x }} className="flex items-center px-[37.5vw]">
            {content?.steps.map((step, index) => {
              const start = index / stepCount
              const end = (index + 1) / stepCount

              return (
                <div key={index} className="flex items-center">
                  {/* Connector: Only shows if it's not the first card */}
                  {index !== 0 && (
                    <Connector
                      progress={scrollYProgress}
                      // Connector fills in the gap BEFORE the card's active range
                      range={[start - 0.1, start]}
                    />
                  )}

                  <Card
                    step={step}
                    index={index}
                    progress={scrollYProgress}
                    range={[start, end]}
                  />
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Card({
  step,
  index,
  progress,
  range,
}: {
  step: { icon: string; title: string; description: string; detail: string }
  index: number
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  range: [number, number]
}) {
  // Clamped range to prevent the "non-decreasing" error
  const safeStart = Math.max(0, range[0])
  const safeEnd = Math.min(1, range[0] + 0.05)

  // Scale and Y animation only trigger when we enter the card's range
  const scale = useTransform(progress, [safeStart, safeEnd], [0.8, 1])
  const y = useTransform(progress, [safeStart, safeEnd], [20, 0])

  // Fade in card as it approaches
  const opacityStart = Math.max(0, safeStart - 0.05)
  const opacity = useTransform(progress, [opacityStart, safeStart], [0.3, 1])
  // const height = useTransform(progress, [opacityStart, safeStart], [80, 400])
  const height = useTransform(progress, [safeStart, safeEnd], [72, 400])

  // Detail text appears after the card has expanded
  const detailOpacity = useTransform(
    progress,
    [safeEnd, safeEnd + 0.05],
    [0, 1]
  )
  const rawFillWidth = useTransform(
    progress,
    [safeStart, safeEnd],
    ["0%", "100%"]
  )
  const Icon = iconMap[step.icon as keyof typeof iconMap]

  return (
    <motion.div
      style={{ height }}
      className="relative w-[25vw] min-w-[260px] space-y-4 overflow-hidden rounded-3xl border-2 border-border bg-card p-6 transition-all duration-300 hover:border-primary/50"
    >
      <motion.div
        style={{
          width: rawFillWidth,
          height,
        }}
        className="absolute inset-0 z-0 origin-center bg-primary/5 transition-all duration-300"
      />

      <div className="relative z-2 flex items-center gap-3 border-b pb-4">
        <div className="border-blue-700 px-2 py-1 text-sm text-primary">
          {index + 1}.
        </div>
        <h3 className="text-lg text-primary italic">{step.title}</h3>
      </div>
      <motion.div className="relative z-1 flex h-full w-full flex-col">
        <motion.p className="text-md font-semibold">
          {step.description}
        </motion.p>
        <motion.p className="text-sm">{step.detail}</motion.p>
        <div className="mt-2 mb-6 flex flex-1 items-center justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl">
            {Icon && (
              <Icon
                className="h-25 w-25 text-primary"
                strokeWidth={1} // Use 1 for light, 1.5 for medium-light
              />
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Connector({
  progress,
  range,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  range: [number, number]
}) {
  const width = useTransform(progress, [range[0], range[1]], ["0%", "100%"])

  const fillWidth = useSpring(width, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  })
  return (
    <div className="flex w-[15vw] items-center px-0">
      <div className="relative h-[6px] w-full bg-border">
        <motion.div
          style={{ width: width }}
          className="absolute top-0 left-0 h-full bg-primary"
        />
      </div>
    </div>
  )
}
