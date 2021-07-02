import React, { useEffect } from "react"
import Prompt from "../components/Prompt"
import { useMessages } from "../hooks"

const ChatHorizontal = () => {
  const [messages, scroll] = useMessages()
  const { shouldScroll, scrollElement, setScroll } = scroll
  useEffect(() => {
    if (shouldScroll) {
      scrollElement.current.scrollIntoView({ behavior: "smooth" })
      setScroll(false)
    }
  }, [scrollElement, setScroll, shouldScroll])
  return (
    <div className='w-chat-horizontal h-chat-horizontal'>
      <main className='bg-transparent w-full h-full flex'>
        {messages.map((message) => (
          <Prompt key={message.id} payload={message} />
        ))}
        <div ref={scrollElement} />
      </main>
    </div>
  )
}

export default ChatHorizontal
