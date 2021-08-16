import React from "react"
import { Link } from "react-router-dom"
import { authorizeDialogURL } from "../api/oauth/generateURL"

const Authenticate = () => {
  return (
    <div className='flex w-screen h-screen bg-gray-800 text-white'>
      <button className='m-auto p-auto bg-red-500 h-16 w-1/3 font-bold rounded outline-none focus:outline-none hover:bg-red-600'>
        <Link to={{ pathname: authorizeDialogURL() }} target='_blank'>
          Authenticate with Restream!
        </Link>
      </button>
    </div>
  )
}

export default Authenticate
