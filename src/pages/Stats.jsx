import React from "react"
import Stat from "../components/Stat"
import { useSocketState } from "../hooks"
import { platformIds } from "../api/websocket"

const Stats = ({ match }) => {
  const { stats } = useSocketState()
  const type = match.params.type
  const platforms = [...Object.values(platformIds), "total"]

  if (type === "vertical") {
    return (
      <div className='w-screen h-screen flex flex-col'>
        {platforms.map((platform) => (
          <Stat platform={platform} stats={stats} />
        ))}
      </div>
    )
  }
  if (type === "horizontal") {
    return (
      <div className='w-screen h-screen flex flex-row items-center'>
        {platforms.map((platform) => (
          <Stat platform={platform} stats={stats} />
        ))}
      </div>
    )
  }
  return <div>{type}</div>
}

export default Stats
