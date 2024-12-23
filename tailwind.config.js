/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
       sm: "480px",
       md: "768px",
       lg: "1024px",
       xl: "1280px",
       "2xl": "1536px",
      },
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
