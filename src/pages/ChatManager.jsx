import React, { useEffect } from 'react'
import Message from '../components/Message'

const Messages = ({ state }) => {
  const { messages, scroll, setMessages } = state
  const { shouldScroll, scrollElement, setScroll } = scroll

  const handleCLick = (id) => {
    setMessages((messages) =>
      messages.map((msg) => {
        msg.clicked = false
        if (msg.id === id) {
          msg.clicked = true
        }
        return msg
      })
    )
  }

  useEffect(() => {
    if (shouldScroll) {
      scrollElement.current.scrollIntoView({ behavior: 'smooth' })
      setScroll(false)
    }
  }, [scrollElement, setScroll, shouldScroll])
  return (
    <div className='m-auto w-chat-manager h-full block'>
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
