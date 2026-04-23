/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#212020",
        paper: "#ffffff",
        "paper-soft": "#fbfaf7",
        "rustic-red": "#832F23",
      },
      fontFamily: {
        sans: ["var(--font-body)", "Arial", "sans-serif"],
        body: ["var(--font-body)", "Arial", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        signature: ["var(--font-heading)", "Georgia", "serif"],
        // Demo Fonts
        allison: ["var(--font-allison)", "cursive"],
        samarata: ["var(--font-satisfy)", "cursive"], // Proxy
        paragraph: ["var(--font-mr-de-haviland)", "cursive"], // Proxy
        vistachopers: ["var(--font-kalam)", "cursive"], // Proxy
        gustera: ["var(--font-monsieur-la-doulaise)", "cursive"], // Proxy
        gwathlyn: ["var(--font-sacramento)", "cursive"], // Proxy
        breakline: ["var(--font-great-vibes)", "cursive"], // Proxy
      },
      fontSize: {
        // Standard Typography System
        "h1-hero": ["clamp(3rem, 10vw, 7rem)", { lineHeight: "0.92", letterSpacing: "0.02em" }],
        "h2-section": ["clamp(2.2rem, 8vw, 5.5rem)", { lineHeight: "1.1", letterSpacing: "0.03em" }],
        "h3-title": ["clamp(1.5rem, 4vw, 2.4rem)", { lineHeight: "1.2", letterSpacing: "0.02em" }],
        "body-lg": ["clamp(1rem, 1.5vw, 1.25rem)", { lineHeight: "1.6" }],
        "body-base": ["clamp(0.875rem, 1vw, 1rem)", { lineHeight: "1.6" }],
        "label-xs": ["0.65rem", { lineHeight: "1.2", letterSpacing: "0.28em" }],
      },
      spacing: {
        "section-py": "6rem", // 24 in tailwind
        "section-px": "1.5rem", // 6 in tailwind
        "section-px-md": "3rem", // 12 in tailwind
        "section-px-lg": "5rem", // 20 in tailwind
      },
      keyframes: {
        draw: {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        draw: "draw 2.8s ease forwards",
      },
    },
  },
  plugins: [],
};
