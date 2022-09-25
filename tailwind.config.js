const colors = require('tailwindcss/colors');

module.exports = {
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#2492F5',
          secondary: '#9378FF',
          'primary-content': '#fff',
        },
        synthwave: {
          ...require('daisyui/src/colors/themes')['[data-theme=synthwave]'],
          primary: '#9378FF',
        },
        pastel: {
          ...require('daisyui/src/colors/themes')['[data-theme=pastel]'],
          primary: '#D2CFFB',
          secondary: '#A6D4FD',
        },
        cyberpunk: {
          ...require('daisyui/src/colors/themes')['[data-theme=cyberpunk]'],
          primary: '#fbff12',
          'base-100': '#41ead4',
        },
      },
      'night',
      'black',
      'pastel',
      'aqua',
      'cyberpunk',
      'dracula',
      'corporate',
    ],
  },
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
      height: {
        vh: '100vh',
      },
    },
  },

  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('daisyui')],
};
