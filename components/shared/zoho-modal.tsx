"use client"

import { useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"

interface ZohoModalProps {
  open: boolean
  onClose: () => void
}

export function ZohoModal({ open, onClose }: ZohoModalProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoaded = useRef(false)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [open, handleKeyDown])

  useEffect(() => {
    if (!open) return

    const loadZoho = () => {
      if (window.Bookings?.inlineEmbed) {
        window.Bookings.inlineEmbed({
          url: "https://lexonai.zohobookings.com/portal-embed#/4944556000000033048",
          parent: "#zoho-modal-container",
          height: "650px",
        })
        return
      }

      if (scriptLoaded.current) return

      const script = document.createElement("script")
      script.src = "https://bookings.nimbuspop.com/assets/embed.js"
      script.async = true
      script.onload = () => {
        scriptLoaded.current = true
        if (window.Bookings?.inlineEmbed) {
          window.Bookings.inlineEmbed({
            url: "https://lexonai.zohobookings.com/portal-embed#/4944556000000033048",
            parent: "#zoho-modal-container",
            height: "650px",
          })
        }
      }
      document.body.appendChild(script)
    }

    const timer = setTimeout(loadZoho, 100)
    return () => clearTimeout(timer)
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative z-10 flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div>
                <h2 className="text-lg font-bold">Book a Demo</h2>
                <p className="text-sm text-muted-foreground">
                  Choose a time that works for you
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Zoho Embed */}
            <div
              id="zoho-modal-container"
              ref={containerRef}
              className="h-[650px] w-full overflow-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
