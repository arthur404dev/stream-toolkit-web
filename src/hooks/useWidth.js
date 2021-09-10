import { useRef, useState, useLayoutEffect } from "react"

const useWidth = ({ on = true /* no value means on */ } = {}) => {
  const ref = useRef()
  const [width, set] = useState(0)
  const widthRef = useRef(width)
  const [ro] = useState(
    () =>
      new ResizeObserver((packet) => {
        if (ref.current && widthRef.current !== ref.current.offsetWidth) {
          widthRef.current = ref.current.offsetWidth
          set(ref.current.offsetWidth)
        }
      }),
  )
  useLayoutEffect(() => {
    if (on && ref.current) {
      set(ref.current.offsetWidth)
      ro.observe(ref.current, {})
    }
    return () => ro.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [on, ref.current])
  return [width, ref]
}

export default useWidth
