/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        periWinkle: "#9d7cce",
      },

      fontFamily: {
        lexend: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
