/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/custumers/*.liquid",
    "./templates/*liquid",
  ],
  theme: {
    extend: {
      fontFamily: {
        instrument: ["Instrument Serif", "serif"],
        syne: ["Syne", "sans-serif"],
      },
      colors: {
        custom: "#5C584F",
        backgroudColor: "#B8AF9E",
        buttonColor: "#E6E1D8",
      },
    },
  },
  plugins: [],
};
