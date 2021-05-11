/* eslint-disable quote-props */
// tailwind.config.js

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: '#239C6D',
        charcoal: '#414141',
        lightGrey: '#525252',
      },
      backgroundColor: {
        primary: '#239C6D',
        account: '#F2F5F4',
        promptYellow: '#FFF5E7',
        recipeGray: '#E5E5E5',
        chicken: '#FF9C63',
        beef: '#239C6D',
        turkey: '#875D45',
        lamb: '#9EC694',
        kibble: {
          chicken: '#FECD6D',
          'turkey+salmon': '#FE766D',
          duck: '#91CEB6',
        },
      },
      borderColor: {
        green: '#239C6D',
      },
      borderRadius: {
        '1lg': '0.625rem'
      },
      margin: {
        1.3: '0.312rem',
        4.5: '1.125rem',
        5.5: '1.375rem',
      },
      padding: {
        4.5: '1.125rem',
      },
      boxShadow: {
        modal: '0px 8px 40px rgb(0 0 0 / 20%)',
      },
      width: {
        7.3: '1.875rem',
        13: '3.25rem'
      }
    },
    fontFamily: {
      messina: ['Messinasans, sans-serif'],
      cooper: ['Coooper Lt Bt', 'sans-serif'],
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
