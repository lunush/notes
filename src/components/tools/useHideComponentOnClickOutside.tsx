import { useEffect, useRef } from 'react'

function useHideComponentOnClickOutside(updateUI: any, type: any) {
  const ref = useRef(null)

  const handleClickOutside = (e: any) => {
    // @ts-ignore
    if (ref.current && !ref.current.contains(e.target)) {
      updateUI({ type, value: false })
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref }
}

export default useHideComponentOnClickOutside
