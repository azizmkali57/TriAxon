/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#7EE787",
          "green-dim": "#4CAF50",
          "green-glow": "rgba(126,231,135,0.15)",
        },
        dark: {
          950: "#050A0E",
          900: "#0A1628",
          800: "#0D1F3C",
          700: "#112545",
          600: "#1A3456",
        },
        surface: {
          card: "rgba(255,255,255,0.04)",
          "card-hover": "rgba(255,255,255,0.07)",
          border: "rgba(255,255,255,0.08)",
        },
        text: {
          primary: "#F0F6FF",
          secondary: "#8BA3C7",
          muted: "#4A6080",
        },
      },
    },
  },
  plugins: [],
};

export default config;