"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CtaSection } from "@/components/sections/cta-section"
import { ZohoEmbed } from "@/components/shared/zoho-embed"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  CheckCircle,
  Mail,
  Calendar,
  Users,
  HelpCircle,
  MessageSquare,
} from "lucide-react"
import { Turnstile } from "@marsidev/react-turnstile"

const INQUIRY_TYPES = [
  { value: "demo", label: "Demo Request", icon: Calendar },
  { value: "pricing", label: "Pricing Question", icon: Mail },
  { value: "partnership", label: "Partnership", icon: Users },
  { value: "other", label: "Other", icon: HelpCircle },
]

function ContactForm() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const turnstileRef = useRef<any>(null)
  const searchParams = useSearchParams()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  })
  const [honeypot, setHoneypot] = useState("")
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"message" | "demo">("message")

  useEffect(() => {
    const tab = searchParams.get("activeTab")
    if (tab === "demo") {
      setActiveTab("demo")
    }
  }, [searchParams])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!captchaToken) {
      setError("Please complete the security check.")
      return
    }

    if (
      !formData.name ||
      !formData.email ||
      !formData.inquiryType ||
      !formData.message
    ) {
      setError("Please fill in all required fields.")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          honeypot,
          token: captchaToken,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        setSuccess(true)
      } else {
        setError(data.error || "Something went wrong. Please try again.")
        turnstileRef.current?.reset()
        setCaptchaToken(null)
      }
    } catch (err) {
      console.log("Error submitting contact form:", err)
      setError("Network error. Please check your connection.")
      turnstileRef.current?.reset()
      setCaptchaToken(null)
    } finally {
      setLoading(false)
    }
  }

  const selectedInquiry = INQUIRY_TYPES.find(
    (t) => t.value === formData.inquiryType
  )
  const SelectedIcon = selectedInquiry?.icon || HelpCircle

  return (
    <>
      <main
        ref={containerRef}
        className="relative min-h-screen bg-background px-6 py-32"
      >
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="mb-12 text-center">
              <motion.div
                className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                <span className="text-sm font-medium text-primary">
                  Contact Us
                </span>
              </motion.div>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground">
                Ready to transform your NDA review process? Let&apos;s talk.
              </p>
            </div>

            {/* Tabs */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/30 p-1">
                <button
                  type="button"
                  onClick={() => setActiveTab("message")}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all",
                    activeTab === "message"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <MessageSquare className="h-4 w-4" />
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("demo")}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all",
                    activeTab === "demo"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Calendar className="h-4 w-4" />
                  Book a Demo
                </button>
              </div>
            </div>

            {/* Success State */}
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-chart-2/5 p-12">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h2 className="mb-4 text-2xl font-bold">Message Sent!</h2>
                  <p className="mb-6 text-muted-foreground">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSuccess(false)}
                    variant="outline"
                    className="rounded-full"
                  >
                    Send Another Message
                  </Button>
                </Card>
              </motion.div>
            ) : activeTab === "demo" ? (
              /* Calendly Embed */
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-2 border-border p-6 md:p-8">
                  <h2 className="mb-6 text-xl font-bold text-center">
                    Schedule a Demo
                  </h2>
                  <p className="mb-6 text-center text-muted-foreground">
                    Choose a time that works best for you.
                  </p>
                  <ZohoEmbed
                    prefillName={formData.name}
                    prefillEmail={formData.email}
                  />
                </Card>
              </motion.div>
            ) : (
              /* Contact Form */
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-2 border-border p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot */}
                    <input
                      type="text"
                      name="honeypot"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {/* Name & Email */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company{" "}
                        <span className="text-xs text-muted-foreground">
                          (optional)
                        </span>
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Inquiry Type <span className="text-destructive">*</span>
                      </label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) =>
                          handleSelectChange("inquiryType", value)
                        }
                        required
                      >
                        <SelectTrigger className="w-full py-5">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {INQUIRY_TYPES.map((type) => {
                            const Icon = type.icon
                            return (
                              <SelectItem key={type.value} value={type.value}>
                                <div className="flex items-center gap-2">
                                  <Icon className="h-4 w-4" />
                                  {type.label}
                                </div>
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your needs..."
                        rows={5}
                        required
                      />
                    </div>

                    {/* Turnstile Captcha */}
                    <div className="flex justify-center">
                      <Turnstile
                        ref={turnstileRef}
                        siteKey={
                          process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
                          "1x00000000000000000000AA"
                        }
                        onSuccess={(token) => setCaptchaToken(token)}
                        onExpire={() => setCaptchaToken(null)}
                        onError={() => setCaptchaToken(null)}
                        options={{ theme: "auto" }}
                      />
                    </div>

                    {/* Error Message */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-center text-sm text-destructive"
                      >
                        {error}
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <div className="flex justify-center">
                      <Button
                        type="submit"
                        disabled={loading || !captchaToken}
                        size="lg"
                        className={cn(
                          "rounded-full px-8 py-6 text-lg",
                          selectedInquiry?.value === "demo" &&
                            "bg-gradient-to-r from-primary to-chart-2"
                        )}
                      >
                        {loading ? (
                          "Sending..."
                        ) : (
                          <>
                            {selectedInquiry?.value === "demo" ? (
                              <>
                                <Calendar className="mr-2 h-5 w-5" />
                                Book a Demo
                              </>
                            ) : (
                              <>
                                <Mail className="mr-2 h-5 w-5" />
                                Send Message
                              </>
                            )}
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </Card>
              </motion.div>
            )}

            {/* Trust Indicators */}
            <motion.div
              className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>No sales pressure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Direct access to the team</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      {/* CTA Footer */}
      <CtaSection />
    </>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background px-6 py-32" />}>
      <ContactForm />
    </Suspense>
  )
}
