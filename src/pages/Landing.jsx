import React from "react"
import Icons from "../components/Icons"

const Landing = () => {
  return (
    <div className='w-screen h-screen'>
      <main className='bg-gray-800 text-white w-full h-full flex'>
        <div className='m-auto p-auto self-center'>
          <h1 className='font-mono text-9xl font-bold text-center'>404</h1>
          <div className='socials flex self-center items-center justify-evenly'>
            <Icons platform='discord' className='text-discord border-discord' />
            <Icons platform='youtube' className='text-youtube border-youtube' />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Landing
