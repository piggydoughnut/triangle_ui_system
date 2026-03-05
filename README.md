# Triangle UI

A portable component library for Polkadot projects, built with Tailwind CSS, Radix UI, and CSS variables.

## Getting Started

```bash
npm install
npm run dev       # Development server at localhost:3000
npm run build     # Production build
npm run lint      # ESLint
```

## Project Structure

```
src/
├── components/          # Portable component library (copy this folder)
│   ├── ui/              # 20+ UI components
│   ├── styles/
│   │   ├── globals.css          # CSS variables (light + dark themes)
│   │   └── tailwind-preset.css  # Tailwind v4 theme (design tokens, animations, dark mode)
│   └── lib/
│       └── utils.ts             # cn() utility (clsx + tailwind-merge)
├── app/                 # Next.js showcase app
└── showcase/            # Component demo pages
```

## Using Components in Another Project

The `src/components/` folder is designed to be copied into other projects. Here's how to integrate it:

### 1. Install dependencies

```bash
npm install clsx tailwind-merge class-variance-authority tw-animate-css material-icons lucide-react
npm install -D tailwindcss@^4 @tailwindcss/postcss@^4
```

Radix UI primitives (install only what you need):

```bash
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-select @radix-ui/react-tabs @radix-ui/react-tooltip @radix-ui/react-popover @radix-ui/react-switch @radix-ui/react-toggle @radix-ui/react-avatar @radix-ui/react-label @radix-ui/react-separator @radix-ui/react-slot
```

### 2. Copy the components folder

Copy `src/components/` into your project.

### 3. Configure PostCSS

In your `postcss.config.mjs`:

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

No `tailwind.config.js` is needed — Tailwind v4 uses CSS-first configuration.

### 4. Import everything in your global CSS

In your global CSS file:

```css
@import "tailwindcss";
@import "./path/to/components/styles/tailwind-preset.css";
@import "./path/to/components/styles/globals.css";
@import "material-icons/iconfont/round.css";
```

The preset CSS file includes the full design system (colors, typography, shadows, animations, dark mode variant) and `tw-animate-css`. The globals CSS provides light/dark theme variables and base styles.

### 5. Set up fonts

The preset expects three CSS custom properties for font families. In Next.js, set them when loading fonts:

```tsx
const dmSans = DM_Sans({ variable: "--font-sans-face", ... })
const dmSerif = DM_Serif_Display({ variable: "--font-serif-face", ... })
const jetbrainsMono = JetBrains_Mono({ variable: "--font-mono-face", ... })
```

The `-face` suffix avoids collisions with Tailwind v4's `--font-sans`/`--font-serif`/`--font-mono` theme namespace.

### 6. Set up dark mode

Add the `dark` class to your `<html>` element to enable dark mode. The CSS variables will switch automatically.

## Components

| Component | File | Dependencies |
|-----------|------|-------------|
| Alert | `alert.tsx` | — |
| Avatar | `avatar.tsx` | `@radix-ui/react-avatar` |
| Badge | `badge.tsx` | `class-variance-authority` |
| Button | `button.tsx` | `@radix-ui/react-slot`, `class-variance-authority` |
| Card | `card.tsx` | — |
| Dialog | `dialog.tsx` | `@radix-ui/react-dialog`, `lucide-react` |
| Dropdown Menu | `dropdown-menu.tsx` | `@radix-ui/react-dropdown-menu` |
| Icon Box | `icon-box.tsx` | `class-variance-authority` |
| Input | `input.tsx` | — |
| Label | `label.tsx` | `@radix-ui/react-label`, `class-variance-authority` |
| Popover | `popover.tsx` | `@radix-ui/react-popover` |
| Search Bar | `search-bar.tsx` | `material-icons` |
| Select | `select.tsx` | `@radix-ui/react-select`, `lucide-react` |
| Separator | `separator.tsx` | `@radix-ui/react-separator` |
| Skeleton | `skeleton.tsx` | — |
| Switch | `switch.tsx` | `@radix-ui/react-switch` |
| Tabs | `tabs.tsx` | `@radix-ui/react-tabs` |
| Textarea | `textarea.tsx` | — |
| Toggle | `toggle.tsx` | `@radix-ui/react-toggle`, `class-variance-authority` |
| Tooltip | `tooltip.tsx` | `@radix-ui/react-tooltip` |

## Design Tokens

All colors are defined as CSS variables and mapped through the Tailwind preset:

- `background` / `foreground` — page background and text
- `primary` / `primary-foreground` — primary actions
- `secondary` / `secondary-foreground` — secondary surfaces
- `muted` / `muted-foreground` — subdued elements
- `accent` / `accent-foreground` — brand accent (Polkadot pink)
- `card` / `card-foreground` — card surfaces
- `popover` / `popover-foreground` — popover surfaces
- `destructive` / `destructive-foreground` — error/danger states
- `success` / `success-foreground` — success states
- `warning` / `warning-foreground` — warning states
- `overlay` — modal/dialog overlays
- `border`, `input`, `ring` — borders, inputs, focus rings

## Fonts

The preset expects three CSS font variables (with `-face` suffix to avoid Tailwind v4 namespace collisions):

- `--font-sans-face` — Body text (e.g., DM Sans)
- `--font-serif-face` — Headlines (e.g., DM Serif Display)
- `--font-mono-face` — Code (e.g., JetBrains Mono)
