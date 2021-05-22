module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'grey-404': '#252525',
        youtube: '#FF0000',
        discord: '#7289DA',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
