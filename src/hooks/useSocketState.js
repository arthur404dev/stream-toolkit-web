import { useEffect, useState, useRef } from "react"
import { socketFactory, sourceIds } from "../api/websocket"

const useSocketState = () => {
  const initialStats = Object.fromEntries(
    Object.values(sourceIds).map((source) => [
      source,
      { online: false, viewers: 0 },
    ]),
  )
  const [messages, setMessages] = useState([])
  const [stats, setStats] = useState(initialStats)
  const [shouldScroll, setScroll] = useState(false)
  const scrollElement = useRef()
  const scroll = {
    scrollElement,
    setScroll,
    shouldScroll,
  }

  useEffect(() => {
    const socket = socketFactory()
    socket.onmessage = ({ data }) => {
      const { type, payload, timestamp, stats } = JSON.parse(data)

      if (type === "chat") {
        const { eventIdentifier, eventPayload, eventSourceId } = payload
        const { author, bot, text } = eventPayload
        const name = author.displayName ? author.displayName : author.name
        const avatar = author.avatar ? author.avatar : author.avatarUrl
        const message = {
          id: eventIdentifier,
          author: { name, avatar },
          text,
          bot,
          platform: sourceIds[eventSourceId],
          timestamp,
        }
        setMessages((messages) => [...messages, message])
        setScroll(true)
      }
      if (type === "stats") {
        const { platformId, online, title, viewers } = stats
        if (viewers !== null) {
          const status = {
            platform: sourceIds[platformId],
            viewers,
            online,
            title,
          }
          setStats((stats) => ({ ...stats, [status.platform]: status }))
        }
      }
    }
  }, [])

  return { messages, scroll, setMessages, stats }
}

export default useSocketState
