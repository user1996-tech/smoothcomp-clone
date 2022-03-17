module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c1c1c",
        secondary: "#292929",
        third: "#2C3043",
        fourth: "#202838",
        xgreen: "#78B328",
        xblue: "#189DE0",
        xgrey: "#8D9799",
        xgrey2: "#F5F5F5",
        xorange: "#DC854B",
        xred: "#C24444",
      },
    },
  },
  plugins: [require("@mui/icons-material"), require("react-country-flag")],
};
