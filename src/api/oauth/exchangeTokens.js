import axios from "axios"
import { parse } from "query-string"

export const exchangeTokens = async (location) => {
  const { code } = parse(location.search)

  const response = await axios({
    method: "POST",
    url: process.env.REACT_APP_BACKEND_URL,
    data: { code },
    headers: {
      "content-type": "application/json",
    },
  })

  console.log(response)
}
