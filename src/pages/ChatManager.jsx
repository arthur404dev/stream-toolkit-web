import React, { useEffect, useState } from "react"
import { socket } from "../api"
import { useSocketState } from "../hooks"
import Message from "../components/Message"

const Messages = () => {
  const [pinnedMsg, setPinnedMsg] = useState("")
  const { messages, scroll, setMessages, rawMessages } = useSocketState()
  const { shouldScroll, scrollElement, setScroll } = scroll

  const handleCLick = (id) => {
    if (pinnedMsg !== "" && pinnedMsg === id) {
      // Trigger Remove Event
      const rawMsg = rawMessages.find(
        (raw) => raw.payload.eventIdentifier === pinnedMsg,
      )
      rawMsg.action = "delete"
      socket.client.send(JSON.stringify(rawMsg))
      setPinnedMsg("")
    } else {
      setPinnedMsg(id)
    }
    setMessages((messages) =>
      messages.map((msg) => ({
        ...msg,
        clicked: msg.id === id ? !msg.clicked : false,
      })),
    )
  }

  useEffect(() => {
    const msg = messages.find((el) => el.clicked === true)
    if (msg) {
      const rawMsg = rawMessages.find(
        (raw) => raw.payload.eventIdentifier === msg.id,
      )
      rawMsg.action = "upsert"
      socket.client.send(JSON.stringify(rawMsg))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pinnedMsg])

  useEffect(() => {
    if (shouldScroll) {
      scrollElement.current.scrollIntoView({ behavior: "smooth" })
      setScroll(false)
    }
  }, [scrollElement, setScroll, shouldScroll])

  return (
    <div className='m-auto w-screen h-screen overflow-x-hidden bg-purpledaze-darker'>
      <main className='bg-transparent w-full h-full flex-col'>
        {messages.map((message) => (
          <Message
            key={message.id}
            payload={message}
            interactive={true}
            onClick={handleCLick}
          />
        ))}
        <div ref={scrollElement} />
      </main>
    </div>
  )
}

export default Messages
