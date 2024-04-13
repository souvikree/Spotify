/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "1/10":"10%",
        "9/10":"90%",
      },
      backgroundColor:{
        "app-lightblack": "#121212"
      }
    },
  },
  plugins: [],
}

