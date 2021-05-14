import React from 'react'

const Prompt = ({ payload }) => {
  const { author, text, platform, timestamp } = payload
  const parsedDate = new Date(timestamp * 1000)
  const name = author.displayName ? author.displayName : author.name
  return (
    <div className='flex w-auto whitespace-nowrap text-2xl'>
      <span className={`font-bold text-${platform}`}>{name}:</span>
      <span>{text}</span>
    </div>
  )
}

export default Prompt
