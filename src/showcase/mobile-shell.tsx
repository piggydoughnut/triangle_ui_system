"use client"

import { PolkadotLogo } from "@/components/ui/icons"

function MdIcon({ name, size = 24 }: { name: string; size?: number }) {
  return (
    <span className="material-icons-round" style={{ fontSize: size }}>
      {name}
    </span>
  )
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center w-[60px] h-[52px] text-foreground">
      {icon}
      <span className="text-caption10 mt-0.5">{label}</span>
    </div>
  )
}

interface MobileShellProps {
  children: React.ReactNode
  url?: string
}

export function MobileShell({ children, url = "polkadot.com" }: MobileShellProps) {
  return (
    <div className="flex flex-col h-full">
      {children}

      {/* Bottom nav + Safari bar */}
      <div className="mt-auto @md:hidden">
        <div className="flex items-center justify-around border-t border-border/30 py-2">
          <NavItem icon={<PolkadotLogo size={24} />} label="Polkadot" />
          <NavItem icon={<MdIcon name="chat_bubble" size={24} />} label="Chats" />
          <NavItem icon={<MdIcon name="search" size={24} />} label="Search" />
        </div>

        {/* Safari URL bar */}
        <div style={{ paddingLeft: 26, paddingRight: 26, paddingTop: 10 }} className="pb-2">
          <div className="flex items-center gap-2 rounded-xl bg-[hsl(0,0%,15%)] px-3 py-1.5 text-xs text-muted-foreground">
            <span className="font-serif text-[11px]">AA</span>
            <div className="flex-1 text-center flex items-center justify-center gap-1">
              <MdIcon name="lock" size={12} />
              <span>{url}</span>
            </div>
            <MdIcon name="refresh" size={14} />
          </div>
        </div>
      </div>
    </div>
  )
}
