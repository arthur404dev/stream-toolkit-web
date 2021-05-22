import React, { useEffect } from 'react'
import Message from '../components/Message'
import './ChatVertical.css'

const Messages = ({ state }) => {
  const { messages, scroll } = state
  const { shouldScroll, scrollElement, setScroll } = scroll
  useEffect(() => {
    if (shouldScroll) {
      scrollElement.current.scrollIntoView({ behavior: 'smooth' })
      setScroll(false)
    }
  }, [scrollElement, setScroll, shouldScroll])
  return (
    <div className='page'>
      <main className='bg-transparent w-full h-full flex-col'>
        {messages.map((message) => (
          <Message key={message.id} payload={message} />
        ))}
        <div ref={scrollElement} />
      </main>
    </div>
  )
}

export default Messages
