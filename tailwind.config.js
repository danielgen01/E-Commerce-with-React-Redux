/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Navbar-grey":"#0d0d0d",
        
      },
      
      animation: {
        'menu-slide': 'menu-slide 500ms ease-in-out',
        
      },

      keyframes:{
        'menu-slide': {
          '0%': {
            left: '-100%',
          },
          '100%': {
            left: '0%',
          }
      }
    },
  },
  plugins: [],
}
}
