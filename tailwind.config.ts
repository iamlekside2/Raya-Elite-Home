import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette — navy + gold (from the Raya Elite logo), cream neutrals.
        // NB: token names kept (clay/sage) to avoid churn; clay now = brand navy,
        // sage now = brand gold.
        paper: "#FAF6EF", // primary cream background
        "paper-2": "#F3ECE0", // alt warm section background
        sand: "#F1E9DA", // deeper sand band
        cream: "#FFFDF9", // card surface
        ink: "#11233B", // deep navy-ink text
        "ink-soft": "#5A6472", // muted slate body text
        clay: "#002147", // primary accent — brand NAVY
        "clay-deep": "#0A3262",
        "clay-tint": "#DEE5EF",
        sage: "#C9A84C", // secondary accent — brand GOLD
        "sage-deep": "#9A7D2E",
        "sage-tint": "#F5E6CA",
        gold: "#C9A84C", // brand gold highlight (stars)
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
