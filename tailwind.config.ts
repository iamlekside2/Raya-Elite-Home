import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm boutique palette — paper, clay, sage, ink
        paper: "#FAF6EF", // primary cream background
        "paper-2": "#F3ECE0", // alt warm section background
        sand: "#EFE5D5", // deeper sand band
        cream: "#FFFDF9", // card surface
        ink: "#2E2A24", // warm near-black text
        "ink-soft": "#6B6258", // muted body text
        clay: "#C0603F", // primary accent (terracotta)
        "clay-deep": "#A04E33",
        "clay-tint": "#F0D9CE",
        sage: "#7A8867", // secondary accent (sage green)
        "sage-deep": "#5C6A4A",
        "sage-tint": "#DCE2D0",
        gold: "#D8A24A", // small warm highlight (stars only)
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        "4xl": "2rem",
        blob: "62% 38% 54% 46% / 52% 44% 56% 48%",
      },
      boxShadow: {
        soft: "0 18px 40px -24px rgba(46,42,36,0.35)",
        lift: "0 30px 60px -30px rgba(46,42,36,0.45)",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "none" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        rise: "rise .7s cubic-bezier(0.22,1,0.36,1) both",
        fadeIn: "fadeIn .25s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
