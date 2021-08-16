import React from "react"
import { useEffect } from "react"
import { exchangeTokens } from "../api/oauth/exchangeTokens"

const Redirect = ({ location }) => {
  useEffect(() => {
    const tokens = exchangeTokens(location)
    console.log(tokens)
  }, [location])

  return <div>From Redirect!</div>
}

export default Redirect
