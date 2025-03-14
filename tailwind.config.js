/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#4a9eff',
        dark: {
          DEFAULT: '#0a0a0a',
          lighter: '#1a1a1a',
        }
      }
    },
  },
  plugins: [],
}