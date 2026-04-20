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
        sans: ["Montserrat", "Arial", "sans-serif"],
        signature: ["TheSignature", "Georgia", "serif"],
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
