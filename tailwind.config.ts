import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./*.html",
    "./js/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#0A0A0A",
          pure: "#000000",
          surface: "#121212",
          elevated: "#181818",
          border: "#262626",
          borderLight: "#333333",
        },
        burgundy: {
          deep: "#180407",
          DEFAULT: "#2A080C",
          light: "#3A0B10",
          border: "#4A1118",
        },
        gold: {
          DEFAULT: "#E4B276",
          hover: "#D8A05E",
          light: "#F0CFA7",
          border: "rgba(228, 178, 118, 0.25)",
        },
        white: {
          DEFAULT: "#FFFFFF",
          muted: "#E5E5E5",
          dim: "#A3A3A3",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          "ui-monospace",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
