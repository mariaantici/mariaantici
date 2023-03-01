/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",],
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
      '2xl': '1400px',
      '3xl': '1600px',
      'sides': '900px'
    },
  },
  plugins: [],
}
