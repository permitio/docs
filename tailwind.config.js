/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.{md,mdx}"],
  darkMode: ["class", '[data-theme="dark"]'], // hooks into docusaurus' dark mode settings
  theme: {
    extend: {
      // Design tokens from src/css/tokens.scss, so MDX/Tailwind users get
      // theme-aware tokens instead of hex. Colours with an -rgb channel token
      // support Tailwind opacity modifiers (e.g. bg-pm-purple/10).
      colors: {
        pm: {
          purple: "rgb(var(--pm-purple-rgb) / <alpha-value>)",
          orange: "rgb(var(--pm-orange-rgb) / <alpha-value>)",
          link: "var(--pm-link)",
          // Fill for primary buttons; pair with text-pm-on-primary (AA in both themes).
          primary: "var(--ifm-color-primary)",
          "on-primary": "var(--pm-on-primary)",
          bg: "var(--pm-bg)",
          "surface-1": "var(--pm-surface-1)",
          "surface-2": "var(--pm-surface-2)",
          "surface-3": "var(--pm-surface-3)",
          text: "var(--pm-text)",
          "text-muted": "var(--pm-text-muted)",
          border: "var(--pm-border)",
          "border-strong": "var(--pm-border-strong)",
          "akita-coat": "var(--pm-akita-coat)",
          "akita-ink": "var(--pm-akita-ink)",
        },
      },
      borderRadius: {
        pm: "var(--pm-radius)",
      },
    },
  },
  plugins: [],
};
