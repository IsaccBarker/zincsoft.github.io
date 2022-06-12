/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        forest: "url('/assets/imgs/land.jpg')",
        clouds: "url('/assets/imgs/clouds.png')"
      }),
      fontFamily: {
        'display': ["Source Sans Pro"]
      },
      fontSize: {
        'huge': '20rem'
      }
    },
  },
  plugins: [],
}

