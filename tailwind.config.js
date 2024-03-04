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
        'cinza': '#BAB7D4',
      },
      backgroundImage: {
        'bg-mobile': "url('../images/bg-intro-mobile.png')",
        'bg-desktop': "url('../images/bg-intro-desktop.png')",
      },
      boxShadow: {
        '2xl': '0 4px 0 #1f8e5ec8',
        '3xl': '0 7px 0 rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}

