import { parse } from 'query-string'

const parseCS = (location) => {
  const { customSize, width, height } = parse(location.search)
  if (!customSize) {
    return null
  }
  if (!width || !height) {
    return null
  }
  const reg = /^\d+$/
  if (width.match(reg) || height.match(reg)) {
    return { width: `${width}px`, height: `${height}px` }
  }
  return {
    width,
    height,
  }
}

export default parseCS
