
const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      green: colors.emerald,
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
          '"Segoe UI"',
          'Roboto',
          '"Inter"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
