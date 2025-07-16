import { useEffect, useState } from 'react'

const threshold = 150

export function useHeaderScrollTransition(
  headerRef: React.RefObject<HTMLElement | null>
) {
  const [lastPos, setLastPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      let currPos = window.scrollY

      if (Math.abs(currPos - lastPos) >= threshold) {
        if (currPos > lastPos) {
          headerRef.current?.setAttribute('data-scrolled', 'true')
        } else {
          headerRef.current?.setAttribute('data-scrolled', 'false')
        }
        setLastPos(currPos)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastPos])
}
