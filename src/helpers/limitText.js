const limitText = (text, limit) => {
  const aboveLimit = text.length > limit
  const trailingDots = aboveLimit ? "..." : ""
  const finalText = text.substring(0, limit) + trailingDots
  return finalText
}

export default limitText
