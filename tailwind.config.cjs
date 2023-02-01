/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      colors:{
        aliceblue: '#f0f8ff',
        bgForm: '#242424',
        bgButtons: '#FFC632',
        buttonLetterColor: '#473404',
        iconsColor: '#AFB6C2'
      },
       fontFamily:{
        'primary': ['Poppins']
       }
    },
  },
  plugins: [],
}
