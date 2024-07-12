import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ["Open Sans", "sans-serif"],
        'raleway': ["Raleway", "sans-serif"]
      },
      colors:{
        'vv-red': '#ff0400', //de4644
        'vv-black': '#222222',
        'vv-dark-gray': '#444444'
      }
    }
  },
  daisyui: {
    themes: ["light", "black"],
  },
  plugins: [
    daisyui,
  ],
}


