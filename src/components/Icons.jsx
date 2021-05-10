import React from 'react'
import {
  FaYoutube,
  FaDiscord,
  FaLinkedin,
  FaTwitch,
  FaLink,
} from 'react-icons/fa'

const Icons = ({ platform }) => {
  if (platform === 'youtube')
    return <FaYoutube className={`text-${platform} text-2xl`} />
  if (platform === 'discord')
    return <FaDiscord className={`text-${platform} text-2xl`} />
  if (platform === 'twitch')
    return <FaTwitch className={`text-${platform} text-2xl`} />
  if (platform === 'linkedin')
    return <FaLinkedin className={`text-${platform} text-2xl`} />
}

export default Icons
