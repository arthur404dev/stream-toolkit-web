import React from 'react'
import { BrowserRouter , Route, Switch } from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <main className='bg-transparent w-full h-full flex-col'>
            {messages.map((message) => (
              <Message key={message.id} payload={message} />
            ))}
            <div ref={scroll} />
          </main>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
