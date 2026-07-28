import { useEffect, useState } from 'react'
import { useScrollReveal } from './useScrollReveal'

/**
 * Хук для анимации счётчика от 0 до target при появлении в зоне видимости
 */
export function useCountUp(target: number, duration = 1800) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    let frameId: number

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // easeOutExpo для плавного замедления
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [isVisible, target, duration])

  return { ref, count }
}
