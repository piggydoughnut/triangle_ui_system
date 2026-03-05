"use client"

import { useState } from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/components/lib/utils"

interface DeviceFrameProps {
  type: "mobile" | "desktop"
  children: React.ReactNode
  className?: string
  defaultTheme?: "light" | "dark"
}

export function DeviceFrame({ type, children, className, defaultTheme = "dark" }: DeviceFrameProps) {
  const [theme, setTheme] = useState<"light" | "dark">(defaultTheme)
  const isDark = theme === "dark"

  const toggle = (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-8 w-8 rounded-lg inline-flex items-center justify-center border border-grey-300 dark:border-grey-700 bg-card text-foreground hover:bg-secondary transition-colors"
      aria-label="Toggle preview theme"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )

  if (type === "mobile") {
    return (
      <div className={cn("relative mx-auto flex flex-col", className)}>
        {/* Toggle above frame */}
        <div className="flex justify-center mb-3">{toggle}</div>

        {/* Phone bezel */}
        <div className={cn(
          "relative w-[375px] rounded-[3rem] border-[8px] overflow-hidden shadow-xl flex flex-col flex-1",
          isDark ? "border-grey-600 bg-[hsl(0,0%,4%)]" : "border-grey-300 bg-[hsl(30,11%,98%)]"
        )}>
          {/* Status bar */}
          <div className={cn(
            "flex items-center justify-between px-6 pt-3 pb-1",
            isDark ? "bg-[hsl(0,0%,4%)]" : "bg-[hsl(30,11%,98%)]"
          )}>
            <span className={cn("text-xs font-semibold", isDark ? "text-white" : "text-grey-900")}>9:41</span>
            <div className="flex items-center gap-1">
              <svg className={cn("w-4 h-3", isDark ? "text-white" : "text-grey-900")} fill="currentColor" viewBox="0 0 24 18"><path d="M1 9l2-2c5-5 13-5 18 0l2 2-3 3c-4-4-10-4-14 0L1 9z" opacity=".3"/><path d="M5 13l2-2c3-3 7-3 10 0l2 2-3 3c-2-2-4-2-6 0l-3-3z" opacity=".6"/><path d="M9 17l3-3 3 3a4 4 0 01-6 0z"/></svg>
              <svg className={cn("w-6 h-3", isDark ? "text-white" : "text-grey-900")} fill="currentColor" viewBox="0 0 28 14"><rect x="0" y="2" width="22" height="10" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/><rect x="2" y="4" width="18" height="6" rx="1" fill="currentColor"/><rect x="23" y="5" width="2" height="4" rx="1" fill="currentColor" opacity=".4"/></svg>
            </div>
          </div>

          {/* Content area — scoped dark/light class */}
          <div className={cn("flex-1", isDark ? "dark" : "light")}>
            <div className="h-full bg-background text-foreground @container">
              {children}
            </div>
          </div>

          {/* Home indicator */}
          <div className={cn(
            "flex justify-center py-2",
            isDark ? "bg-[hsl(0,0%,4%)]" : "bg-[hsl(30,11%,98%)]"
          )}>
            <div className={cn("w-32 h-1 rounded-full", isDark ? "bg-white/20" : "bg-grey-900/20")} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("relative flex flex-col", className)}>
      {/* Toggle above frame */}
      <div className="flex justify-center mb-3">{toggle}</div>

      {/* Desktop browser chrome */}
      <div className={cn(
        "rounded-xl border overflow-hidden shadow-xl w-full flex-1 flex flex-col",
        isDark ? "border-grey-700 bg-[hsl(0,0%,4%)]" : "border-grey-300 bg-[hsl(30,11%,98%)]"
      )}>
        {/* Title bar */}
        <div className={cn(
          "flex items-center gap-2 px-4 py-2.5 border-b",
          isDark ? "border-grey-800 bg-[hsl(0,0%,9%)]" : "border-grey-200 bg-white"
        )}>
          <div className="flex gap-1.5">
            <div className={cn("w-3 h-3 rounded-full", isDark ? "bg-grey-600" : "bg-grey-300")} />
            <div className={cn("w-3 h-3 rounded-full", isDark ? "bg-grey-600" : "bg-grey-300")} />
            <div className={cn("w-3 h-3 rounded-full", isDark ? "bg-grey-600" : "bg-grey-300")} />
          </div>
          <div className="flex-1 mx-8">
            <div className={cn(
              "h-7 rounded-md flex items-center justify-center",
              isDark ? "bg-[hsl(0,0%,15%)]" : "bg-grey-100"
            )}>
              <span className={cn("text-xs", isDark ? "text-grey-400" : "text-grey-500")}>polkadot.com/search</span>
            </div>
          </div>
        </div>

        {/* Content area — scoped dark/light class */}
        <div className={cn("flex-1", isDark ? "dark" : "light")}>
          <div className="h-full bg-background text-foreground @container">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
