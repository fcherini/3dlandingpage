module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        32: '2rem',
        28: '1.75rem',
        24: '1.5rem',
        20: '1.25rem',
        18: '1.125rem',
        16: '1rem',
        14: '0.875rem',
        12: '0.75rem',
        10: '0.625rem',
      },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
      colors: {
        blue: {
          50: '#F9FCFF',
          100: '#E9F4FE',
          200: '#CCE7FE',
          300: '#A6D4FD',
          400: '#78BFFF',
          500: '#4AA9FF',
          600: '#2492F5',
          700: '#077DE7',
          800: '#006DD1',
          900: '#0461B7',
        },
        purple: {
          50: '#FAF8FF',
          100: '#F0EAFF',
          200: '#E8DFFD',
          300: '#CEBBFF',
          400: '#B595FF',
          500: '#A680FF',
          600: '#9365FF',
          700: '#7F4DF4',
          800: '#733DF3',
          900: '#5922DA',
        },
        accent: {
          50: '#F8F9FF',
          100: '#E6EAFF',
          200: '#DCE2FF',
          300: '#D1D9FF',
          400: '#AFBBFA',
          500: '#95A8FF',
          600: '#738CFF',
          700: '#5A6AF9',
          800: '#5461D2',
          900: '#434EAF',
        },
        gray: {
          50: '#F6F8FB',
          100: '#E6ECF2',
          200: '#D4DCE5',
          300: '#BEC8D5',
          400: '#A7B2C0',
          500: '#8895A8',
          600: '#727E90',
          700: '#596577',
          800: '#334155',
          900: '#252E3A',
        },
        gradient_blue: '#62B0F6',
        gradient_purple: '#9378FF',
        white: '#FFFFFF',
        offwhite: '#fafafa',
        link_hover: 'rgba(255, 255, 255, 0.1)',
        red: colors.red,
        green: colors.green,
        emerald: colors.emerald,
      },
    },
  },
  content: ['./pages/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
};
