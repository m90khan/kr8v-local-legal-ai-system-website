"use client"

import { motion, useInView } from "motion/react"
import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import {
  ChevronLeft,
  ChevronRight,
  FileSearch,
  ShieldCheck,
  Clock,
} from "lucide-react"
import { getUseCasesContent } from "@/lib/content"

export function UseCasesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const content = getUseCasesContent()
  const [currentIndex, setCurrentIndex] = useState(0)
  const useCases = content?.cases || []
  const nextUseCase = () => {
    setCurrentIndex((prev) => (prev + 1) % useCases.length)
  }

  const prevUseCase = () => {
    setCurrentIndex((prev) => (prev - 1 + useCases.length) % useCases.length)
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "search":
        return <FileSearch className="h-8 w-8" />
      case "shield":
        return <ShieldCheck className="h-8 w-8" />
      case "clock":
        return <Clock className="h-8 w-8" />
      default:
        return <FileSearch className="h-8 w-8" />
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-background px-6 py-32"
    >
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
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            {content.subtitle}
          </h2>
          <p className="text-md mx-auto max-w-2xl text-muted-foreground">
            {content.description}
          </p>
        </motion.div>

        {/* Use Case Carousel */}
        <div className="relative mx-auto max-w-5xl">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex h-full"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {useCases.map((useCase, index) => (
                <div key={index} className="h-full w-full flex-shrink-0 px-4">
                  <Card className="relative overflow-hidden border-2 border-border p-12 transition-colors hover:border-primary/30">
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-5`}
                    />

                    {/* Icon */}
                    <motion.div
                      className="mb-6 flex justify-center text-primary"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {getIcon(useCase.icon)}
                    </motion.div>

                    {/* Scenario */}
                    <p className="relative z-10 mb-4 text-center text-lg leading-relaxed font-medium text-muted-foreground md:text-xl">
                      {useCase.scenario}
                    </p>

                    {/* Outcome */}
                    <p className="relative z-10 mb-8 text-center text-xl leading-relaxed font-bold md:text-2xl">
                      {useCase.outcome}
                    </p>

                    {/* Metric Highlight */}
                    <div className="mb-6 flex justify-center">
                      <div className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
                        <span className="text-sm font-bold text-primary">
                          {useCase.metric}
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <motion.button
              onClick={prevUseCase}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-card transition-colors hover:border-primary hover:bg-primary/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {useCases.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextUseCase}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-card transition-colors hover:border-primary hover:bg-primary/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>
        </div>

        {/* Trust Footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="mb-4 text-sm text-muted-foreground">
            {content.footer.tagline}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-muted-foreground/70">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-sm"> {content.footer.signals[0]}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground/70">
              <Clock className="h-5 w-5" />
              <span className="text-sm"> {content.footer.signals[1]}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground/70">
              <FileSearch className="h-5 w-5" />
              <span className="text-sm"> {content.footer.signals[2]}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
