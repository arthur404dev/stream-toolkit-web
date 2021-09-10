import { useEffect, useState, useRef } from "react"
import { socket } from "../api"

const { client, platforms, sources } = socket

const useSocketState = () => {
  const initialStats = Object.fromEntries(
    Object.values(platforms).map((source) => [
      source,
      { online: false, viewers: 0 },
    ]),
  )
  const [messages, setMessages] = useState([])
  const [rawMessages, setRawMessages] = useState([])
  const [pinned, setPinned] = useState({})
  const [stats, setStats] = useState(initialStats)
  const [shouldScroll, setScroll] = useState(false)
  const scrollElement = useRef()
  const scroll = {
    scrollElement,
    setScroll,
    shouldScroll,
  }

  useEffect(() => {
    client.onmessage = ({ data }) => {
      console.log(JSON.parse(data))
      const rawData = JSON.parse(data)
      const { type, payload, timestamp, stats } = rawData

      if (type === "chat" || type === "upsert") {
        const { eventIdentifier, eventPayload, eventSourceId } = payload
        const { author, bot, text } = eventPayload
        const name = author.displayName ? author.displayName : author.name
        const avatar = author.avatar ? author.avatar : author.avatarUrl
        const message = {
          id: eventIdentifier,
          clicked: false,
          author: { name, avatar },
          text,
          bot,
          platform: sources[eventSourceId],
          timestamp,
        }
        if (type === "chat") {
          setMessages((messages) => [...messages, message])
          setRawMessages((raws) => [...raws, rawData])
          setScroll(true)
        }

        if (type === "upsert") {
          setPinned({})
          setPinned(message)
        }
      }

      if (type === "delete") {
        setPinned({})
      }

      if (type === "stats") {
        const { platformId, online, title, viewers } = stats
        if (viewers !== null) {
          const status = {
            platform: platforms[platformId],
            viewers,
            online,
            title,
          }
          setStats((stats) => ({ ...stats, [status.platform]: status }))
        }
      }
    }
  }, [])

  return { messages, scroll, setMessages, stats, rawMessages, pinned }
}

export default useSocketState
