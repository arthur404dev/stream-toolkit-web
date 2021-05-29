import React from 'react'

const Prompt = ({ payload }) => {
  const { author, text, platform } = payload
  const name = author.displayName ? author.displayName : author.name
  return (
    <div className='flex flex-col w-auto whitespace-nowrap text-2xl pl-4 h-full'>
      <div id='top-row' className='flex items-center h-8'>
        <img
          className={`h-8 w-8 rounded-full border-${platform} border-2`}
          src={author.avatar}
          alt={name}
        />
        <span className={`pl-1 font-bold text-${platform}`}>{name}:</span>
        <span className='text-white pl-2'>{text}</span>
      </div>
    </div>
  )
}

export default Prompt
