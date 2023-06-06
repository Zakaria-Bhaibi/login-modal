/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily:{
      sans:['Mulish','sans-serif'],
      mono:['Rokkitt','monospace'],
    },
    colors:{
      'platinium1' :'#EBE9E9'
    }},
    
  },
  plugins: [],
}

