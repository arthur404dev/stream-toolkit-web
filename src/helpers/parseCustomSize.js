import { parse } from "query-string"

const parseCS = (location) => {
  const { customSize, width, height } = parse(location.search)
  const isValid = JSON.parse(customSize)
  if (!isValid) {
    return null
  }
  if (!width || !height) {
    return null
  }
  const rex = /^\d+$/
  const response = { width, height }
  if (width.match(rex)) {
    response.width = `${width}px`
  }
  if (height.match(rex)) {
    response.height = `${height}px`
  }
  return response
}
export default parseCS
