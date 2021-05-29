import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Icons from './Icons'
import './Message.css'

const Message = ({ payload }) => {
  const { author, text, platform, timestamp } = payload
  const parsedDate = new Date(timestamp * 1000)
  const name = author.displayName ? author.displayName : author.name
  const [animate, setAnimation] = useState('')
  useEffect(() => {
    setAnimation('animate-pulse')
    setTimeout(() => {
      setAnimation('')
    }, 2000)
  }, [])
  return (
    <div
      className={`max-w-full bg-grey-404 border-${platform} border-l-4 transition-all ${animate}`}
    >
      <div className='content max-w-full mx-auto my-4 flex p-6'>
        <div className='flex-shrink-0'>
          <img
            className='h-12 w-12 rounded-full'
            src={author.avatar}
            alt={name}
          />
        </div>
        <div className='ml-6 pt-1 flex-col w-full'>
          <div className='flex justify-between'>
            <h4 className='text-2xl text-white font-bold overflow-hidden'>
              {name}
            </h4>
            <div className='flex flex-col justify-end items-end'>
              <span className='text-gray-300 mb-2'>
                {format(parsedDate, 'pp', { locale: ptBR })}
              </span>
              <Icons platform={platform} iconSize='text-2xl' />
            </div>
          </div>
          <span className='text-gray-200 text-3xl mt-3 text-justify w-full messageText'>
            {text}
          </span>
        </div>
      </div>
      {/* INCLUDE FOOTER */}
    </div>
  )
}

export default Message
