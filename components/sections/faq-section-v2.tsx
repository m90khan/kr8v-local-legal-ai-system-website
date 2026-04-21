"use client"

import { motion, useInView, AnimatePresence } from "motion/react"
import { useRef, useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Is this legally reliable? Can I trust the AI's analysis?",
    answer:
      "KR8V uses advanced NLP models trained on large datasets of NDA-style contracts to identify common risk patterns and clause issues. However, this is decision support software, not legal advice. The system highlights potential risks and suggests areas for review, but final interpretation and decisions should always involve qualified human judgment. Think of it like an advanced contract review assistant — it helps surface issues you might miss, but it does not replace legal responsibility. Many teams use KR8V for first-pass review, then involve legal counsel only for flagged sections, reducing review time significantly.",
    gradient: "from-primary to-chart-2",
  },
  {
    question: "Can I use this instead of a lawyer?",
    answer:
      "For standard NDAs and routine confidentiality agreements, KR8V can often handle first-pass review effectively. However, it is not a replacement for legal counsel in complex negotiations, high-value deals, or custom legal structures. It is designed to help teams quickly identify unusual or risky clauses in commonly used agreements, so legal experts can focus on higher-impact decisions rather than repetitive reviews.",
    gradient: "from-chart-2 to-chart-3",
  },
  {
    question: "Where does my data go? Who can see my contracts?",
    answer:
      "Your contracts are processed in a privacy-first architecture. KR8V is designed for local or self-hosted deployment, meaning your documents can remain within your infrastructure. We do not use your contract data to train external models, and we do not access your documents unless you explicitly enable a hosted configuration. In self-hosted setups, your data stays within your environment and can be encrypted at rest according to your own security policies.",
    gradient: "from-chart-3 to-chart-4",
  },
  {
    question: "What happens if the AI makes a mistake?",
    answer:
      "Every flagged issue includes the exact clause, explanation, and reasoning used to identify it, so you can validate the result independently. Like any automated system, KR8V can produce both false positives and false negatives, which is why it is designed for transparency rather than blind automation. The system prioritizes caution, meaning it may flag more potential issues than strictly necessary in order to reduce the chance of missing critical risks.",
    gradient: "from-chart-4 to-chart-5",
  },
  {
    question: "How long does analysis take? Can it handle complex contracts?",
    answer:
      "Typical NDAs are analyzed in 10–15 seconds. Longer or more complex contracts (20+ pages) usually complete within 60 seconds, depending on system configuration. KR8V is designed to handle documents up to around 100 pages, though performance depends on deployment environment. Highly complex agreements with layered dependencies may take longer, but still typically faster than manual legal review.",
    gradient: "from-chart-5 to-primary",
  },
  {
    question: "Do you support contracts other than NDAs?",
    answer:
      "KR8V is currently optimized for NDAs and confidentiality agreements. Support for additional contract types such as employment agreements, vendor contracts, and MSAs is planned as the product expands. The core AI engine is general-purpose, but reliability depends on domain-specific tuning of clause models and risk rules.",
    gradient: "from-primary to-chart-3",
  },
]
export function FaqSectionV2() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
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
            <span className="text-sm font-medium text-primary">FAQ</span>
          </motion.div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            The questions everyone asks
          </h2>
          <p className="text-xl text-muted-foreground">
            Honest answers to the hard questions about AI contract review
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
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
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? (
                      <Minus className="h-4 w-4 text-primary" />
                    ) : (
                      <Plus className="h-4 w-4 text-primary" />
                    )}
                  </motion.div>
                </div>

                {/* Answer Panel */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6">
                        <div
                          className={`h-1 w-12 bg-gradient-to-r ${faq.gradient} mb-4 rounded-sm`}
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
        <motion.div
          className="mx-auto mt-16 max-w-3xl rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-chart-2/5 to-chart-3/5 p-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="mb-2 text-lg font-medium">Still evaluating KR8V?</p>

          <p className="mb-4 text-muted-foreground">
            Speak with our team to understand deployment options, security
            model, and how KR8V fits into your legal workflow. We can walk
            through architecture, onboarding, and use cases in detail.
          </p>

          <motion.button
            className="rounded-sm bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
