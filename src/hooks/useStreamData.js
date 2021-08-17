import { useEffect, useState } from "react"
import { socketFactory } from "../api/websocket"

const useStreamData = () => {
  const [streamData, setStreamData] = useState([])

  useEffect(() => {
    const socket = socketFactory("stream")
    socket.onmessage = (payload) => {
      console.log(payload)
      setStreamData(payload)
    }
  }, [])

  return [streamData]
}

export default useStreamData
