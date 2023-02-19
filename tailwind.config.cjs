/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Raleway"', 'sans-serif']
      },
      colors: {
        'main-white':'#F1EEE9',
        'main-black':'#131313',
        'ligth-black':'#999999',
      },
    },
  },
  plugins: [],
}