/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#28AF6E',
          200: '#2CCC80',
        },
        gray: {
          100: '#BDBDBD',
          200: '#AFAFAF',
          300: '#3C3C431A',
          500: '#667085',
          700: '#344054',
          900: '#101828',
        },
        brown: {
          100: '#24201A',
        },
        blue: {
          50: '#EFF8FF',
          100: '#F0F9FF',
          500: '#026AA2',
          700: '#175CD3',
          'mid-dark': '#105278',
        },
        yellow: {
          100: '#FFDE9C',
          200: '#F5C25B',
        },
      },
      fontFamily: {
        rubik: ['Rubik'],
      },
      borderWidth: {
        0.2: '0.2px',
      },
      opacity: {
        88: '.88',
      },
      fontSize: {
        13: '13px',
      },
    },
  },
  plugins: [],
};
