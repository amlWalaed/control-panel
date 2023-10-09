/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': {
          DEFAULT: '#873CEF',
          '50': '#f6f3ff',
          '100': '#eee9fe',
          '200': '#dfd6fe',
          '300': '#c8b4fe',
          '400': '#ac8afb',
          '500': '#925bf7',
          '600': '#873cef',
          '700': '#7626db',
          '800': '#6320b7',
          '900': '#521c96',
          '950': '#320f66',
      },
      'secondary': {
        '50': '#f5f6fa',
        '100': '#ebedf3',
        '200': '#d2d7e5',
        '300': '#abb5ce',
        '400': '#7e8eb2',
        '500': '#5d6f9a',
        '600': '#495780',
        '700': '#3c4768',
        '800': '#353e57',
        '900': '#333a50',
        '950': '#202331',
    },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
        },
      },
    },
  },
  plugins: [],
}