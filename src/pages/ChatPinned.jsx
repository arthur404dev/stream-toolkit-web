import React, { useState } from "react"
import { useSocketState } from "../hooks"
import { useTransition, animated } from "react-spring"
import { parseDate, limitText } from "../helpers"

const ChatPinned = () => {
  const [cardVisible, setCardVisible] = useState(false)
  const { pinned } = useSocketState()
  const LIMIT = 175
  const pinnedMessage = useTransition(pinned, {
    from: {
      opacity: 0,
      transform: "translate3d(-100%,0px,0px)",
      position: "absolute",
    },
    enter: (item) => async (next) => {
      await next({ transform: "translate3d(0px,0px,0px)", opacity: 1 })
      await next({
        delay: 150,
        onStart: () => {
          setCardVisible(true)
        },
        life: "100%",
      })
    },
    leave: (item) => async (next) => {
      await next({
        transform: "translate3d(0px,100%,0px)",
        opacity: 0,
        onStart: () => {
          setCardVisible(false)
        },
      })
      await next({
        life: "0%",
      })
    },
    config: { duration: 350, velocity: 100 },
    order: ["leave", "enter", "update"],
  })

  return pinnedMessage(
    (style, item) =>
      item.id && (
        <animated.div style={style} className='overflow-hidden'>
          <div className='w-highlight h-highlight bg-transparent flex'>
            {item?.author ? (
              <div
                className={`avatar h-full w-1/3 border-4 border-${item?.platform} mr-4 relative`}
              >
                <img
                  className={`h-full w-full `}
                  src={item?.author?.avatar}
                  alt={item?.id}
                />
                {cardVisible && (
                  <p className='absolute left-0 bottom-0 bg-purpledaze-darker font-bold text-white w-full h-10 text-center pt-2'>
                    {item?.author?.name}
                  </p>
                )}
              </div>
            ) : (
              <div
                className={`avatar h-full w-1/2 bg-purpledaze-darker mr-4`}
              ></div>
            )}
            <animated.div
              className={`bg-purpledaze-darker opacity-80 text-white w-2/3 h-full m-auto p-4 justify-center items-center border-4 border-purpledaze`}
            >
              <div className='text flex flex-col h-full w-full justify-between'>
                <p
                  style={{
                    overflow: "hidden",
                    wordWrap: "break-word",
                    wordBreak: "break-word",
                  }}
                  className='text-2xl'
                >
                  {item.text && limitText(item?.text, LIMIT)}
                </p>
                <span className='self-end text-gray-400'>
                  {item.timestamp && parseDate(item?.timestamp)}
                </span>
              </div>
            </animated.div>
          </div>
        </animated.div>
      ),
  )
}

export default ChatPinned
