/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'rosa': '#FF7979',
        'verde': '#38CC8B',
        'roxo': '#5E54A4',
        'dark': '#3D3B48',
      },
      backgroundImage: {
        'bg-mobile': "url('../images/bg-intro-mobile.png')",
        'bg-desktop': "url('../images/bg-intro-desktop.png')",
      },
    },
  },
  plugins: [],
}

