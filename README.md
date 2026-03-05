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
│   │   └── tailwind-preset.js   # Tailwind preset with design tokens
│   └── lib/
│       └── utils.ts             # cn() utility (clsx + tailwind-merge)
├── app/                 # Next.js showcase app
└── showcase/            # Component demo pages
```

## Using Components in Another Project

The `src/components/` folder is designed to be copied into other projects. Here's how to integrate it:

### 1. Install dependencies

```bash
npm install clsx tailwind-merge class-variance-authority tailwindcss-animate material-icons lucide-react
```

Radix UI primitives (install only what you need):

```bash
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-select @radix-ui/react-tabs @radix-ui/react-tooltip @radix-ui/react-popover @radix-ui/react-switch @radix-ui/react-toggle @radix-ui/react-avatar @radix-ui/react-label @radix-ui/react-separator @radix-ui/react-slot
```

### 2. Copy the components folder

Copy `src/components/` into your project.

### 3. Add the Tailwind preset

In your `tailwind.config.js`:

```js
module.exports = {
  presets: [require('./path/to/components/styles/tailwind-preset')],
  content: [
    './path/to/components/**/*.{js,ts,jsx,tsx}',
    // ...your other content paths
  ],
}
```

The preset includes `tailwindcss-animate` as a plugin — no need to add it separately.

### 4. Import the CSS variables

In your global CSS file (before the `@tailwind` directives):

```css
@import "./path/to/components/styles/globals.css";
```

This provides all CSS variables for light/dark themes plus base styles (border colors, background, text color, font smoothing, and text selection).

### 5. Import Material Icons (required by SearchBar)

The `SearchBar` component uses Material Icons. Add the CSS import to your global stylesheet:

```css
@import "material-icons/iconfont/round.css";
```

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

The preset expects three CSS font variables:

- `--font-sans` — Body text (e.g., DM Sans)
- `--font-serif` — Headlines (e.g., DM Serif Display)
- `--font-mono` — Code (e.g., JetBrains Mono)
