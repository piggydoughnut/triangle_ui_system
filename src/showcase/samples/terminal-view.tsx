"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { X, Plus, Minus, Delete } from "lucide-react"

const numpadRows = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  [".", "0", "del"],
]

const operators = [
  { label: "+", icon: <Plus className="h-5 w-5" /> },
  { label: "-", icon: <Minus className="h-5 w-5" /> },
  { label: "×", icon: <X className="h-5 w-5" /> },
  { label: "÷", icon: <span className="text-lg font-light">÷</span> },
]

export function TerminalViewMobile() {
  return (
    <div className="flex flex-col h-full">
      {/* Modal header */}
      <div className="flex items-center justify-between px-4 py-3">
        <button className="h-10 w-10 flex items-center justify-center">
          <X className="h-5 w-5 text-foreground" />
        </button>
        <h2 className="text-sm font-semibold">Payment Terminal</h2>
        <div className="w-10" />
      </div>

      <div className="flex-1 px-4 flex flex-col">
        {/* Amount display */}
        <div className="py-6">
          <p className="text-xs text-muted-foreground mb-2">Enter Payment Amount</p>
          <div className="flex items-baseline">
            <span className="text-4xl font-light text-foreground">$</span>
            <span className="text-5xl font-light text-muted-foreground">0</span>
            <span className="w-0.5 h-10 bg-foreground/50 ml-0.5 animate-pulse" />
          </div>
        </div>

        <Separator className="mb-4" />

        {/* Operator row */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {operators.map((op) => (
            <Button key={op.label} variant="secondary" className="h-12 rounded-xl">
              {op.icon}
            </Button>
          ))}
        </div>

        {/* Numpad */}
        <div className="grid grid-cols-3 gap-2 flex-1">
          {numpadRows.map((row, ri) =>
            row.map((key) => (
              <Button
                key={`${ri}-${key}`}
                variant="secondary"
                className="h-14 rounded-xl text-lg font-normal"
              >
                {key === "del" ? <Delete className="h-5 w-5" /> : key}
              </Button>
            ))
          )}
        </div>

        {/* CTA */}
        <div className="py-4">
          <Button variant="secondary" className="w-full h-12 rounded-xl text-muted-foreground">
            Generate QR Code
          </Button>
        </div>
      </div>
    </div>
  )
}

export function TerminalViewDesktop() {
  return (
    <div className="flex h-full min-h-[540px]">
      {/* Left panel — amount */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 border-r">
        <p className="text-sm text-muted-foreground mb-4">Enter Payment Amount</p>
        <div className="flex items-baseline mb-6">
          <span className="text-6xl font-light text-foreground">$</span>
          <span className="text-7xl font-light text-muted-foreground">0</span>
          <span className="w-0.5 h-14 bg-foreground/50 ml-1 animate-pulse" />
        </div>
        <Button variant="accent" size="xl" className="w-full max-w-xs">
          Generate QR Code
        </Button>
      </div>

      {/* Right panel — keypad */}
      <div className="w-80 p-6 flex flex-col gap-4 shrink-0">
        <h2 className="text-sm font-semibold text-center">Payment Terminal</h2>

        {/* Operators */}
        <div className="grid grid-cols-4 gap-2">
          {operators.map((op) => (
            <Button key={op.label} variant="secondary" className="h-12 rounded-xl">
              {op.icon}
            </Button>
          ))}
        </div>

        {/* Numpad */}
        <div className="grid grid-cols-3 gap-2 flex-1">
          {numpadRows.map((row, ri) =>
            row.map((key) => (
              <Button
                key={`${ri}-${key}`}
                variant="secondary"
                className="h-14 rounded-xl text-lg font-normal"
              >
                {key === "del" ? <Delete className="h-5 w-5" /> : key}
              </Button>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
