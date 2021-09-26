module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#e63946",
        secondary: "#1d3557",
        tertiary: "#1d3557",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
