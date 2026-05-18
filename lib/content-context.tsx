"use client"

import { createContext, useContext, ReactNode } from "react"
import content from "../content.json"

type ContentContextType = typeof content

const ContentContext = createContext<ContentContextType | null>(null)

export function ContentProvider({ children }: { children: ReactNode }) {
  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  )
}

export function useContent() {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error("useContent must be used within ContentProvider")
  }
  return context
}

export function getContent() {
  return content
}