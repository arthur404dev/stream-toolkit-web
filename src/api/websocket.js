const urlChat = `wss://backend.chat.restream.io/ws/embed?token=${process.env.REACT_APP_RESTREAM_TOKEN}`

const socket = new WebSocket(urlChat)

const sourceIds = {
  2: 'twitch',
  25: 'discord',
  13: 'youtube',
  26: 'linkedin',
}

export { socket, sourceIds }
