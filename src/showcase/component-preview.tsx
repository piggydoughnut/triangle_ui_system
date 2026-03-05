"use client"

import { useState } from "react"
import { CodeBlock } from "./code-block"
import { cn } from "@/components/lib/utils"

interface ComponentPreviewProps {
  children: React.ReactNode
  code: string
  className?: string
}

export function ComponentPreview({ children, code, className }: ComponentPreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview")

  return (
    <div className={cn("rounded-lg border", className)}>
      <div className="flex border-b">
        <button
          onClick={() => setTab("preview")}
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors",
            tab === "preview"
              ? "border-b-2 border-primary text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Preview
        </button>
        <button
          onClick={() => setTab("code")}
          className={cn(
            "px-4 py-2 text-sm font-medium transition-colors",
            tab === "code"
              ? "border-b-2 border-primary text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Code
        </button>
      </div>
      {tab === "preview" ? (
        <div className="p-6 flex flex-wrap items-start gap-4">{children}</div>
      ) : (
        <CodeBlock code={code} />
      )}
    </div>
  )
}
