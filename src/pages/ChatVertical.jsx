import React from 'react'
import Message from '../components/Message'

const Messages = ({ state }) => {
  const [messages, scroll] = state
  return (
    <main className='bg-transparent w-full h-full flex-col'>
      {messages.map((message) => (
        <Message key={message.id} payload={message} />
      ))}
      <div ref={scroll} />
    </main>
  )
}

export default Messages
