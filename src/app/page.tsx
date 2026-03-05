import Link from "next/link"
import { registry } from "@/lib/registry"
import { DocsShell } from "@/showcase/docs-shell"
import { CodeBlock } from "@/showcase/code-block"

const installSteps = [
  {
    step: "1",
    title: "Copy the components folder",
    code: "cp -r src/components/{ui,lib,styles} your-project/src/components/",
  },
  {
    step: "2",
    title: "Import the CSS variables",
    code: `// In your root layout or globals.css
import './components/styles/globals.css'`,
  },
  {
    step: "3",
    title: "Add the Tailwind preset",
    code: `// tailwind.config.js
module.exports = {
  presets: [require('./src/components/styles/tailwind-preset')],
  // ...
}`,
  },
  {
    step: "4",
    title: "Install dependencies",
    code: `npm install clsx tailwind-merge class-variance-authority lucide-react @radix-ui/react-{slot,dialog,popover,select,switch,toggle,tabs,tooltip,dropdown-menu,avatar,label,separator}`,
  },
]

export default function Home() {
  return (
    <DocsShell>
      <div className="space-y-12">
        {/* Title */}
        <div>
          <h1 className="text-h2 font-serif font-normal mb-3">Introduction</h1>
          <p className="text-muted-foreground text-body-lg max-w-prose">
            A portable, mobile-first component library built on shadcn patterns with Polkadot branding.
            Copy the <code className="text-sm bg-secondary px-1.5 py-0.5 rounded">components/</code> folder
            into your project and start building.
          </p>
        </div>

        {/* Getting Started */}
        <section>
          <h2 className="text-h4 font-serif font-normal mb-6">Getting Started</h2>
          <div className="space-y-6">
            {installSteps.map((s) => (
              <div key={s.step} className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center">
                    {s.step}
                  </span>
                  <h3 className="text-sm font-medium">{s.title}</h3>
                </div>
                <div className="ml-9">
                  <CodeBlock code={s.code} language="bash" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What's included */}
        <section>
          <h2 className="text-h4 font-serif font-normal mb-3">What&apos;s Included</h2>
          <p className="text-sm text-muted-foreground mb-4">
            {registry.length} components ready to use. Click any to see examples and props.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {registry.map((c) => (
              <Link
                key={c.slug}
                href={`/components/${c.slug}`}
                className="rounded-lg border px-3 py-2 text-sm hover:bg-secondary transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Portability */}
        <section>
          <h2 className="text-h4 font-serif font-normal mb-3">Portability</h2>
          <p className="text-sm text-muted-foreground mb-4 max-w-prose">
            The portable deliverable is everything inside <code className="bg-secondary px-1.5 py-0.5 rounded">src/components/</code>:
          </p>
          <CodeBlock
            code={`src/components/
  ui/           # All component files
  lib/
    utils.ts    # cn() utility
  styles/
    globals.css          # CSS variables (light + dark themes)
    tailwind-preset.js   # Tailwind preset: colors, typography, shadows, animations`}
            language="bash"
          />
          <p className="text-sm text-muted-foreground mt-4 max-w-prose">
            Components use <code className="bg-secondary px-1.5 py-0.5 rounded">@/components/lib/utils</code> internally.
            Adjust your <code className="bg-secondary px-1.5 py-0.5 rounded">tsconfig</code> paths or do a find-replace
            if your alias differs.
          </p>
        </section>

        {/* Customization */}
        <section>
          <h2 className="text-h4 font-serif font-normal mb-3">Customization</h2>
          <p className="text-sm text-muted-foreground max-w-prose">
            Since you own the source files, customize anything directly. Change CSS variables in{" "}
            <code className="bg-secondary px-1.5 py-0.5 rounded">globals.css</code> for theme-wide changes,
            add new variants in the CVA configs, or override styles via <code className="bg-secondary px-1.5 py-0.5 rounded">className</code> props.
            Every component forwards <code className="bg-secondary px-1.5 py-0.5 rounded">className</code> and
            uses <code className="bg-secondary px-1.5 py-0.5 rounded">tailwind-merge</code> so your overrides always win.
          </p>
        </section>
      </div>
    </DocsShell>
  )
}
