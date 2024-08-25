/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    fontFamily:{
      "font": ['"Manrope", sans-serif']
    },
    extend: {
      colors:{
        'primary-cl': "FD6F00",
      },
      spacing:{
        '500':"500px",
        '300':'400px'
      },
    },
  },
  plugins: [],
}

