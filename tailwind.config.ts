import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#002147",
        "navy-deep": "#00152e",
        "navy-deepest": "#000c1c",
        "navy-light": "#0a3262",
        "navy-img": "#0a2c52",
        gold: "#C9A84C",
        "gold-text": "#9a7d2e",
        champagne: "#F5E6CA",
        "champagne-alt": "#f3ecdb",
        charcoal: "#2C2C2C",
        pearl: "#F8F6F3",
        emerald: "#1A5C38",
        "card-border": "#ece6da",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        lato: ["var(--font-lato)", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        container: "1240px",
      },
      boxShadow: {
        card: "0 8px 28px rgba(0,33,71,0.08)",
        "card-hover": "0 18px 46px rgba(0,33,71,0.14)",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "none" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp .8s ease both",
        fadeIn: "fadeIn .25s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
