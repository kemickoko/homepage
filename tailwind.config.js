/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#6366F1', // Indigo-500
          dark: '#4F46E5',
          light: '#EEF2FF',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

