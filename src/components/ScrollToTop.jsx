import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Routing resets the scroll position, except when the URL carries a hash —
// then we jump to that section (nav links like "/#services" point across pages).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
