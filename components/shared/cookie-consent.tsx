"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { COOKIE_CONSENT } from "@/lib/constants"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [preference, setPreference] = useState<"accepted" | "rejected" | null>(null)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT.cookieName)
    if (!consent) {
      setIsVisible(true)
    } else {
      setPreference(consent as "accepted" | "rejected")
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(
      COOKIE_CONSENT.cookieName,
      JSON.stringify({
        status: "accepted",
        timestamp: Date.now(),
      })
    )
    setPreference("accepted")
    setIsVisible(false)
    enableAnalyticsCookies()
  }

  const handleReject = () => {
    localStorage.setItem(
      COOKIE_CONSENT.cookieName,
      JSON.stringify({
        status: "rejected",
        timestamp: Date.now(),
      })
    )
    setPreference("rejected")
    setIsVisible(false)
    disableAnalyticsCookies()
  }

  const enableAnalyticsCookies = () => {
    // GA cookies will be set when Analytics script loads
    document.cookie = `cookie-consent-analytics=accepted; ${COOKIE_CONSENT.duration}; path=/`
  }

  const disableAnalyticsCookies = () => {
    // Block GA cookies by setting a blocking cookie
    document.cookie = `cookie-consent-analytics=rejected; ${COOKIE_CONSENT.duration}; path=/`
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 bottom-0 z-50 p-4"
      >
        <div className="relative overflow-hidden rounded-xl border border-border bg-card/95 shadow-2xl backdrop-blur-xl">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-chart-2/5 to-chart-3/5 opacity-50" />

          <div className="relative flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <h3 className="mb-2 text-lg font-bold">We value your privacy</h3>
              <p className="text-sm text-muted-foreground">
                We use cookies to improve your experience and analyze site traffic.
                By clicking &quot;Accept&quot;, you consent to our use of cookies.
                <Link
                  href="/privacy"
                  className="ml-1 text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  Read our Privacy Policy
                </Link>{" "}
                for more details.
              </p>
            </div>

            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReject}
                className="rounded-full"
              >
                Reject All
              </Button>
              <Button
                size="sm"
                onClick={handleAccept}
                className="rounded-full bg-gradient-to-r from-primary to-chart-2"
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
