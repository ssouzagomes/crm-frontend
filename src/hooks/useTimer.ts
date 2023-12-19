import { useEffect, useRef, useState } from 'react'

const useTimer = (seconds = 30) => {
  const [timeLeft, setTimeLeft] = useState(seconds)
  const [counting, setCounting] = useState(false)
  const intervalRef = useRef(0)

  function restartTimer() {
    setTimeLeft(seconds)
    setCounting(true)
  }

  useEffect(() => {
    if (!counting) return setCounting(false)

    intervalRef.current = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 0) {
          clearInterval(intervalRef.current)
          setCounting(false)
          return 0
        }
        return t - 1
      })
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [counting])

  return { timeLeft, restartTimer, counting }
}

export default useTimer
