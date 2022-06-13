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
        'huge': '20rem',
        'giant': '35rem',
      },
      colors: {
        'orange-yellow': '#EAB308',
        'skobeloff': '#297373',
        'persimmon': '#E55812',
        'timberwolf': '#E5DADA',
        'rich-black': '#02040F',
      }
    },
  },
  plugins: [],
}

