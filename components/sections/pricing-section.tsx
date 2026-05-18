"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"
import content from "@/content.json"

export function PricingSection() {
  const pricingData = content.pricing
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      id="pricing"
      ref={containerRef}
      className="relative overflow-hidden bg-muted/30 px-6 py-32"
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
              {pricingData?.title || "Pricing"}
            </span>
          </motion.div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            {pricingData?.subtitle || "Review smarter,"}
            <br />
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              not harder
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            {pricingData?.description ||
              "Catch issues early. Send only flagged sections to your lawyer. Save time and legal fees."}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mx-auto mb-16 grid max-w-5xl gap-8 md:grid-cols-1">
          {pricingData?.plans?.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2 + 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={plan.popular ? "md:-mt-4" : ""}
            >
              <motion.div
                className="h-full"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card
                  className={`relative h-full overflow-hidden p-8 ${
                    plan.popular
                      ? "border-4 border-primary shadow-2xl"
                      : "border-2 border-border"
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <motion.div
                      className="absolute top-0 right-0 rounded-bl-2xl bg-primary px-6 py-2 text-xs font-bold text-primary-foreground"
                      initial={{ x: 100, y: -100 }}
                      animate={isInView ? { x: 0, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      MOST POPULAR
                    </motion.div>
                  )}

                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-primary to-chart-2 opacity-5`}
                  />

                  {/* Name & Description */}
                  <div className="relative mb-6">
                    <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                    <p className="text-sm font-medium text-primary">
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8 space-y-3">
                    {plan.features?.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + 0.5 + i * 0.05 }}
                      >
                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm leading-relaxed">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`group w-full rounded-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-chart-2 text-white"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Support Section */}
        {pricingData?.support && (
          <motion.div
            className="mx-auto mb-16 max-w-5xl"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="rounded-2xl border-2 border-border bg-card p-8 text-center">
              <h3 className="mb-2 text-xl font-bold">
                {pricingData.support.title}
              </h3>
              <p className="mb-6 text-muted-foreground">
                {pricingData.support.description}
              </p>
              <div className="grid grid-cols-2 items-center justify-center gap-4 text-sm">
                {pricingData.support.items?.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Trust Note */}
        {/* <motion.div
          className="container mx-auto max-w-5xl text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-chart-2/5 p-8">
            <h3 className="mb-3 text-xl font-bold">
              {pricingData?.trust_note?.title ||
                "AI-assisted review, not AI replacement"}
            </h3>
            <p className="mb-4 text-muted-foreground">
              {pricingData?.trust_note?.description ||
                "Lexon AI helps surface potential risks in contracts so teams can review faster and make more informed decisions."}
            </p>
            <div className="grid grid-cols-2 items-center justify-center gap-4 text-sm">
              {pricingData?.trust_note?.badges?.map((item, i) => (
                <div
                  key={i}
                  className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </motion.div> */}
      </div>
    </section>
  )
}
