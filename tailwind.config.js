module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: [{
            ul: {
              listStyleType: 'none',
            },
            'ul > li::marker': {
              listStyleType: 'none',
            },
          }
          ],
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      translate: ['active'],
      scale: ['active'],
      borderRadius: ['hover'],
      boxShadow: ['hover'],
      blur: ['group-hover', 'focus'],
      display: ["group-hover"],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
