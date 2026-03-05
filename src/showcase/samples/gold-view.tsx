"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { X, CircleDot, MessageSquare, Search, Plus } from "lucide-react"

export function GoldViewMobile() {
  return (
    <div className="flex flex-col h-full">
      {/* Modal header */}
      <div className="flex items-center justify-between px-4 py-3">
        <button className="h-10 w-10 flex items-center justify-center">
          <X className="h-5 w-5 text-foreground" />
        </button>
        <h2 className="text-sm font-semibold">Hackathon App</h2>
        <div className="w-10" />
      </div>

      <div className="flex-1 px-4 flex flex-col">
        {/* Gold display area */}
        <div className="flex-1 flex flex-col items-center justify-center py-6">
          <p className="text-3xl font-serif italic text-[hsl(43,50%,60%)] mb-4">Your Gold</p>
          <div className="relative w-full max-w-xs mb-3">
            <div className="h-20 w-full rounded-lg bg-gradient-to-b from-[hsl(43,70%,55%)] via-[hsl(43,60%,45%)] to-[hsl(43,50%,35%)] flex items-center justify-center shadow-[0_8px_32px_hsl(43,60%,30%/0.4)]">
              <span className="text-3xl font-semibold text-white drop-shadow-sm">$0</span>
            </div>
            {/* Glow reflection */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-[hsl(43,60%,45%/0.25)] blur-xl rounded-full" />
          </div>
          <p className="text-sm text-muted-foreground mt-2">0.00 PAXG</p>
        </div>

        {/* Buy Gold card */}
        <Card className="mb-4 rounded-2xl">
          <CardContent className="p-5 space-y-3">
            <p className="text-sm font-semibold text-center">Buy Gold</p>
            <div className="flex items-baseline justify-center">
              <span className="text-5xl font-light">$</span>
              <span className="text-6xl font-light text-muted-foreground">0</span>
              <span className="w-0.5 h-12 bg-foreground/50 ml-0.5 animate-pulse" />
            </div>
            <p className="text-xs text-muted-foreground text-center tracking-wide">0 GOLD</p>
            <Separator />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Available Digital Dollar</span>
              <span>$0</span>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Button className="w-full h-12 rounded-xl bg-[hsl(43,50%,60%)] hover:bg-[hsl(43,50%,52%)] text-black font-medium mb-3">
          Buy Gold
        </Button>

        <button className="flex items-center justify-center gap-2 text-sm text-muted-foreground py-2 mb-2">
          <Plus className="h-4 w-4" />
          Pin App to Home Screen
        </button>
      </div>

      {/* Bottom nav */}
      <div className="border-t">
        <div className="flex items-center justify-around py-2">
          <NavItem icon={<CircleDot className="h-5 w-5" />} label="Polkadot" />
          <NavItem icon={<MessageSquare className="h-5 w-5" />} label="Chats" active />
          <NavItem icon={<Search className="h-5 w-5" />} label="Search" />
        </div>
      </div>
    </div>
  )
}

export function GoldViewDesktop() {
  return (
    <div className="flex h-full min-h-[540px]">
      {/* Left — Gold display */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 border-r">
        <p className="text-4xl font-serif italic text-[hsl(43,50%,60%)] mb-6">Your Gold</p>
        <div className="relative w-full max-w-sm mb-4">
          <div className="h-28 w-full rounded-xl bg-gradient-to-b from-[hsl(43,70%,55%)] via-[hsl(43,60%,45%)] to-[hsl(43,50%,35%)] flex items-center justify-center shadow-[0_12px_48px_hsl(43,60%,30%/0.4)]">
            <span className="text-4xl font-semibold text-white drop-shadow-sm">$0</span>
          </div>
          {/* Glow reflection */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[hsl(43,60%,45%/0.25)] blur-xl rounded-full" />
        </div>
        <p className="text-sm text-muted-foreground mt-2">0.00 PAXG</p>
      </div>

      {/* Right — Buy form */}
      <div className="w-96 p-8 flex flex-col shrink-0">
        <h2 className="text-lg font-semibold mb-6">Buy Gold</h2>

        <Card className="mb-6 rounded-2xl">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-baseline justify-center">
              <span className="text-5xl font-light">$</span>
              <span className="text-6xl font-light text-muted-foreground">0</span>
              <span className="w-0.5 h-12 bg-foreground/50 ml-1 animate-pulse" />
            </div>
            <p className="text-sm text-muted-foreground text-center tracking-wide">0 GOLD</p>
            <Separator />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Available Digital Dollar</span>
              <span className="font-medium">$0</span>
            </div>
          </CardContent>
        </Card>

        <Button className="w-full h-12 rounded-xl bg-[hsl(43,50%,60%)] hover:bg-[hsl(43,50%,52%)] text-black font-medium mb-4">
          Buy Gold
        </Button>

        <button className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <Plus className="h-4 w-4" />
          Pin App to Home Screen
        </button>
      </div>
    </div>
  )
}

function NavItem({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-0.5 px-4 py-1 ${active ? "text-foreground" : "text-muted-foreground"}`}>
      {icon}
      <span className="text-caption10">{label}</span>
    </div>
  )
}
