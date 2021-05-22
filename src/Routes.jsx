import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Chatbot, ChatHorizontal, ChatVertical, Landing } from './pages'

const Routes = ({ messageState }) => {
  return (
    <Switch>
      <Route exact path='/overlay/chat-vertical'>
        <ChatVertical state={messageState} />
      </Route>
      <Route exact path='/overlay/chat-horizontal'>
        <ChatHorizontal state={messageState} />
      </Route>
      <Route exact path='/bots/chat'>
        <Chatbot />
      </Route>
      <Route path='/'>
        <Landing />
      </Route>
    </Switch>
  )
}

export default Routes
