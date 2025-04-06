"use client"

import { useState, useEffect } from "react"

export function ReadingProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const scrollPercent = scrollTop / (docHeight - winHeight)
      const scrollPercentRounded = Math.round(scrollPercent * 100)
      setWidth(scrollPercentRounded)
    }

    window.addEventListener("scroll", updateProgress)
    updateProgress()

    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return <div className="progress-bar" style={{ width: `${width}%` }} />
}

