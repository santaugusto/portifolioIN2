/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}', './src/**/*.css'], // Adicione seus arquivos CSS aqui
  theme: {
    extend: {
      colors:{
        'dark-grey':'#1C1919'
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
