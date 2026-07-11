"use client"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { ProblemSectionV2Interactive } from "../ui/card/RiskCard"
import content from "@/content.json"

export function ProblemSection() {
  const problemData = content.problem_section
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="relative overflow-hidden px-6 py-32">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            {problemData?.title || "NDAs hide risk"}
            <br />
            <span className="text-muted-foreground">
              {problemData?.subtitle || "in plain English"}
            </span>
          </h2>
          <p className="text-md mx-auto max-w-2xl text-muted-foreground">
            {problemData?.description ||
              "Instantly identify high-risk clauses, missing protections, and deviations from your standards."}
          </p>
        </motion.div>

        {/* Real NDA Example */}
        <motion.div
          className="mx-auto mb-16 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            {/* Document Header */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <span className="text-2xl">📄</span>
                </div>
                <div>
                  <h3 className="font-bold">
                    {problemData?.real_contract?.title || "Standard Mutual NDA"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {problemData?.real_contract?.pages || "12"} pages ·{" "}
                    {problemData?.real_contract?.source || "Received from investor"}
                  </p>
                </div>
              </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">
                    Time to review
                  </div>
                  <div className="text-2xl font-bold">
                    {problemData?.real_contract?.time_to_review || "45 minutes"}
                  </div>
                </div>
            </div>

            {/* NDA Snippet with Highlighted Risks */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-border bg-card p-8">
              {/* Page indicator */}
              <div className="absolute top-4 right-4 text-xs text-muted-foreground">
                {problemData?.real_contract?.page_indicator || "Page 7 of 12"}
              </div>

              <div className="space-y-2 font-mono text-sm leading-relaxed">
                {problemData?.snippet?.[0] && (
                  <p className="text-muted-foreground">
                    <span className="text-foreground/50">
                      {problemData.snippet[0].section}
                    </span>{" "}
                    {problemData.snippet[0].text}
                  </p>
                )}

                <ProblemSectionV2Interactive />

                {problemData?.snippet?.[1] && (
                  <p className="text-muted-foreground">
                    <span className="text-foreground/50">
                      {problemData.snippet[1].section}
                    </span>{" "}
                    {problemData.snippet[1].text}
                  </p>
                )}

                {problemData?.snippet?.[2] && (
                  <p className="text-muted-foreground">
                    <span className="text-foreground/50">
                      {problemData.snippet[2].section}
                    </span>{" "}
                    {problemData.snippet[2].text}
                  </p>
                )}
              </div>

              {/* Bottom note */}
              <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
                {problemData?.bottom_note ||
                  "... and 6 more pages of legal text"}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Real Statistics */}
        <motion.div
          className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {problemData?.stats?.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border-2 border-border bg-card p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 1 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -4 }}
            >
              <div
                className={`mb-3 text-2xl font-bold ${
                  item.stat === "Hidden risk"
                    ? "text-destructive"
                    : item.stat === "Faster review"
                      ? "text-yellow-500"
                      : "text-primary"
                }`}
              >
                {item.stat}
              </div>
              <div className="text-sm leading-relaxed text-muted-foreground">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
