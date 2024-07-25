/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobil': '768px',
      'laptop': '992px',
      'desktop': '1280px',
    },
  },
  plugins: [],
}

