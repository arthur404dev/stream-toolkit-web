import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import Icons from "./Icons"
import { motion } from "framer-motion"

const Message = ({ payload, interactive, onClick }) => {
  const { id, author, text, platform, timestamp, clicked } = payload
  const parsedDate = new Date(timestamp * 1000)
  return (
    <motion.div
      layout
      className={`max-w-full ${
        clicked ? `bg-gray-700` : `bg-grey-404`
      } border-${platform} border-l-8 transition-all ${
        interactive && `hover:bg-gray-700`
      } 
      `}
      onClick={interactive ? () => onClick(id) : () => {}}
    >
      <div className='content max-w-full mx-auto my-2 flex p-6'>
        <div className='flex-shrink-0'>
          <img
            className='h-16 w-16 rounded-full'
            src={author.avatar}
            alt={author.name}
          />
        </div>
        <div className='ml-6 pt-1 flex-col w-full'>
          <div className='flex justify-between'>
            <h4 className='text-3xl text-white font-bold overflow-hidden'>
              {author.name}
            </h4>
            <div className='flex flex-col justify-end items-end'>
              <span className='text-gray-300 mb-2 text-xl'>
                {format(parsedDate, "pp", { locale: ptBR })}
              </span>
              <Icons platform={platform} iconSize='text-3xl' />
            </div>
          </div>
          <span
            className='text-gray-200 text-4xl mt-3 text-justify w-full'
            style={{
              overflow: "hidden",
              wordWrap: "break-word",
              wordBreak: "break-word",
            }}
          >
            {text}
          </span>
        </div>
      </div>
      {/* INCLUDE FOOTER */}
    </motion.div>
  )
}

export default Message
