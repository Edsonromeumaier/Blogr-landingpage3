/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {'Ubuntu', },

      backgroundImage: {
        'mobileBackground': "url('./images/bg-pattern-intro-mobile.svg')",
        'desktopBackground': "url('./images/bg-pattern-intro-desktop.svg')",
      },

      lineHeight:{ '16':"1.6",},

      
    },
  },
  plugins: [],
}

