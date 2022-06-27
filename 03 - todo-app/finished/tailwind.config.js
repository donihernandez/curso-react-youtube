/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: "'Anton', serif",
        inter: "'Inter', serif",
      }
   }
  },
  plugins: [],
}