/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      sm: "482px",
      md: "642px",
      lg: "770px",
      xl: "1026px",
      }
    },
    fontFamily: {
      search: ['Inter', 'sans-serif'],
      nav: ['DM Serif Display', 'serif']
    }
  },
  plugins: [],
}
