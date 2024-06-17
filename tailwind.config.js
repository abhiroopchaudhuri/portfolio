/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'source-code': ['"Source Code Pro"', 'monospace'],
      },
      fontWeight: {
        'extra-light': 200,
        'light': 300,
        'regular': 400,
        'semi-bold': 600,
        'bold': 700,
        'black': 900
      },
    },
  },
  plugins: [],
}