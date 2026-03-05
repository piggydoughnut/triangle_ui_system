"use client"

import { DocsShell } from "@/showcase/docs-shell"
import { DeviceFrame } from "@/showcase/device-frame"
import { SearchViewMobile, SearchViewDesktop } from "@/showcase/samples/search-view"
import { HomeViewMobile, HomeViewDesktop } from "@/showcase/samples/home-view"
import { EventDetailViewMobile, EventDetailViewDesktop } from "@/showcase/samples/event-detail-view"
import { TerminalViewMobile, TerminalViewDesktop } from "@/showcase/samples/terminal-view"
import { SearchingViewMobile, SearchingViewDesktop } from "@/showcase/samples/searching-view"
import { GoldViewMobile, GoldViewDesktop } from "@/showcase/samples/gold-view"

const samples = [
  {
    title: "Search",
    description: "Product discovery screen using Input, Separator, and layout primitives. Mobile uses a stacked list; desktop expands to a sidebar + grid layout.",
    mobile: <SearchViewMobile />,
    desktop: <SearchViewDesktop />,
  },
  {
    title: "Searching",
    description: "Active search with inline results. Uses Input (search variant), Separator, and a filtered results list.",
    mobile: <SearchingViewMobile />,
    desktop: <SearchingViewDesktop />,
  },
  {
    title: "Home",
    description: "Dashboard with event card, schedule list, and app tiles. Uses Card, Badge, and Separator.",
    mobile: <HomeViewMobile />,
    desktop: <HomeViewDesktop />,
  },
  // {
  //   title: "Event Detail",
  //   description: "Event page with hero image, date/location info, and action buttons. Uses Badge, Button, and Separator.",
  //   mobile: <EventDetailViewMobile />,
  //   desktop: <EventDetailViewDesktop />,
  // },
  // {
  //   title: "Payment Terminal",
  //   description: "POS-style numpad for entering payment amounts. Uses Button (secondary), Separator, and grid layout.",
  //   mobile: <TerminalViewMobile />,
  //   desktop: <TerminalViewDesktop />,
  // },
  // {
  //   title: "Gold",
  //   description: "Buy Gold screen with balance display, purchase form, and CTA. Uses Card, Button, and Separator.",
  //   mobile: <GoldViewMobile />,
  //   desktop: <GoldViewDesktop />,
  // },
]

export default function SamplesPage() {
  return (
    <DocsShell wide>
      <div className="space-y-10">
        <div>
          <h1 className="text-h2 font-serif font-normal mb-3">Sample Views</h1>
          <p className="text-muted-foreground text-body-lg max-w-prose">
            Assembled screens showing how these components work together in real layouts.
            Each preview has its own theme toggle.
          </p>
        </div>

        {samples.map((sample) => (
          <section key={sample.title}>
            <h2 className="text-h4 font-serif font-normal mb-2">{sample.title}</h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-prose">
              {sample.description}
            </p>

            <div className="flex flex-col xl:flex-row gap-10 xl:items-stretch overflow-hidden">
              <div className="shrink-0 flex flex-col">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 text-center">
                  Mobile — 375px
                </h3>
                <DeviceFrame type="mobile" defaultTheme="dark" className="flex-1">
                  {sample.mobile}
                </DeviceFrame>
              </div>

              <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 text-center">
                  Desktop
                </h3>
                <DeviceFrame type="desktop" defaultTheme="dark" className="flex-1">
                  {sample.desktop}
                </DeviceFrame>
              </div>
            </div>
          </section>
        ))}
      </div>
    </DocsShell>
  )
}
