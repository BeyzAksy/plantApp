/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        mainborder: 'rgba(255, 255, 255, 0.05',
        black: {
          100: '#13231B',
          200: '#000000',
        },
        green: {
          100: '#28AF6E',
          200: '#2CCC80',
          300: '#101E17',
          400: '#28AF6E',
          500: '#17221A',
          600: '#24312A',
          700: '#597165B2',
        },
        gray: {
          100: '#BDBDBD',
          200: '#AFAFAF',
          300: '#F4F6F6 ',
          400: '#13231BB2',
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
        0.5: '0.5px',
        1.5: '1.5px',
      },
      opacity: {
        88: '.88',
        3: '.005',
      },
      fontSize: {
        13: '13px',
      },
    },
  },
  plugins: [],
};
