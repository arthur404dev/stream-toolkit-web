import React from "react"
import Stat from "../components/Stat"
import { platformIds } from "../api/websocket"

const Stats = ({ match }) => {
  const type = match.params.type
  const platforms = [...Object.values(platformIds), "total"]

  if (type === "vertical") {
    return (
      <div className='w-screen h-screen flex flex-col'>
        {platforms.map((platform) => (
          <Stat platform={platform} />
        ))}
      </div>
    )
  }
  if (type === "horizontal") {
    return (
      <div className='w-screen h-screen flex flex-row bg-grey-404'>
        {platforms.map((platform) => (
          <Stat platform={platform} />
        ))}
      </div>
    )
  }
  return <div>{type}</div>
}

export default Stats
