import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefbfa",
          100: "#d3f3f0",
          200: "#a6e7e1",
          300: "#71d3cb",
          400: "#3fb6ac",
          500: "#1f9990",
          600: "#167a73",
          700: "#14625d",
          800: "#134f4b",
          900: "#0d3634",
        },
        ink: {
          900: "#0f1c1c",
          800: "#1a2b2b",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
