/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#212020",
        paper: "#ffffff",
        "paper-soft": "#fbfaf7",
      },
      fontFamily: {
<<<<<<< HEAD
        sans: ["var(--font-body)", "Arial", "sans-serif"],
        body: ["var(--font-body)", "Arial", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"],
        signature: ["var(--font-heading)", "Georgia", "serif"],
=======
        sans: ["var(--font-body)", "Montserrat", "Arial", "sans-serif"],
        body: ["var(--font-body)", "Montserrat", "Arial", "sans-serif"],
        heading: ["var(--font-heading)", "Georgia", "serif"],
        signature: ["TheSignature", "var(--font-heading)", "Georgia", "serif"],
>>>>>>> 2d6eb76f69f0291814239226cf6a87de1ab040d6
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
