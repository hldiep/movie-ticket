/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#1d2044",
        bar: "#1d2021",
        icon: "#181a1b"
      },
      keyframes:{
        button_hover: {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' },
        }
      },
      animation:{
        buttonHover: "button_hover 1s ease-in-out infinite",
      }
    },
  },
  plugins: [],
}

