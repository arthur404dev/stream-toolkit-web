import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Chatbot, ChatHorizontal, ChatVertical } from './pages'

const Routes = ({ messageState }) => {
  return (
    <Router>
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
      </Switch>
    </Router>
  )
}

export default Routes
