"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/components/lib/utils"

export interface NavGroup {
  label?: string
  items: { title: string; href: string }[]
}

interface SidebarNavProps {
  groups: NavGroup[]
}

export function SidebarNav({ groups }: SidebarNavProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile trigger */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden h-11 w-11 flex items-center justify-center rounded-lg bg-card border shadow-sm"
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 border-r bg-card p-6 overflow-y-auto transition-transform duration-200 md:sticky md:top-0 md:translate-x-0 md:z-auto",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="text-lg font-semibold text-foreground" onClick={() => setOpen(false)}>
            Triangle UI
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="md:hidden h-8 w-8 flex items-center justify-center rounded-md hover:bg-muted"
            aria-label="Close navigation"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="space-y-6">
          {groups.map((group, gi) => (
            <div key={gi}>
              {group.label && (
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 px-3">
                  {group.label}
                </h4>
              )}
              <div className="space-y-0.5">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm transition-colors",
                      pathname === item.href
                        ? "bg-secondary text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}
