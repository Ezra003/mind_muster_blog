import { useEffect, useState } from "react"

interface ReadingTimeOptions {
  wordsPerMinute?: number
  minReadingTime?: number
}

export function useReadingTime(
  text: string,
  options: ReadingTimeOptions = {}
) {
  const { wordsPerMinute = 200, minReadingTime = 1 } = options
  const [readingTime, setReadingTime] = useState<number | null>(null)

  useEffect(() => {
    if (!text) {
      setReadingTime(null)
      return
    }

    // Remove HTML tags and extract text content
    const cleanText = text.replace(/<[^>]+>/g, "")
    
    // Remove non-word characters and split into words
    const words = cleanText.replace(/[^\w\s]/g, "").split(/\s+/)
    
    // Calculate reading time in minutes
    const minutes = Math.max(Math.ceil(words.length / wordsPerMinute), minReadingTime)
    
    setReadingTime(minutes)
  }, [text, wordsPerMinute, minReadingTime])

  return readingTime
}
