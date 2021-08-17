import React from "react"

const Prompt = ({ payload }) => {
  const { author, text, platform } = payload
  return (
    <div className='flex text-2xl h-full pr-4'>
      <div
        className={`h-8 w-8 mr-2 ml-2 rounded-full border-${platform} border-2`}
      >
        <img className='rounded-full' src={author.avatar} alt={author.name} />
      </div>

      <div className='whitespace-nowrap flex'>
        <span className={`font-bold text-${platform}`}>{author.name}:</span>
        <p className='text-white pl-2'>{text}</p>
      </div>
    </div>
  )
}

export default Prompt
