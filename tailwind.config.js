/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu"],
      },
      colors: {
        crimson: "#DC143C",
      },
      screens: {
        "2xl": "1330px",
      },
    },
  },
  plugins: [],
};
