"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { CircleDot, MessageSquare, Search, MapPin, Calendar } from "lucide-react"

export function EventDetailViewMobile() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1">
        {/* Sub-header */}
        <div className="text-center py-3 text-sm text-muted-foreground">
          Web3 Summit
        </div>

        {/* Hero image placeholder */}
        <div className="h-44 bg-gradient-to-br from-secondary to-muted flex items-end p-4">
          <Badge className="bg-background/90 text-foreground border-0">
            Web3 Summit
          </Badge>
        </div>

        {/* Content */}
        <div className="px-4 pt-6 space-y-5">
          <h1 className="text-h2 font-serif font-normal leading-tight">
            Web3 Summit 2026
          </h1>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <Calendar className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">Sunday 16 November</p>
                <p className="text-sm text-muted-foreground">12:00 - 16:00</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">Locke de Santa Joana</p>
                <p className="text-sm text-muted-foreground">Lisboa, Portugal</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="border-t mt-auto">
        <div className="flex items-center justify-around py-2">
          <NavItem icon={<CircleDot className="h-5 w-5" />} label="Polkadot" active />
          <NavItem icon={<MessageSquare className="h-5 w-5" />} label="Chats" />
          <NavItem icon={<Search className="h-5 w-5" />} label="Search" />
        </div>
      </div>
    </div>
  )
}

export function EventDetailViewDesktop() {
  return (
    <div className="p-8 max-w-2xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground">
        Home / <span className="text-foreground">Web3 Summit</span>
      </div>

      {/* Hero image placeholder */}
      <div className="h-64 rounded-xl bg-gradient-to-br from-secondary to-muted flex items-end p-6">
        <Badge className="bg-background/90 text-foreground border-0 text-sm px-3 py-1">
          Web3 Summit
        </Badge>
      </div>

      {/* Title */}
      <h1 className="text-display-3 font-serif font-normal">
        Web3 Summit 2026
      </h1>

      <Separator />

      {/* Details */}
      <div className="grid grid-cols-2 gap-6">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
            <Calendar className="h-6 w-6 text-muted-foreground" />
          </div>
          <div>
            <p className="font-medium">Sunday 16 November</p>
            <p className="text-sm text-muted-foreground">12:00 - 16:00</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
            <MapPin className="h-6 w-6 text-muted-foreground" />
          </div>
          <div>
            <p className="font-medium">Locke de Santa Joana</p>
            <p className="text-sm text-muted-foreground">Lisboa, Portugal</p>
          </div>
        </div>
      </div>

      <Separator />

      <div className="flex gap-3">
        <Button size="lg" variant="accent">Get Tickets</Button>
        <Button size="lg" variant="outline">Share Event</Button>
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
