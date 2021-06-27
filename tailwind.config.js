module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: [/discord/, /youtube/, /twitch/, /linkedin/, /grey-404/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'grey-404': '#252525',
        youtube: '#FF0000',
        discord: '#7289DA',
        twitch: '#6441A4',
        linkedin: '#0077B5',
      },
      width: {
        'chat-vertical': '820px',
        'chat-horizontal': '2560px',
        'chat-manager': '99%',
      },
      height: {
        'chat-vertical': '960px',
        'chat-horizontal': '80px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
