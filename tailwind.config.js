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
        'display': ["Source Sans Pro"],
        'sub-mono': ["Source Code Pro"],
      },
      fontSize: {
        'huge': '20rem'
      },
      colors: {
        'ex-black': '#000000',
        'ex-white': '#F4F9E9',
        'ex-pearl': '#CBC9AD',
        'ex-coral': '#FE5E41',
        'ex-blue':  '#0F7173',
      }
    },
  },
  plugins: [],
}

