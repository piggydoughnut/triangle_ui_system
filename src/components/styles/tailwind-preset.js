/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        overlay: "hsl(var(--overlay))",
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        grey: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          925: "#151413",
          950: "#0f0f0f",
        },
        // Polkadot brand extended
        yellow: "#FFD552",
        cream: "#F5EDD8",
        silver: "#EBEBEB",
        ink: {
          DEFAULT: "#000000",
          secondary: "rgba(0, 0, 0, 0.66)",
          muted: "rgba(0, 0, 0, 0.24)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "Courier New", "monospace"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-1": ["clamp(4rem, 8vw + 2rem, 8rem)", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-2": ["clamp(3rem, 6vw + 1.5rem, 6rem)", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-3": ["clamp(2.5rem, 5vw + 1rem, 5rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        h1: ["clamp(2.5rem, 4vw + 1rem, 4rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        h2: ["clamp(2rem, 3vw + 0.75rem, 3rem)", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        h3: ["clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem)", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        h4: ["clamp(1.5rem, 2vw + 0.5rem, 2rem)", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "body-lg": ["clamp(1.125rem, 1vw + 0.5rem, 1.25rem)", { lineHeight: "1.625" }],
        base: ["1rem", { lineHeight: "1.625" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        caption10: ["0.625rem", { lineHeight: "1rem" }],
        label: ["0.75rem", { lineHeight: "1.3" }],
        code: ["0.875rem", { lineHeight: "1.7" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(0, 0, 0, 0.04)",
        sm: "0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)",
        DEFAULT: "0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)",
        md: "0 8px 24px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.04)",
        lg: "0 12px 40px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)",
        xl: "0 20px 60px rgba(0, 0, 0, 0.16), 0 8px 16px rgba(0, 0, 0, 0.08)",
        "brutal-hint": "2px 2px 0 0 rgba(0, 0, 0, 0.08)",
        "brutal-hint-lg": "3px 3px 0 0 rgba(0, 0, 0, 0.12)",
        focus: "0 0 0 4px rgba(255, 40, 103, 0.08)",
        "focus-strong": "0 0 0 4px rgba(255, 40, 103, 0.16)",
        "accent-sm": "0 2px 8px rgba(255, 40, 103, 0.2)",
        "accent-md": "0 4px 16px rgba(255, 40, 103, 0.3)",
        "accent-lg": "0 8px 32px rgba(255, 40, 103, 0.4)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
        spring: "cubic-bezier(0.19, 1, 0.22, 1)",
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        shimmer: "shimmer 1.5s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
