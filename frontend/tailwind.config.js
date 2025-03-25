/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Indigo color for primary elements
        secondary: "#8B5CF6", // Purple color for secondary elements
        accent: "#06B6D4", // Cyan for accent elements
      },
      fontFamily: {
        sans: [
          'Reddit Sans',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
      },
    },
  },
  plugins: [],
}