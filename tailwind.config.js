/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[app-theme="dark"]'],
  theme: {
    fontFamily: {
      'jost': ['Jost', 'ui-sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

