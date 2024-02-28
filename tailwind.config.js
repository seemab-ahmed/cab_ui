/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
      },
      fontSize: {
        'xxs': '10px', // 10px
        'xs': '12px',   // 12px
        'sm': '14px',  // 14px
        'md':'16px',    // 16px
        'lg': '18px',  // 18px
        'xl': '20px',   // 20px
        '2xl': '24px',   // 24px
        '3xl': '30px', // 30px
        '4xl': '36px',  // 36px
        '5xl': '48px',     // 48px
        '6xl': '64px',     // 64px
      },
      colors:{
        btnPrimary:'#1E90FE',
        primary:'#1C1C1C',
        secondary:'#1E90FE',
        customGrey: '#768B9f',
        primaryDark: '#485868',
      }
    },
  },
  plugins: [],
}

