# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Triangle UI — a portable component library for the Polkadot ecosystem. Built with Next.js 16, Tailwind CSS 3, Radix UI primitives, and class-variance-authority (CVA). The `src/components/` folder is designed to be copied wholesale into other projects.

## Commands

```bash
npm run dev       # Dev server at localhost:3000
npm run build     # Production build
npm run lint      # ESLint (Next.js core-web-vitals + typescript)
```

No test runner is configured.

## Architecture

### Portable Component Library (`src/components/`)

This is the core deliverable — everything here must work when copied into another project:

- **`ui/`** — 20+ UI components built on Radix UI primitives, styled with CVA variants and `cn()` utility
- **`styles/globals.css`** — CSS custom properties defining light/dark theme tokens (HSL format). All colors are consumed via `hsl(var(--token-name))`
- **`styles/tailwind-preset.js`** — Tailwind preset that maps CSS variables to Tailwind classes and defines the full design system (typography scale, shadows, animations, brand colors). Consumer projects use this as a Tailwind preset
- **`lib/utils.ts`** — `cn()` helper combining `clsx` + `tailwind-merge`

### Showcase App (`src/app/`, `src/showcase/`, `src/lib/`)

A Next.js app that renders interactive documentation for each component:

- **`src/lib/registry.ts`** — Central registry defining every component's props, descriptions, and code examples. Component detail pages at `/components/[slug]` are driven entirely by this registry
- **`src/showcase/`** — Shared showcase UI: `ComponentPreview` (live render + code), `PropsTable`, `CodeBlock`, `DeviceFrame`, `MobileShell`, and sample views demonstrating components in realistic layouts
- **`src/app/components/[slug]/`** — Dynamic route using `generateStaticParams` from the registry
- **`src/app/samples/`** — Full-page sample compositions
- **`src/app/icons/`** — Icon gallery page

### Adding a New Component

1. Create the component in `src/components/ui/`
2. Add an entry to `src/lib/registry.ts` with props, description, and examples
3. The showcase page auto-generates from the registry

## Design System

- **Dark mode**: `class`-based (`dark` class on `<html>`). Theme persisted in `localStorage.theme`
- **Colors**: All semantic colors use HSL CSS variables (see `globals.css`). Accent color is Polkadot pink (`341 100% 58%`)
- **Typography**: Three font families — DM Sans (body, `--font-sans`), DM Serif Display (headlines, `--font-serif`), JetBrains Mono (code, `--font-mono`). Responsive type scale uses `clamp()` for `display-*`, `h1`–`h4`
- **Icons**: Material Icons (round variant) for UI icons, Lucide React for inline icons, custom SVG icons in `ui/icons/`
- **Shadows**: Named scale from `xs` to `xl` plus accent-colored shadows (`accent-sm/md/lg`) and focus rings (`focus`, `focus-strong`)
