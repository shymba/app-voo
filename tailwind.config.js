/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-primary": "#FCF7E6",
        "app-secondary": "#000000",
        "app-orange": "#ED5E21",
      }
    },
    fontFamily : {
      "Space Grotesk": ["Space Grotesk, sans-serif"],
    },
    container: {
      // padding: "2rem",
      center: true,
    },
    // screens: {
    //   sm: "640px",
    //   ms: "768px",
    // }
  },
  plugins: [],
}
