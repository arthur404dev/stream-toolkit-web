import { useEffect, useState, useRef } from 'react'
import { socketFactory, sourceIds } from '../api/websocket'

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
    const socket = socketFactory('chat')
    socket.onmessage = ({ data }) => {
      console.log(data)
      const { action, payload, timestamp } = JSON.parse(data)

      if (action === 'event') {
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
    }
  }, [])

  return [messages, scroll]
}

export default useMessages
