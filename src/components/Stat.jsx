import React, { useEffect, useState } from "react"
import Icons from "../components/Icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { ReactComponent as Logo404 } from "../assets/img/Logo Base.svg"

const Stat = ({ platform, stats }) => {
  const [platformState, setPlatformState] = useState({})
  useEffect(() => {
    if (platform in stats) {
      setPlatformState(stats[platform])
    }
  }, [stats])
  if (platform in stats) {
    return (
      <div className={`w-full text-2xl`}>
        <div className={`w-full h-16 flex items-center justify-start`}>
          <div className={`w-16 h-16  flex items-center justify-center`}>
            <Icons platform={platform} iconSize={"text-4xl"} />
          </div>
          <div className={`w-2/3 flex items-center p-3`}>
            <FontAwesomeIcon
              icon={faUserCircle}
              className={`text-2xl ${
                platformState.online
                  ? `text-green-400 animate-pulse`
                  : `text-gray-500`
              }`}
            />
            {platformState.viewers ? (
              <span className={`text-white ml-4`}>{platformState.viewers}</span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    )
  }
  if (platform === "total") {
    return (
      <div className={`w-full text-2xl`}>
        <div
          className={`w-full h-16 flex items-center justify-start text-white`}
        >
          <div className={`w-16 h-16 flex items-center justify-center`}>
            <div>
              <Logo404 className='h-12' fill='white' />
            </div>
          </div>
          <div className={`h-2/3 flex items-center p-3`}>
            <FontAwesomeIcon
              icon={faUserCircle}
              className={`text-2xl text-twitch`}
            />
            <span className={`text-white ml-4`}>
              {Object.values(stats).reduce((prev, stat) => {
                if (typeof stat.viewers === "number") {
                  return prev + stat.viewers
                }
                return prev
              }, 0)}
            </span>
          </div>
        </div>
      </div>
    )
  }
  return <div>{platform} not currently supported</div>
}

export default Stat
