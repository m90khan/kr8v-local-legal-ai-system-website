"use client"

import { useEffect, useState } from "react"
import { ZOHO_BOOKINGS } from "@/lib/constants"

interface ZohoEmbedProps {
  prefillName?: string
  prefillEmail?: string
}

export function ZohoEmbed({
  prefillName = "",
  prefillEmail = "",
}: ZohoEmbedProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const embedUrl = new URL(ZOHO_BOOKINGS.url)
  if (prefillName) {
    embedUrl.searchParams.set("name", prefillName)
  }
  if (prefillEmail) {
    embedUrl.searchParams.set("email", prefillEmail)
  }

  return (
    <div className="h-[700px] w-full overflow-hidden rounded-xl border-2 border-border">
      {isMounted && (
        <iframe
          src={embedUrl.toString()}
          className="h-full w-full"
          title="Schedule a Demo"
        />
      )}
    </div>
  )
}
