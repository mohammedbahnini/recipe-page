/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'young-serif' : '"Young Serif", serif' , 
        'outfit' : '"Outfit", sans-serif'
      } , 
      colors : {
        'dark-charcoal' : '#312E2C' , 
        'dark-raspberry' : '#7A284E' , 
        'brandy-red' : '#854632' , 
        'wenge-brown' : '#5F564D'  , 
        'eggshell' : '#F3E5D7' ,
        'white-coffee' : '#E3DDD7' , 
        'snow' : '#FFF7FB' , 
      }
    },
  },
  plugins: [],
}