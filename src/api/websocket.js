const socketFactory = (type) => {
  const socketToken = process.env.REACT_APP_RESTREAM_TOKEN
  const socketUrl = sourceUrls[type] + socketToken
  return new WebSocket(socketUrl)
}

const sourceUrls = {
  chat: `wss://backend.chat.restream.io/ws/embed?token=`,
  stream: `wss://streaming-statuses.restream.io/ws?token=`,
}

const sourceIds = {
  2: "twitch",
  25: "discord",
  13: "youtube",
  26: "linkedin",
}

export { socketFactory, sourceIds }
