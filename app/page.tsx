import Script from "next/script"
import { HeroSectionV3 } from "@/components/sections/hero-section-v3"
import { ProblemSectionV2 } from "@/components/sections/problem-section-v2"
import { BeforeAfterSection } from "@/components/sections/before-after-section"
import { HowItWorksHorizontal } from "@/components/sections/how-it-works-horizontal"
import { ScreenshotAnnotationSection } from "@/components/sections/screenshot-annotation-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { DifferentiatorSection } from "@/components/sections/differentiator-section"
import { SecuritySection } from "@/components/sections/security-section"
import { TestimonialsSectionV3 } from "@/components/sections/testimonials-section-v3"
import { PricingSectionV3 } from "@/components/sections/pricing-section-v3"
import { FaqSectionV2 } from "@/components/sections/faq-section-v2"
import { CtaSectionV3 } from "@/components/sections/cta-section-v3"
import { CustomCursor } from "@/components/shared/custom-cursor"
import { ScrollProgress } from "@/components/shared/scroll-progress"
import { NavigationV2 } from "@/components/sections/navigation-v2"
import { DecisionOutputSection } from "@/components/sections/decision-output-section"

export default function LandingPageV3() {
  const jsonLdProduct = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NDA Agent",
    description:
      "An AI tool for reviewing NDAs and identifying legal risks securely on your local machine.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this legally reliable? Can I trust the AI's analysis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KR8V uses advanced NLP models trained on thousands of NDAs to identify risk patterns. However, we're clear: this is decision support, not legal advice.",
        },
      },
      {
        "@type": "Question",
        name: "Where does my data go? Who can see my contracts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nowhere. Your contracts are processed entirely on your infrastructure using local AI models. We don't have external API calls.",
        },
      },
    ],
  }

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ndaagent.com/",
      },
    ],
  }

  return (
    <>
      <Script
        id="schema-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <main className="relative bg-background">
        <CustomCursor />
        <ScrollProgress />
        <NavigationV2 />

        {/* Hero with Decision Preview */}
        <HeroSectionV3 />

        {/* Problem with Real NDA Snippet */}
        <ProblemSectionV2 />

        {/* Before/After Comparison */}
        <BeforeAfterSection />

        {/* Decision Output Feature (NEW - Hook Feature) */}
        <DecisionOutputSection />

        {/* How It Works (Horizontal Scroll) */}
        <HowItWorksHorizontal />

        {/* Screenshot with Annotations (Visual Variety) */}
        <ScreenshotAnnotationSection />

        {/* Features (Cards - but different from others) */}
        <FeaturesSection />

        {/* Differentiator */}
        <DifferentiatorSection />

        {/* Security */}
        <SecuritySection />

        {/* Testimonials (Ultra-Specific) */}
        <TestimonialsSectionV3 />

        {/* Pricing (Safe Copy) */}
        <PricingSectionV3 />

        {/* FAQ */}
        <FaqSectionV2 />

        {/* CTA (Aggressive Action) */}
        <CtaSectionV3 />
      </main>
    </>
  )
}
// ;("use client")

// import { motion, useScroll, useTransform, useSpring } from "motion/react"
// import { useRef } from "react"
// import { Upload, Scan, Brain, FileCheck, Zap } from "lucide-react"

// const steps = [
//   {
//     icon: Upload,
//     title: "Upload",
//     description: "Drop your NDA file",
//     detail: "PDF, DOCX, or TXT — we handle all formats",
//   },
//   {
//     icon: Scan,
//     title: "Parse",
//     description: "AI reads every clause",
//     detail: "Semantic analysis of all contract sections",
//   },
//   {
//     icon: Brain,
//     title: "Analyze",
//     description: "Compare against policy",
//     detail: "Check for 50+ risk patterns and red flags",
//   },
//   {
//     icon: FileCheck,
//     title: "Decide",
//     description: "Get your recommendation",
//     detail: "Safe, Review, or High Risk with reasoning",
//   },
//   {
//     icon: Zap,
//     title: "Act",
//     description: "Sign or request changes",
//     detail: "Export report or get suggested rewrites",
//   },
// ]

// export function HowItWorksHorizontal() {
//   const containerRef = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   })

//   const stepCount = steps.length

//   // Adjusted horizontal movement:
//   // We move by (card width + gap) for each step to keep the "active" card centered.
//   const x = useSpring(
//     useTransform(
//       scrollYProgress,
//       [0, 1],
//       ["0vw", `-${(stepCount - 1) * 45}vw`]
//     ),
//     { stiffness: 100, damping: 30 }
//   )

//   return (
//     <section ref={containerRef} className="relative h-[600vh] bg-muted/30">
//       <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
//         <div className="container mx-auto mb-12 px-6 text-center">
//           <h2 className="text-4xl font-bold">
//             From upload to decision
//             <br />
//             <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
//               in {stepCount} simple steps
//             </span>
//           </h2>
//         </div>

//         <div className="relative flex items-center">
//           {/* <div className="absolute top-1/2 right-0 left-0 h-[2px] bg-border/40" /> */}

//           <motion.div style={{ x }} className="flex items-center px-[37.5vw]">
//             {steps.map((step, index) => {
//               const start = index / stepCount
//               const end = (index + 1) / stepCount

//               return (
//                 <div key={index} className="flex items-center">
//                   {/* Connector: Only shows if it's not the first card */}
//                   {index !== 0 && (
//                     <Connector
//                       progress={scrollYProgress}
//                       // Connector fills in the gap BEFORE the card's active range
//                       range={[start - 0.1, start]}
//                     />
//                   )}

//                   <Card
//                     step={step}
//                     index={index}
//                     progress={scrollYProgress}
//                     range={[start, end]}
//                   />
//                 </div>
//               )
//             })}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function Card({ step, index, progress, range }) {
//   // Clamped range to prevent the "non-decreasing" error
//   const safeStart = Math.max(0, range[0])
//   const safeEnd = Math.min(1, range[0] + 0.05)

//   // Scale and Y animation only trigger when we enter the card's range
//   const scale = useTransform(progress, [safeStart, safeEnd], [0.8, 1])
//   const y = useTransform(progress, [safeStart, safeEnd], [20, 0])

//   // Fade in card as it approaches
//   const opacityStart = Math.max(0, safeStart - 0.05)
//   const opacity = useTransform(progress, [opacityStart, safeStart], [0.3, 1])
//   // const height = useTransform(progress, [opacityStart, safeStart], [80, 400])
//   const height = useTransform(progress, [safeStart, safeEnd], [75, 400])

//   // Detail text appears after the card has expanded
//   const detailOpacity = useTransform(
//     progress,
//     [safeEnd, safeEnd + 0.05],
//     [0, 1]
//   )

//   return (
//     //     <motion.div
//     //       style={{ scale, height, opacity }}
//     //       className="w-[25vw] min-w-[260px] border border-sky-700/40 rounded-sm p-6 bg-white"
//     //     >
//     //       <div className="flex items-center gap-3 mb-4 border-b pb-4">
//     //         <div className="border border-sky-700 px-2 py-1 text-sm text-sky-700">
//     //           {number}
//     //         </div>
//     //         <h3 className="text-lg italic text-sky-700">{title}</h3>
//     //       </div>

//     //       <motion.p style={{ opacity: contentOpacity }} className="text-sm text-gray-600">
//     //         We align early on the problem, constraints, and decision flow.
//     //       </motion.p>

//     //       <motion.div
//     //         style={{ opacity: contentOpacity }}
//     //         className="mt-6 h-40 flex items-center justify-center"
//     //       >
//     //         <div className="w-32 h-32 border border-sky-700/40 rounded-full" />
//     //       </motion.div>
//     //     </motion.div>
//     <motion.div
//       style={{ height }}
//       className="w-[25vw] min-w-[260px] overflow-hidden rounded-sm border border-sky-700/40 bg-white p-6"
//     >
//       <div className="mb-4 flex items-center gap-3 border-b pb-4">
//         <div className="border border-sky-700 px-2 py-1 text-sm text-sky-700">
//           {index + 1}
//         </div>
//         <h3 className="text-lg text-sky-700 italic">{step.title}</h3>
//       </div>
//       <motion.div
//         className="flex h-full w-full flex-col"
//         style={{ opacity: opacity }}
//       >
//         <motion.p className="text-sm text-gray-600">
//           We align early on the problem, constraints, and decision flow.
//         </motion.p>
//         <div className="mt-2 mb-6 h-full w-full flex-1 flex-shrink-0 items-center justify-center bg-white">
//           <div className="flex h-14 h-full w-14 w-full items-center justify-center rounded-2xl">
//             <step.icon className="h-10 w-10 text-primary" />
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }

// function Connector({ progress, range }) {
//   const width = useTransform(progress, [range[0], range[1]], ["0%", "100%"])

//   return (
//     <div className="flex w-[10vw] items-center px-0">
//       <div className="relative h-[10px] w-full bg-border">
//         <motion.div
//           style={{ width }}
//           className="absolute top-0 left-0 h-full bg-primary"
//         />
//       </div>
//     </div>
//   )
// }
