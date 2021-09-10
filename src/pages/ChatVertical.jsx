import React, { useEffect } from "react"
import Message from "../components/Message"
import { useSocketState } from "../hooks"
import { parseCustomSize } from "../helpers"
import { config, useTransition } from "@react-spring/core"
import { animated } from "@react-spring/web"

const Messages = ({ location }) => {
  const customSizes = parseCustomSize(location)
  const { messages, scroll } = useSocketState()
  const { shouldScroll, scrollElement, setScroll } = scroll
  const transition = useTransition(messages, {
    from: {
      opacity: 0,
      transform: "translate3d(100%,0px,0px)",
    },
    enter: (item) => async (next) => {
      await next({ transform: "translate3d(0px,0px,0px)", opacity: 1 })
      await next({
        delay: 150,
        life: "100%",
      })
    },
    leave: (item) => async (next) => {
      await next({
        transform: "translate3d(0px,100%,0px)",
        opacity: 0,
      })
      await next({
        life: "0%",
      })
    },
    config: config.slow,
  })
  useEffect(() => {
    if (shouldScroll) {
      scrollElement.current.scrollIntoView({ behavior: "smooth" })
      setScroll(false)
    }
  }, [scrollElement, setScroll, shouldScroll])
  return (
    <div
      className={
        customSizes ? "block" : "w-chat-vertical h-chat-vertical block"
      }
      style={
        customSizes && {
          width: customSizes.width,
          height: customSizes.height,
        }
      }
    >
      <main className='bg-transparent w-full h-full flex-col'>
        {transition((style, message) => (
          <animated.div style={style}>
            <Message key={message.id} payload={message} interactive={false} />
          </animated.div>
        ))}
        <div ref={scrollElement} />
      </main>
    </div>
  )
}

export default Messages
