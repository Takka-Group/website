/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    'content/**/*.md', 
    'layouts/**/*.html',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      emerald: {
        1:  '#06C569',
        2:  '#0AA85C',
      },
      jet:  {
        1:  '#171717',
        2:  '#393939',
        3:  '#ACACAC',
        4:  '#1D1D1F',
        5:  '#2F2F33',
        6:  '#343438',
      }

    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
        'shine': ['Jushley Shine', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'button': 'linear-gradient(140deg, #06C569 0%, #0AA359 100%)',
        'round' : 'radial-gradient(50% 50.00% at 50% 50.00%, #2D2D32 0%, rgba(45, 45, 50, 0.00) 100%)',
      },
      dropShadow: {
        'text'  : '0 30px 20px #000',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

