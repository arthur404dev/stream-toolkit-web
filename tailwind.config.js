module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: [
        /discord/,
        /youtube/,
        /twitch/,
        /linkedin/,
        /grey-404/,
        /twitter/,
        /facebook/,
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purpledaze: "#181B28",
        "purpledaze-darker": "#161926",
        "grey-404": "#252525",
        youtube: "#F4005F",
        discord: "#FF65F7",
        twitch: "#9D65FF",
        linkedin: "#27AFEB",
        twitter: "#58EBD7",
        facebook: "#3b5998",
      },
      width: {
        "chat-vertical": "820px",
        "chat-horizontal": "2560px",
        "chat-manager": "99%",
        highlight: "800px",
      },
      height: {
        "chat-vertical": "960px",
        "chat-horizontal": "80px",
        highlight: "250px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
