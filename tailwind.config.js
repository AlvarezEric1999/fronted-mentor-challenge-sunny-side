/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        'Soft-red':'hsl(7, 99%, 70%)',
        'Yellow': 'hsl(51, 100%, 49%)',
        'Dark-desaturated': 'hsl(167, 40%, 24%)',
        'Dark-blue': 'hsl(198, 62%, 26%)',
        'Dark-moderate': 'hsl(168, 34%, 41%)',
      },
      fontFamily:{
        'Barlow':['Barlow','sans-serif'],
        'Fraunces':['Fraunces','serif']
      }
    },
    
  },
  plugins: [],
}