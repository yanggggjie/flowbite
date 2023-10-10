import { useEffect, useRef, useState } from 'react'

function useClickOutSize() {
  const [clickOutSide, setClickOutSide] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    // reset
    if (clickOutSide) {
      setClickOutSide(false)
    }
  }, [clickOutSide])

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        console.log('You clicked outside of me!')
        setClickOutSide(true)
      }
    }
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])
  return {
    ref,
    clickOutSide,
  }
}
