import React, { useEffect } from 'react'
import Message from '../components/Message'
import { useMessages } from '../hooks'
import parseCustomSize from '../helpers/parseCustomSize'

const Messages = ({ location }) => {
  const customSizes = parseCustomSize(location)
  const [messages, scroll] = useMessages()
  const { shouldScroll, scrollElement, setScroll } = scroll
  useEffect(() => {
    if (shouldScroll) {
      scrollElement.current.scrollIntoView({ behavior: 'smooth' })
      setScroll(false)
    }
  }, [scrollElement, setScroll, shouldScroll])
  return (
    <div
      className={
        customSizes ? 'block' : 'w-chat-vertical h-chat-vertical block'
      }
      style={
        customSizes && {
          width: customSizes.width,
          height: customSizes.height,
        }
      }
    >
      <main className='bg-transparent w-full h-full flex-col'>
        {messages.map((message) => (
          <Message key={message.id} payload={message} interactive={false} />
        ))}
        <div ref={scrollElement} />
      </main>
    </div>
  )
}

export default Messages
