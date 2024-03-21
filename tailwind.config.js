/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato:["Lato","sans-serif"],
      },
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'pink': '#f9769d',
      'dark': '#171821',
      'middark': '#21222d',
      'purple': '#96a7ff',
    }
  },
  plugins: [],
}
