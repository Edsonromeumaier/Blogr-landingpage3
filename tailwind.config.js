/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'overpass': ['Overpass', 'sans-serif'],
      },

      backgroundImage: {
        'mobileBackground': "url('./images/bg-pattern-intro-mobile.svg')",
        'desktopBackground': "url('./images/bg-pattern-intro-desktop.svg')",
      },

      colors: {
        lightred: 'hsl(356, 100%, 66%)',
        verylightred: 'hsl(355, 100%, 74%)',
        verydarkblue: 'hsl(208, 49%, 24%)',

        // Neutral Colors
        white: 'hsl(0, 0%, 100%)',
        grayishblue: 'hsl(240, 2%, 79%)',
        verydarkgrayblue: 'hsl(207, 13%, 34%)',
        verydarkblackblue: 'hsl(240, 10%, 16%)',

        // Gradient Colors
        verylightredgradient: 'hsl(13, 100%, 72%)',
        lightredgradient: 'hsl(353, 100%, 62%)',
        verydarkgraybluegradient: 'hsl(237, 17%, 21%)',
        verydarkdesaturatedbluegradient: 'hsl(237, 23%, 32%)',
      },

      lineHeight: { '16': "1.6" },

      margin: { '5rem': '5rem' },
    },
  },
  plugins: [],
};
