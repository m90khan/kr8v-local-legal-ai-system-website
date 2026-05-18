"use client"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import content from "@/content.json"

// const securityFeatures = [
//   {
//     icon: Shield,
//     title: "Encrypted Storage",
//     description: "Contracts are encrypted at rest to protect sensitive data.",
//   },
//   {
//     icon: Lock,
//     title: "Access Control",
//     description: "Role-based permissions and secure authentication.",
//   },
//   {
//     icon: ClipboardList,
//     title: "Audit Logging",
//     description: "Track reviews, edits, and decisions with full history.",
//   },
//   {
//     icon: Database,
//     title: "Local Deployment",
//     description: "Run within your own infrastructure or private network.",
//   },
//   {
//     icon: Server,
//     title: "Private Processing",
//     description: "No external API dependency for standard deployments.",
//   },
//   {
//     icon: Settings,
//     title: "Policy-Based Workflows",
//     description:
//       "Control review flows based on internal rules and permissions.",
//   },
// ]
import {
  LockKeyhole,
  ShieldCheck,
  ScrollText,
  ServerCog,
  Cookie,
  ShieldAlert,
} from "lucide-react"

const featureIconMap = {
  LockKeyhole,
  ShieldCheck,
  ScrollText,
  ServerCog,
  Cookie,
  ShieldAlert,
}
export function SecuritySection() {
  const securityData = content.security_section
  const security = securityData?.security
  const compliance = securityData?.compliance_note
  const trustStatement = securityData?.trust_statement

  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-card px-6 py-32"
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

      <div className="container mx-auto max-w-5xl">
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
              {security?.title || "Security & Compliance"}
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 text-3xl font-bold tracking-tight md:text-3xl lg:text-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block">{security.subtitle.split(", ")[0]}.</span>
            <span className="block bg-gradient-to-r from-primary via-chart-2 to-chart-3 bg-clip-text text-transparent">
              {security.subtitle.split(", ")[1]}
            </span>
          </motion.h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            {security?.tagline ||
              "Your data security is our foundation, not an afterthought"}
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {security.features.map((feature, index) => {
            const Icon =
              featureIconMap[feature.icon as keyof typeof featureIconMap]

            return (
              <motion.div
                key={index}
                className="rounded-2xl border-2 border-border bg-background p-6 transition-colors duration-300 hover:border-primary/50"
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
                  {Icon && <Icon className="h-6 w-6 text-primary" />}
                </motion.div>
                <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
