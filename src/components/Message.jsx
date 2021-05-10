import './Message.css'
import Icons from './Icons'


const Message = ({payload}) => {
    const {author, text,platform} = payload
    const name = author.displayName ? author.displayName : author.name
    return (
        <div className={`max-w-full mx-auto my-4 flex p-6 bg-grey-404 border-${platform} border-l-4`}>
           <div className="flex-shrink-0">
               <img className="h-12 w-12 rounded-full" src={author.avatar} alt={name}/>
            </div> 
            <div className="ml-6 pt-1 flex-col w-full">
                <div className="flex justify-between">
                    <h4 className="text-2xl text-white font-bold">{name}</h4>
                    <Icons platform={platform}/>
                    </div>
                <span className="text-gray-200 text-3xl mt-3 text-justify w-full messageText">{text}</span>
            </div>
        </div>
    )
}

export default Message
