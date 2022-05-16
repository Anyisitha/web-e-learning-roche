module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#E54416",
        white: {
          "default": "#fff",
          "750": "#ffffff75"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
