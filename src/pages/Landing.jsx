import React from 'react'
import Icons from '../components/Icons'
import './Landing.css'

const Landing = () => {
  return (
    <div className='landing'>
      <main className='bg-gray-800 text-white w-full h-full flex'>
        <div className='m-auto p-auto self-center'>
          <h1 className='font-mono text-9xl font-bold text-center'>404</h1>
          <div className='socials flex self-center items-center justify-evenly'>
            <Icons platform='discord' className='text-discord' />
            <Icons platform='youtube' className='text-youtube' />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Landing
