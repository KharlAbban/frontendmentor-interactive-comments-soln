/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primModerateBlue": "hsl(238, 40%, 52%)",
        "primSoftRed": "hsl(358, 79%, 66%)",
        "primGrayishBlue": "hsl(239, 57%, 85%)",
        "primPaleRed": "hsl(357, 100%, 86%)",
        "neutDarkBlue": "hsl(212, 24%, 26%)",
        "neutGrayishBlue": "hsl(211, 10%, 45%)",
        "neutLightGray": "hsl(223, 19%, 93%)",
        "neutVeryLightGray": "hsl(228, 33%, 97%)",
      }
    },
  },
  plugins: [],
}