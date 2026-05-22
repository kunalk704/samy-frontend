import { useEffect, useRef, useState } from 'react'

/**
 * Hook to trigger animations when element scrolls into view
 * Usage: const ref = useScrollReveal({ threshold: 0.1 })
 * Then: <div ref={ref} className={isVisible ? 'animate-fade-up' : 'opacity-0'}>
 */
export function useScrollReveal(options = {}) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = false } = options
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}