import React from 'react'
import Message from '../components/Message'
import './ChatVertical.css'

const Messages = ({ state }) => {
  const [messages, scroll] = state
  return (
    <div className='page'>
      <main className='bg-transparent w-full h-full flex-col'>
        {messages.map((message) => (
          <Message key={message.id} payload={message} />
        ))}
        <div ref={scroll} />
      </main>
    </div>
  )
}

export default Messages
