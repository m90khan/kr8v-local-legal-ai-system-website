"use client"
import { useEffect, useState } from "react"
import { motion } from "motion/react"
import {
  AlertTriangle,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
  XCircle,
} from "lucide-react"

import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface BlockingIssue {
  clauseId: string
  reason: string
  policyRef?: string
  policyTitle?: string
  evidence?: Array<{
    chunk_id: string
    displayLabel?: string
    text: string
  }>
}

interface DocumentHeaderProps {
  safetyScore: number
  decision: "APPROVE" | "REJECT" | "REVIEW"
  confidence: number
  blockingIssues: BlockingIssue[]
  suggestedActions: string[]
}

export function DocumentHeaderSection({
  safetyScore,
  decision,
  confidence,
  blockingIssues,
  suggestedActions,
}: DocumentHeaderProps) {
  const [displayScore, setDisplayScore] = useState(safetyScore)

  useEffect(() => {
    // Animate score change
    const start = displayScore
    const end = safetyScore
    const duration = 800
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      const current = Math.round(start + (end - start) * eased)
      setDisplayScore(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [safetyScore])

  const decisionStyles = {
    APPROVE: "border-emerald-500/30 bg-emerald-500/5",
    REJECT: "border-red-500/30 bg-red-500/5",
    REVIEW: "border-amber-500/30 bg-amber-500/5",
  }

  const decisionLabels = {
    APPROVE: "Approved",
    REJECT: "Rejected",
    REVIEW: "Under Review",
  }

  const confidenceReasons = [
    `${blockingIssues.length} blocking issues evaluated`,
    "policy conflicts still influence recommendation",
    `${suggestedActions.length} recommended next steps`,
  ]

  return (
    <Card className="h-full rounded-2xl border-2 border-border bg-card shadow-lg ring-0 backdrop-blur-sm">
      {/* HEADER */}
      <CardHeader className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        {/* LEFT */}
        <div className="w-full space-y-1">
          <p className="text-xs tracking-wide text-muted-foreground uppercase">
            Document
          </p>
          <h1 className="mt-1 text-xl font-semibold">
            Acme_Vendor_Agreement_2024.pdf
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <motion.span
              key={decision}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
                decision === "APPROVE" &&
                  "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                decision === "REJECT" &&
                  "bg-red-500/10 text-red-600 dark:text-red-400",
                decision === "REVIEW" &&
                  "bg-amber-500/10 text-amber-600 dark:text-amber-400"
              )}
            >
              {decision === "APPROVE" && <CheckCircle2 className="size-3" />}
              {decision === "REJECT" && <XCircle className="size-3" />}
              {decision === "REVIEW" && <ShieldAlert className="size-3" />}
              {decisionLabels[decision]}
            </motion.span>
            <span>·</span>
            <span>Dec 15, 2024</span>
          </div>
          <div className="mt-3 flex w-full flex-1 items-center justify-between gap-10">
            <div className="mr-auto inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">
                Safety score:{" "}
                <motion.span
                  key={displayScore}
                  className={cn(
                    displayScore >= 90
                      ? "text-emerald-500"
                      : displayScore >= 70
                        ? "text-amber-500"
                        : "text-red-500"
                  )}
                >
                  {displayScore}%
                </motion.span>
              </span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" disabled>
                <CheckCircle2 className="mr-2 size-4" />
                Approve
              </Button>
              <Button size="sm" variant="secondary" disabled>
                <ShieldAlert className="mr-2 size-4" />
                Review
              </Button>
              <Button size="sm" variant="destructive" disabled>
                <XCircle className="mr-2 size-4" />
                Reject
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>

      {/* DECISION ENGINE */}
      <CardContent>
        <motion.div
          key={decision}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          className={cn(
            "rounded-xl border p-4",
            decisionStyles[decision] || decisionStyles.REVIEW
          )}
        >
          {/* TOP */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs tracking-wide text-muted-foreground uppercase">
                Decision Engine
              </p>
              <motion.p
                key={decision}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-sm font-semibold"
              >
                {decision === "APPROVE"
                  ? "Approved - Ready to sign"
                  : decision === "REJECT"
                    ? "Rejected - Action required"
                    : "Under Review - Needs attention"}
              </motion.p>
            </div>
            <Badge variant="ghost" className="text-lg font-medium">
              {confidence}%
            </Badge>
          </div>

          {/* JUSTIFICATION */}
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {decision === "APPROVE"
              ? "This agreement aligns with company policy and approved standards. All critical clauses have been validated and no blocking issues remain."
              : "This agreement contains multiple critical policy violations including unlimited liability exposure and missing termination provisions. The contract cannot proceed without substantial revisions."}
          </p>

          {/* CONFIDENCE BREAKDOWN */}
          <div className="mt-4 rounded-md border bg-background/70 p-3">
            <div className="flex items-center gap-2 text-xs tracking-wide text-muted-foreground uppercase">
              <Sparkles className="size-3.5" />
              Confidence breakdown
            </div>
            <p className="mt-2 text-sm font-medium">
              Recommendation Confidence: {confidence}%
            </p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              {confidenceReasons.map((reason) => (
                <li key={reason}>- {reason}</li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-muted-foreground">
              Analysis Confidence: 92%
            </p>
          </div>

          {/* NEXT STEPS */}
          <div className="mt-4 rounded-md border bg-background/70 p-3">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">
              Next steps
            </p>
            <ol className="mt-2 space-y-1 text-sm text-foreground/90">
              {suggestedActions.slice(0, 4).map((action, index) => (
                <li key={`${action}-${index}`}>
                  {index + 1}. {action}
                </li>
              ))}
            </ol>
          </div>

          {/* BLOCKING ISSUES */}
          {blockingIssues.length > 0 && (
            <div className="mt-4 space-y-2">
              {blockingIssues.map((issue) => (
                <div
                  key={`${issue.clauseId}-${issue.reason}`}
                  className="rounded-md border bg-background px-3 py-2 text-sm"
                >
                  {issue.reason}
                  {issue.policyRef && (
                    <span className="ml-2 text-xs text-muted-foreground">
                      ({issue.policyRef}
                      {issue.policyTitle ? ` · ${issue.policyTitle}` : ""})
                    </span>
                  )}
                  {issue.evidence?.length ? (
                    <div className="mt-2 space-y-2 rounded-md border border-blue-500/20 bg-blue-500/5 p-2">
                      <p className="text-xs tracking-wide text-blue-700 uppercase dark:text-blue-300">
                        Evidence
                      </p>
                      {issue.evidence.slice(0, 2).map((citation) => (
                        <div
                          key={`${issue.clauseId}-${citation.chunk_id}`}
                          className="text-xs text-foreground/80"
                        >
                          <p className="font-semibold">
                            {citation.displayLabel ?? citation.chunk_id}
                          </p>
                          <p>{citation.text}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  <div className="mt-2 flex items-center gap-2 text-xs text-amber-600 dark:text-amber-300">
                    <AlertTriangle className="size-3.5" />
                    This issue still blocks approval or requires legal override.
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </CardContent>
    </Card>
  )
}
