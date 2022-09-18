/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Hahmlet': ['"Hahmlet"', 'serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },
      keyframes: {
        flip: {
          "50%,80%": {
            transform: "rotateY(360deg)"
          }
        }
      },
      animation: {
        "flip": 'flip 2s infinite'
      }
    },
  },
  plugins: [],
}
