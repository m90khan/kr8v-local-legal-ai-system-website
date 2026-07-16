"use client"
import { motion, useInView, AnimatePresence } from "motion/react"
import { useRef, useState } from "react"
import { Plus, Minus } from "lucide-react"
import { getFaqContent } from "@/lib/content"

export function FaqSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]))
  const content = getFaqContent()
  const toggleFaq = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-muted/30 px-6 py-32"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-20 max-w-3xl text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="mb-6 inline-block rounded-sm border border-primary/20 bg-primary/10 px-4 py-2"
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
          {/* <p className="text-xl text-muted-foreground">
            Honest answers to the hard questions about AI contract review
          </p> */}
        </motion.div>

        {/* FAQ Items */}
        <div className="mx-auto max-w-5xl space-y-4">
          {content.items.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1 + 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.div
                className="cursor-pointer overflow-hidden rounded-sm border-2 border-border bg-card"
                onClick={() => toggleFaq(index)}
                whileHover={{ borderColor: "hsl(var(--primary) / 0.3)" }}
                transition={{ duration: 0.2 }}
              >
                {/* Question Header */}
                <div className="flex items-start justify-between gap-4 p-6">
                  <h3 className="flex-1 text-lg font-bold">{faq.question}</h3>
                  <motion.div
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-sm bg-primary/10"
                    animate={{ rotate: openIndices.has(index) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndices.has(index) ? (
                      <Minus className="h-4 w-4 text-primary" />
                    ) : (
                      <Plus className="h-4 w-4 text-primary" />
                    )}
                  </motion.div>
                </div>

                {/* Answer Panel */}
                <AnimatePresence initial={false}>
                  {openIndices.has(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6">
                        <div
                          className={`mb-4 h-1 w-12 rounded-sm bg-gradient-to-r from-chart-4 to-chart-5`}
                        />
                        <p className="leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          className="mx-auto mt-16 max-w-5xl rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-chart-2/5 to-chart-3/5 p-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="mb-2 text-lg font-medium">{content.bottom_cta.title}</p>

          <p className="mb-4 text-muted-foreground">
            {content.bottom_cta.description}
          </p>

          <motion.button
            className="rounded-sm bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {content.bottom_cta.cta}
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  )
}
