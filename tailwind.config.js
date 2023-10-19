/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-background': "url('./images/bg-pattern-intro-mobile.svg')",
        'desktop-background': "url('./images/bg-pattern-intro-desktop.svg')",
      }
    },
  },
  plugins: [],
}

