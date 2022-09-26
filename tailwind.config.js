/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit', // see https://tailwindcss.com/docs/just-in-time-mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './views/*.{js,ts,jsx,tsx}',
    './data/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      backgroundColor: ({ theme }) => ({
        counter: theme('colors.lightGray'),
        dark: theme('colors.black'),
        input: theme('colors.inputColor'),
        primary: theme('colors.blackBlue'),
        secondary: theme('colors.blackBlue2'),
      }),

      backgroundImage: {
        future: '90deg, #fff 95%, transparent 20px',
      },

      borderColor: ({ theme }) => ({
        titleBorder: theme('colors.lightGray'),
      }),

      colors: {
        black: '#151515',
        blackBlue: '#182936',
        blackBlue2: '#0F1C26',
        border: '#fcfcfc',
        inputColor: '#33404B',
        gray: '#313030',
        lightGray: '#D9D9D9',
        neon: '#20BCC6',
        red: '#f43f5e',
        stroke: '#5C666F',
        white: '#FDFDFD',
        blue: '#203642',
        number: '#324d5e',
        section: '#182936',
        feature: '#313030',
      },

      borderRadius: {
        lg: '10px',
      },

      boxShadow: {
        accent: [
          '0px 4px 50px rgba(32, 188, 198, 0.6)',
          '0px 4px 25px  rgba(32, 188, 198, 0.6)',
          '0px 4px 10px rgba(32, 188, 198, 0.6)',
        ],
        accentFutureCard: [
          '0px 4px 20px rgba(32, 188, 198, 0.6)',
          '0px 4px 10px rgb(32, 188, 198)',
        ],
        accentButton: ['0px 4px 10px rgba(32, 188, 198, 0.6)'],
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
        featureCard: ['2px 2px 8px #FCFCFC'],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2.125rem',
          lg: '2.125rem',
          xl: '1.25rem',
        },
      },

      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.25rem',
        '8xl': '6.25rem',
      },

      fontFamily: {
        cursive: ['Poiret One', 'cursive'],
        exo: ['Fira Sans', 'sans-serif'],
        sansSecondary: ['Manrope', 'sans-serif'],
      },

      letterSpacing: {
        tighter: '-.04em',
      },

      lineHeight: {
        tight: 1.2,
        faq: 1.4,
      },

      screens: {
        sm: '480px',
        md: '768px',
        lg: '768px',
        xl: '1280px',
      },

      spacing: {
        28: '7rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
