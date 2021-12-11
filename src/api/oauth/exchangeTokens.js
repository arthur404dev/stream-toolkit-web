import axios from "axios"
import { parse } from "query-string"

export const exchangeTokens = async (location) => {
  const { code } = parse(location.search)
  const bodyFormData = new FormData()

  bodyFormData.append("code", code)

  const response = await axios({
    method: "POST",
    url: process.env.REACT_APP_BACKEND_URL,
    data: bodyFormData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}
