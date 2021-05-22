import { useEffect, useState, useRef } from 'react'
import { socket, sourceIds } from '../api/websocket'

const useMessages = () => {
  const [messages, setMessages] = useState([])
  const [shouldScroll, setScroll] = useState(false)
  const scrollElement = useRef()
  const scroll = {
    scrollElement,
    setScroll,
    shouldScroll,
  }

  useEffect(() => {
    socket.onmessage = ({ data }) => {
      const { action, payload, timestamp } = JSON.parse(data)

      if (action === 'event') {
        const { eventIdentifier, eventPayload, eventSourceId } = payload
        const { author, bot, text } = eventPayload
        const message = {
          id: eventIdentifier,
          author,
          text,
          bot,
          platform: sourceIds[eventSourceId],
          timestamp,
        }
        setMessages((messages) => [...messages, message])
        setScroll(true)
      }
    }
  }, [])

  return [messages, scroll]
}

export default useMessages
