import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

library.add(fab)

const Icons = ({ platform }) => {
  return (
    <FontAwesomeIcon
      icon={['fab', platform]}
      className={`text-${platform} text-2xl`}
    />
  )
}

export default Icons
