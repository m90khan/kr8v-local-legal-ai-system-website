"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Shield, Lock, FileCheck, Database, Server, Eye } from "lucide-react"

const securityFeatures = [
  {
    icon: Shield,
    title: "Encrypted Document Storage",
    description:
      "All uploaded contracts are encrypted at rest to protect sensitive legal data.",
  },
  {
    icon: Lock,
    title: "Secure Access Control",
    description:
      "Access is protected through hashed credentials, session controls, and role-based permissions.",
  },
  {
    icon: FileCheck,
    title: "Role-Based Permissions",
    description:
      "Control who can view, review, approve, or manage contracts across your team.",
  },
  {
    icon: Database,
    title: "Private Data Infrastructure",
    description:
      "Uses local databases and vector storage with no dependency on external cloud services.",
  },
  {
    icon: Server,
    title: "Private Network Deployment",
    description:
      "Run entirely داخل your internal network or infrastructure with full control over data flow.",
  },
  {
    icon: Eye,
    title: "Audit & Activity Logging",
    description:
      "Every action is logged with a traceable history for accountability and internal audits.",
  },
]
const complianceStandards = [
  { name: "SOC 2", status: "Aligned" },
  { name: "ISO 27001", status: "Aligned" },
  { name: "GDPR", status: "Supported" },
  { name: "CCPA", status: "Supported" },
]

export function SecuritySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-background px-6 py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

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
              Security & Compliance
            </span>
          </motion.div>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Security built
            <br />
            <span className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              into every layer
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Your data security is our foundation, not an afterthought
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border-2 border-border bg-card p-6 transition-colors duration-300 hover:border-primary/50"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1 + 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="h-6 w-6 text-primary" />
              </motion.div>
              <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Compliance Standards */}
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold">Compliance Ready</h3>
            <p className="text-muted-foreground">
              Designed for private, security-conscious environments
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                className="rounded-2xl border-2 border-border bg-gradient-to-br from-card to-muted/30 p-6 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 1.2,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-2 text-xl font-bold">{standard.name}</div>
                <div className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {standard.status}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          className="mt-20 rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-chart-2/5 to-chart-3/5 p-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h3 className="mb-4 text-2xl font-bold">Zero-Trust by Design</h3>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-muted-foreground">
            KR8V is built for environments where sensitive documents cannot be
            exposed. Every request is validated, every action is logged, and all
            contract data remains inside your private infrastructure.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              "Encrypted document storage",
              "No external API or third-party access",
              "Full audit trail for all actions",
              "Local or self-hosted AI models",
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="rounded-full border border-border bg-background px-4 py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.7 + index * 0.1 }}
              >
                <span className="text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
