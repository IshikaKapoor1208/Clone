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
        signature: ["var(--font-heading)", "Georgia", "serif"]
=======
        sans: ["Montserrat", "Arial", "sans-serif"],
        signature: ["TheSignature", "Georgia", "serif"],
>>>>>>> 8a94f3366c507a229a6db82a92e677e4672e2cf2
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
