const socketFactory = () => {
  const socketUrl = `${process.env.REACT_APP_API_SOCKET_URL}/ws?api-key=${process.env.REACT_APP_API_ACCESS_KEY}`
  return new WebSocket(socketUrl)
}

const sourceIds = {
  13: "youtube",
  2: "twitch",
  22: "twitter",
  25: "discord",
  26: "linkedin",
  19: "facebook",
}

export { socketFactory, sourceIds }
