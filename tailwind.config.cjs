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
        button: "#0055BA",
        grey: "#f5f5f5",
        lightGray: "#606060",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
        dpsans: ["Duplicate Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
