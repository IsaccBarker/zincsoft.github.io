/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        forest: "url('/assets/imgs/land.jpg')",
        clouds: "url('/assets/imgs/clouds.png')",
        farm: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/assets/imgs/farm.jpg')"
      }),
      fontFamily: {
        'display': ["Source Sans Pro"]
      },
      fontSize: {
        'huge': '20rem'
      },
      colors: {
        'zinc-black',
        'zinc-white',
        'zinc-pearl',
        'zinc-coral',
        'zinc-blue',
      }
    },
  },
  plugins: [],
}

