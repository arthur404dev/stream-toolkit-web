import React from "react"
import { Route } from "react-router-dom"

const AppRoute = ({ component: Component, path, isProtected, ...props }) => {
  return (
    <Route
      path={path}
      render={(props) =>
        isProtected ? <div>Please login First</div> : <Component {...props} />
      }
      {...props}
    />
  )
}

export default AppRoute
