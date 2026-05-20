import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        steel: "#3f3f46",
        concrete: "#f4f4f5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
      },
      boxShadow: {
        line: "inset 0 0 0 1px rgba(17,17,17,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
