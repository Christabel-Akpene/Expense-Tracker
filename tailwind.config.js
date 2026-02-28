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
      colors: {
        page: "#F7F9FC",
        section: "#EEF2F7",
        card: "#FFFFFF",
        text: {
          primary: "#1A2332",
          secondary: "#4A5568",
          muted: "#6B7A8D",
          inverse: "#FFFFFF",
        },
        brand: {
          DEFAULT: "#3B6CB7",
          pressed: "#2F5A9E",
          soft: "#E8EEF8",
        },
        success: {
          DEFAULT: "#2E7D5E",
          hover: "#256650",
          soft: "#E6F4EF",
        },
        error: {
          DEFAULT: "#C0392B",
          hover: "#A93226",
          soft: "#FAEAE8",
        },
        warning: {
          DEFAULT: "#B7791F",
          hover: "#9C6A1A",
          soft: "#FEF3E2",
        },
        border: {
          DEFAULT: "#DDE3ED",
          strong: "#B0BAC9",
        },
      },
    },
  },
  plugins: [],
};
