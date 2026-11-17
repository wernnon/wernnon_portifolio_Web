import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          darkest: "#120305",
          deep: "#1A0508",
          DEFAULT: "#2A080C",
          light: "#3E0D13",
          glow: "#5E121C",
          border: "#4A1118",
        },
        sand: {
          light: "#F7E5CF",
          DEFAULT: "#E4B276",
          dark: "#C69355",
          muted: "#9D7442",
        },
        obsidian: {
          deepest: "#070A0F",
          DEFAULT: "#0B0F17",
          panel: "#101522",
          card: "#141A29",
          elevated: "#1B2236",
          border: "#242D45",
          borderSubtle: "rgba(228, 178, 118, 0.12)",
        },
        crimson: {
          DEFAULT: "#DC2626",
          dark: "#B91C1C",
          glow: "#EF4444",
        },
        emerald: {
          DEFAULT: "#10B981",
          dark: "#059669",
          glow: "#34D399",
        },
      },
      fontFamily: {
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
        sans: [
          "Inter",
          "Plus Jakarta Sans",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "radial-burgundy":
          "radial-gradient(circle at center, rgba(94, 18, 28, 0.45) 0%, rgba(42, 8, 12, 0.9) 65%, #0B0F17 100%)",
        "radial-sand":
          "radial-gradient(circle at center, rgba(228, 178, 118, 0.18) 0%, transparent 70%)",
        "grid-pattern":
          "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
