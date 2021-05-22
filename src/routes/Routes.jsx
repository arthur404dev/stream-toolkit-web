import React from 'react'
import { Switch } from 'react-router-dom'
import MessageRoutes from './MessagesService'
import AppRoutes from './AppService'

const Routes = () => {
  return (
    <Switch>
      <AppRoutes />
      <MessageRoutes />
    </Switch>
  )
}

export default Routes
