/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        'noelle-blue': '#012a48',
      },
      keyframes: {
        wipeEnter: {
          '0%' : {transform: 'scale(0, .025)'},
          '50%' : {transform: 'scale(1, .025)'},
        },
      },
      animation: {
        'wipe-enter': 'wipeEnter 2s ease-in-out 1',
      },
    },
  },
  plugins: [],
}
