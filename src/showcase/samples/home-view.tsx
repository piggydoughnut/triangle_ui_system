"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PolkadotLogo } from "@/components/ui/icons"
import { MobileShell } from "@/showcase/mobile-shell"

function MdIcon({ name, size = 24 }: { name: string; size?: number }) {
  return (
    <span className="material-icons-round" style={{ fontSize: size }}>
      {name}
    </span>
  )
}

const schedule = [
  { title: "Web 3, Authenticity and...", time: "11:10 - 12:00" },
  { title: "IPFS for Verifiable (D...", time: "11:10 - 12:00" },
  { title: "IPFS for Verifiable (D)A...", time: "11:10 - 12:00" },
  { title: "Collator protocol & cen...", time: "11:10 - 12:00" },
  { title: "Beyond Uptime: Enterpr...", time: "11:10 - 12:00" },
  { title: "The wild world of Web3 ...", time: "11:10 - 12:00" },
  { title: "The wild world of Web3 ...", time: "11:10 - 12:00" },
]

function ScheduleItem({ title, time, small }: { title: string; time?: string; small?: boolean }) {
  return (
    <div className="pl-2 py-0.5 break-inside-avoid border-l-2 border-l-white/[0.12] bg-white/[0.02]">
      <p className={small ? "text-caption10 @md:text-xs truncate font-inter text-white/[0.69]" : "text-xs @md:text-sm truncate text-white/[0.69]"}>{title}</p>
      {time && <p className="text-caption10 @md:text-xs text-white/[0.48]">{time}</p>}
    </div>
  )
}

export function HomeView() {
  return (
    <MobileShell url="polkadot.com">
      {/* App Store banner — mobile only */}
      <div className="flex @md:hidden items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <PolkadotLogo size={28} />
          <div>
            <p className="text-sm font-semibold leading-tight">Polkadot</p>
            <p className="text-xs font-normal leading-[18px] font-inter text-white/[0.48]">Instruments for Individuality</p>
          </div>
        </div>
        <Button variant="secondary" size="sm" className="text-xs font-bold">
          Get App
        </Button>
      </div>

      {/* Desktop header — desktop only */}
      <div className="hidden @md:block p-8 pb-0">
        <h1 className="text-h3 font-serif font-normal mb-1">Home</h1>
        <p className="text-muted-foreground">Your dashboard at a glance.</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto px-4 @md:px-8 pt-4 @md:pt-6 space-y-3 @md:space-y-6 pb-[100px] @md:pb-8">
        {/* Event card + App tiles: stacked on mobile, grid on desktop */}
        <div className="@md:grid @md:grid-cols-3 @md:gap-6 space-y-3 @md:space-y-0">
          {/* Event card */}
          <Card className="bg-card @md:col-span-2 overflow-hidden rounded-3xl">
            <div className="h-10 flex items-center px-4 bg-white text-ink-secondary">
              <h3 className="text-sm font-semibold">Web3 Summit 2026</h3>
            </div>
            <CardContent className="p-4 @md:p-6 space-y-3 @md:space-y-4">
              <div className="flex gap-3 @md:gap-6">

                {/* Schedule flowing into two columns */}
                <div className="flex-1 min-w-0 columns-2 gap-x-4 @md:gap-x-6 space-y-1 @md:space-y-1">
                  {/* Date */}
                  <div className="mb-3">
                    <div className="text-2xl @md:text-4xl font-bold leading-none">18</div>
                    <div className="text-xs @md:text-sm text-muted-foreground">July</div>
                  </div>
                  {schedule.map((item, i) => (
                    <ScheduleItem key={i} {...item} />
                  ))}
                  <ScheduleItem title="3 more events" time="" small />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sub-label — mobile only */}
          <p className="text-xs text-white text-center @md:hidden mt-2">Web3 Summit</p>
          {/* App tiles — 2 col grid on mobile, stacked column on desktop */}
          <div className="grid grid-cols-2 @md:grid-cols-1 gap-3 @md:gap-4">
            {/* Notes tile */}
            <div>
              <Card className="overflow-hidden w-[164px] @md:w-full h-[164px] flex flex-col rounded-3xl">
                <div className="h-10 flex items-center px-3 gap-2 bg-yellow">
                  <span className="text-sm font-semibold text-ink-secondary">Notes</span>
                </div>
                <div className="p-3 gap-2 flex-1 flex flex-col justify-end relative bg-cream">
                  <span className="text-2xl @md:text-lg font-serif leading-tight text-ink-secondary">
                    <span className="@md:hidden">New<br />Note</span>
                    <span className="hidden @md:inline">New Note</span>
                  </span>
                  {/* Decorative fold */}
                  <div className="absolute right-0 bottom-0 w-[64px] h-[81px] rounded-md rounded-tr-none rounded-bl-none bg-white" />
                  <div
                    className="absolute right-0 bottom-0 w-0 h-0 rounded-md rounded-bl-none"
                    style={{
                      borderLeft: "64px solid transparent",
                      borderBottom: "81px solid #e7e5e4",
                    }}
                  />
                </div>
              </Card>
              <p className="text-xs text-muted-foreground text-center mt-1.5">HackM3</p>
            </div>

            {/* Terminal tile */}
            <div>
              <div className="w-[164px] @md:w-full h-[164px] rounded-3xl bg-silver overflow-hidden">
                {/* Header */}
                <div className="h-10 flex items-center px-3 gap-2">
                  <span className="text-sm font-inter font-semibold leading-5 text-ink-secondary flex-1">Terminal</span>
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <span className="material-icons-round text-ink" style={{ fontSize: 14 }}>point_of_sale</span>
                  </div>
                </div>
                {/* Content area */}
                <div className="mx-1 rounded-[22px] bg-white flex flex-col items-center justify-center gap-1 h-[120px]">
                  <div className="flex items-center gap-0.5">
                    <span className="font-inter font-semibold text-5xl leading-[58px] text-ink">$</span>
                    <div className="w-0.5 h-12 bg-ink" />
                    <span className="font-inter font-semibold text-5xl leading-[58px] text-ink-muted">0</span>
                  </div>
                  <p className="text-xs font-inter leading-[18px] text-ink-secondary text-center">Payment Amount</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-1.5">Terminal</p>
            </div>
          </div>
        </div>

      </div>
    </MobileShell>
  )
}

// Aliases for samples page compatibility
export const HomeViewMobile = HomeView
export const HomeViewDesktop = HomeView
