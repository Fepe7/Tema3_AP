/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx", 
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
          //Aqui relacionamos los nombres que queremos con la fuente que hemos descargado,
          // la segunda fuente es por si da error
        'work-black' : ['WorkSans-Black', 'sans-serif'],
        'work-light' : ['WorkSans-Light', 'sans-serif'],
        'work-medium' : ['WorkSans-Medium', 'sans-serif'],
      },
      colors:{
          //Aqui relacinamos el nombre de un color con su valor hexadecimal
        primary: '#49129C',
        secondary : {
          DEFAULT : "#B40086",
          100: "#C51297",
          200: "#831266"
        },
        tertiary: "#EF2967",
      }
    },
  },
  plugins: [],
}