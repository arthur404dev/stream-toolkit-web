import React from 'react'
import { Route } from 'react-router-dom'
import useMessages from '../hooks/useMessages'
import { Chatbot, ChatHorizontal, ChatVertical } from '../pages'

const MessageRoutes = () => {
  const [messages, scroll] = useMessages()
  const messageState = { messages, scroll }
  return (
    <>
      <Route exact path='/overlay/chat-vertical'>
        <ChatVertical state={messageState} />
      </Route>
      <Route exact path='/overlay/chat-horizontal'>
        <ChatHorizontal state={messageState} />
      </Route>
      <Route exact path='/bots/chat'>
        <Chatbot />
      </Route>
    </>
  )
}

export default MessageRoutes
