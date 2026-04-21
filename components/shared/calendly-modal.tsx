"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"
import { CALENDLY } from "@/lib/constants"

interface CalendlyModalProps {
  isOpen: boolean
  onClose: () => void
  prefillName?: string
  prefillEmail?: string
}

export function CalendlyModal({
  isOpen,
  onClose,
  prefillName = "",
  prefillEmail = "",
}: CalendlyModalProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const calendlyUrl = new URL(CALENDLY.url)
  if (prefillName) {
    calendlyUrl.searchParams.set("name", prefillName)
  }
  if (prefillEmail) {
    calendlyUrl.searchParams.set("email", prefillEmail)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 h-[90vh] w-[90vw] max-w-4xl overflow-hidden rounded-2xl border-2 border-border bg-card shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 rounded-full bg-muted/80 p-2 transition-colors hover:bg-muted"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Calendly Embed */}
            {isMounted && (
              <div className="h-full w-full">
                <iframe
                  src={calendlyUrl.toString()}
                  className="h-full w-full"
                  title="Schedule a Demo"
                />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
