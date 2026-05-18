"use client"

import { useEffect, useState } from "react"
import { CALENDLY } from "@/lib/constants"

interface CalendlyEmbedProps {
  prefillName?: string
  prefillEmail?: string
}

export function CalendlyEmbed({
  prefillName = "",
  prefillEmail = "",
}: CalendlyEmbedProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const calendlyUrl = new URL(CALENDLY.url)
  if (prefillName) {
    calendlyUrl.searchParams.set("name", prefillName)
  }
  if (prefillEmail) {
    calendlyUrl.searchParams.set("email", prefillEmail)
  }

  return (
    <div className="h-[700px] w-full overflow-hidden rounded-xl border-2 border-border">
      {isMounted && (
        <iframe
          src={calendlyUrl.toString()}
          className="h-full w-full"
          title="Schedule a Demo"
        />
      )}
    </div>
  )
}