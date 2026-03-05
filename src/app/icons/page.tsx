"use client"

import { useState } from "react"
import { DocsShell } from "@/showcase/docs-shell"
import { TicketAppIcon, W3SIcon, PolkadotLogo } from "@/components/ui/icons"

function MdIcon({ name, size = 24 }: { name: string; size?: number }) {
  return (
    <span className="material-icons-round" style={{ fontSize: size }}>
      {name}
    </span>
  )
}

const productIcons = [
  { name: "ticket_app", componentName: "TicketAppIcon", icon: <TicketAppIcon size={24} /> },
  { name: "w3s", componentName: "W3SIcon", icon: <W3SIcon size={24} /> },
]

const uiIcons = [
  { fileName: "search" },
  { fileName: "chat_bubble" },
  { fileName: "format_list_bulleted" },
  { fileName: "electric_bolt" },
  { fileName: "toll" },
  { fileName: "star" },
  { fileName: "confirmation_number" },
  { fileName: "note_add" },
]

function CopyableIcon({ children, name, copyText }: { children: React.ReactNode; name: string; copyText: string }) {
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(copyText)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center gap-3 p-4 rounded-xl border hover:bg-secondary/50 transition-colors cursor-pointer relative"
    >
      <div className="h-11 w-11 rounded-xl bg-foreground flex items-center justify-center text-background p-1.5">
        {children}
      </div>
      <p className="text-xs text-muted-foreground font-mono">{name}</p>
      {copied && (
        <span className="absolute top-2 right-2 text-[10px] text-accent font-medium">
          Copied!
        </span>
      )}
    </button>
  )
}

export default function IconsPage() {
  return (
    <DocsShell>
      <div className="space-y-10">
        <div>
          <h1 className="text-h2 font-serif font-normal mb-3">Icons</h1>
          <p className="text-muted-foreground text-body-lg max-w-prose">
            Icon set used across the Triangle design system. Product icons live in{" "}
            <code className="text-sm bg-secondary px-1.5 py-0.5 rounded">components/ui/icons/</code>.
            UI icons use{" "}
            <a
              href="https://fonts.google.com/icons"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              Google Material Design Icons
            </a>{" "}
            (Round variant) via the{" "}
            <code className="text-sm bg-secondary px-1.5 py-0.5 rounded">material-icons</code> package.
            Click any icon to copy its name.
          </p>
        </div>

        {/* Product Icons */}
        <section>
          <h2 className="text-h4 font-serif font-normal mb-2">Product Icons</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-prose">
            Custom SVG icons for Polkadot products, wrapped as React components
            in <code className="text-xs bg-secondary px-1 py-0.5 rounded">components/ui/icons/</code>.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {productIcons.map((entry) => (
              <CopyableIcon key={entry.name} name={entry.name} copyText={`<${entry.componentName} size={24} />`}>
                {entry.icon}
              </CopyableIcon>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold mb-2">Usage</h3>
            <pre className="bg-secondary rounded-lg p-4 text-sm font-mono overflow-x-auto">
              {`import { TicketAppIcon } from "@/components/ui/icons"

<TicketAppIcon size={24} />`}
            </pre>
          </div>
        </section>

        {/* UI Icons */}
        <section>
          <h2 className="text-h4 font-serif font-normal mb-2">UI Icons</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-prose">
            General-purpose icons for navigation, actions, and UI chrome.
            Uses the <strong>Round</strong> variant of Material Design Icons via CSS font ligatures.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {uiIcons.map((entry) => (
              <CopyableIcon key={entry.fileName} name={entry.fileName} copyText={`<span className="material-icons-round">${entry.fileName}</span>`}>
                <MdIcon name={entry.fileName} size={24} />
              </CopyableIcon>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold mb-2">Usage</h3>
            <pre className="bg-secondary rounded-lg p-4 text-sm font-mono overflow-x-auto">
              {`<span className="material-icons-round">search</span>`}
            </pre>
          </div>
        </section>

        {/* Logos */}
        <section>
          <h2 className="text-h4 font-serif font-normal mb-2">Logos</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-prose">
            Brand logos as React SVG components. Use <code className="text-xs bg-secondary px-1 py-0.5 rounded">currentColor</code> for
            theme-aware rendering.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <CopyableIcon name="polkadot_logo" copyText={`<PolkadotLogo size={24} />`}>
              <PolkadotLogo size={24} />
            </CopyableIcon>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold mb-2">Usage</h3>
            <pre className="bg-secondary rounded-lg p-4 text-sm font-mono overflow-x-auto">
              {`import { PolkadotLogo } from "@/components/ui/icons"

<PolkadotLogo size={24} />`}
            </pre>
          </div>
        </section>
      </div>
    </DocsShell>
  )
}
