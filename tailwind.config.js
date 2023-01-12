/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown-black': '#282120',
        'milky-white': '#f9f9f9'
      },
    },
    screens: {
      'xxs': '300px',
      'xs': '390px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1800px',
      'sides': '900px'
    },
  },
  plugins: [],
}
