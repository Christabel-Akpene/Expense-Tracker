/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        heading_font: ["Montserrat_700Bold"],
        text_font: ["Montserrat_400Regular"],
      },
    },
  },
  plugins: [],
};

