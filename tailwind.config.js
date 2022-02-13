// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      current: colors.current,
      red: {
        500: '#E86C51',
        700: '#D91F2F',
      },
      gray: {
        100: '#FEFDFD',
        700: '#67666B',
      },
      yellow: {
        500: '#E8D951',
      },
      green: {
        500: '#78E851',
      },
    },
    boxShadow: {
      lg: '0px 4px 11px 2px rgba(0, 0, 0, 0.25);',
    },
    fontSize: {
      12: ['12px', '1.35'],
      18: ['18px', '1.35'],
      48: ['48px', '1.35'],
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
