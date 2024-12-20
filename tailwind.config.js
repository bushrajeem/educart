/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#FF922E",
        secondary: "#403685",
        light: "#f1f1f1",
      },
    },
  },
  plugins: [],
}
