"use client"

import { useEffect, useRef } from "react"

interface ZohoEmbedProps {
  prefillName?: string
  prefillEmail?: string
}

declare global {
  interface Window {
    Bookings?: {
      inlineEmbed: (options: {
        url: string
        parent: string
        height?: string
      }) => void
    }
  }
}

export function ZohoEmbed({
  prefillName = "",
  prefillEmail = "",
}: ZohoEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Check if script already loaded
    if (window.Bookings?.inlineEmbed) {
      window.Bookings.inlineEmbed({
        url: "https://lexonai.zohobookings.com/portal-embed#/4948129000000036045",
        parent: "#zoho-embed-container",
        height: "700px",
      })
      return
    }

    // Create and load the script
    const script = document.createElement("script")
    script.src = "https://bookings.nimbuspop.com/assets/embed.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      if (window.Bookings?.inlineEmbed) {
        window.Bookings.inlineEmbed({
          url: "https://lexonai.zohobookings.com/portal-embed#/4948129000000036045",
          parent: "#zoho-embed-container",
          height: "700px",
        })
      }
    }

    return () => {
      // Don't remove script on unmount - it may be needed elsewhere
    }
  }, [])

  return (
    <div
      id="zoho-embed-container"
      ref={containerRef}
      className="h-[700px] w-full overflow-hidden rounded-xl border-2 border-border bg-card"
    />
  )
}
