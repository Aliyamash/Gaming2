/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ['./index.html'],
  theme: {
    fontFamily:{
      roya: ['roya']
    }, 
    extend: {
      lineHeight: {
        '0': '0'
      }
    },
  },
  plugins: [],
}

