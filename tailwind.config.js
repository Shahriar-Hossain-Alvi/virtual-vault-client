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


