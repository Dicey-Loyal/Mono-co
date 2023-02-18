/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0d0e12",
        secondary: "#15181e",
        tertiary: "#E3E5E888",
        card: "#1a1d23",
        button: "#22262f",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};