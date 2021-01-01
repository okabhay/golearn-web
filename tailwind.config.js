
const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      brand: colors.teal[400],
      white: colors.white,
      green: colors.emerald,
      teal: colors.teal,
      orange: colors.orange,
      gray: colors.coolGray,
      black: colors.black,
      blue: colors.blue,
      red: colors.red,
      pink: colors.pink,
      menuBlack: '#1e1e21'
    },
    extend: {
      fontFamily: {
        sans: [
          'Roboto',
          '"Inter"',
          '"Segoe UI"',
        ],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
