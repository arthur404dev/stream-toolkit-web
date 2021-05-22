import React from 'react'
import { Route } from 'react-router-dom'
import { Landing } from '../pages'

const AppRoutes = () => {
  return (
    <>
      <Route path='/' component={Landing} />
    </>
  )
}

export default AppRoutes
