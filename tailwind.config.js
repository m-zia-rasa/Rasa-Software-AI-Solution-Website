const cv =
  (name) =>
  ({ opacityValue }) =>
    opacityValue === undefined
      ? `var(${name})`
      : `color-mix(in srgb, var(${name}) calc(${opacityValue} * 100%), transparent)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      // CSS variables hold plain hex values, so Tailwind cannot apply opacity modifiers
      // (bg-primary/10, border-border/60 ...) on its own. cv() adds that support via color-mix.
      colors: {
        background: { DEFAULT: cv("--background") },
        foreground: { DEFAULT: cv("--foreground") },
        primary: { DEFAULT: cv("--primary"), foreground: cv("--primary-foreground") },
        secondary: { DEFAULT: cv("--secondary"), foreground: cv("--secondary-foreground") },
        accent: { DEFAULT: cv("--accent"), foreground: cv("--accent-foreground") },
        muted: { DEFAULT: cv("--muted"), foreground: cv("--muted-foreground") },
        card: { DEFAULT: cv("--card"), foreground: cv("--card-foreground") },
        border: { DEFAULT: cv("--border") },
        input: { DEFAULT: cv("--input") },
        ring: { DEFAULT: cv("--ring") },
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        sm: "calc(var(--radius) - 0.25rem)",
        md: "var(--radius)",
        lg: "calc(var(--radius) + 0.25rem)",
        xl: "calc(var(--radius) + 0.5rem)",
        "2xl": "calc(var(--radius) + 0.75rem)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        rtl: ["var(--font-rtl)", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        marquee: "marquee 32s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
