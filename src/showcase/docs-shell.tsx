"use client"

import { SidebarNav, type NavGroup } from "@/showcase/sidebar-nav"
import { ThemeToggle } from "@/showcase/theme-toggle"
import { registry } from "@/lib/registry"

const blockSlugs = ["icon-box", "search-bar"]

const navGroups: NavGroup[] = [
  {
    items: [
      { title: "Introduction", href: "/" },
      { title: "Icons", href: "/icons" },
      { title: "Sample Views", href: "/samples" },
    ],
  },
  {
    label: "Blocks",
    items: [...registry]
      .filter((c) => blockSlugs.includes(c.slug))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((c) => ({ title: c.name, href: `/components/${c.slug}` })),
  },
  {
    label: "Components",
    items: [...registry]
      .filter((c) => !blockSlugs.includes(c.slug))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((c) => ({ title: c.name, href: `/components/${c.slug}` })),
  },
]

export function DocsShell({ children, wide }: { children: React.ReactNode; wide?: boolean }) {
  return (
    <div className="flex min-h-screen">
      <SidebarNav groups={navGroups} />
      <div className="flex-1 min-w-0">
        <header className="sticky top-0 z-30 flex items-center justify-end border-b bg-background/80 backdrop-blur-sm px-6 py-3">
          <ThemeToggle />
        </header>
        <main className={wide ? "p-6 md:p-10" : "p-6 md:p-10 max-w-4xl"}>{children}</main>
      </div>
    </div>
  )
}
