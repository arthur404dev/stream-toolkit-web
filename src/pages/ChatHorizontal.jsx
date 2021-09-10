import React, { useEffect } from "react"
import Prompt from "../components/Prompt"
import { parseCustomSize } from "../helpers"
import { useSocketState } from "../hooks"

const ChatHorizontal = ({ location }) => {
  const customSizes = parseCustomSize(location)
  const { messages, scroll } = useSocketState()
  const { shouldScroll, scrollElement, setScroll } = scroll
  useEffect(() => {
    if (shouldScroll) {
      scrollElement.current.scrollIntoView({ behavior: "smooth" })
      setScroll(false)
    }
  }, [scrollElement, setScroll, shouldScroll])
  return (
    <div
      className={!customSizes && "w-chat-horizontal h-chat-horizontal"}
      style={
        customSizes && {
          width: customSizes.width,
          height: customSizes.height,
        }
      }
    >
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
