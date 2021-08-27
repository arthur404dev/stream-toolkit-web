import React, { useEffect } from "react"
import { useSocketState } from "../hooks"
import Icons from "../components/Icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"

const Stats = ({ match }) => {
  const platform = match.params.platform
  const { stats } = useSocketState()
  useEffect(() => {
    console.log(stats)
  })
  if (platform in stats) {
    return (
      <div className={`w-screen h-screen `}>
        <div className={`w-48 h-16 flex`}>
          <div className={`w-16 h-16  flex items-center justify-center`}>
            <Icons platform={platform} iconSize={"text-4xl"} />
          </div>
          <div className={`w-2/3 flex items-center p-3`}>
            <FontAwesomeIcon
              icon={faUserCircle}
              className={`text-2xl ${
                stats[platform].online
                  ? `text-green-400 animate-pulse`
                  : `text-gray-500`
              }`}
            />
            {stats[platform].viewers ? (
              <span className={`text-white ml-4`}>
                {stats[platform].viewers}
              </span>
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
      <div className={`w-screen h-screen`}>
        <div
          className={`w-48 h-32 flex flex-col items-center justify-center text-white`}
        >
          <div
            className={`h-full w-full flex items-center justify-center text-4xl`}
          >
            <FontAwesomeIcon
              icon={faUserCircle}
              className={`mr-3 text-twitch`}
            />
            <p>
              {Object.values(stats).reduce(
                (prev, stat) => prev + stat.viewers,
                0,
              )}
            </p>
          </div>
        </div>
      </div>
    )
  }
  return <div>{platform} not currently supported</div>
}

export default Stats
