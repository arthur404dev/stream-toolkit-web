import React from 'react'
import Prompt from '../components/Prompt'

const ChatHorizontal = ({ state }) => {
  const [messages, scroll] = state
  return (
    <main className='bg-transparent w-full h-full flex'>
      {messages.map((message) => (
        <Prompt key={message.id} payload={message} />
      ))}
      <div ref={scroll} />
    </main>
  )
}

export default ChatHorizontal
