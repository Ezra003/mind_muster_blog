"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function TableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2, h3, h4"))
      .filter((element) => element.id)
      .map((element) => ({
        id: element.id,
        text: element.textContent || "",
        level: Number(element.tagName.substring(1)),
      }))

    setHeadings(headingElements)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" },
    )

    headingElements.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      headingElements.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  if (headings.length === 0) {
    return null
  }

  return (
    <div className="toc">
      <h4 className="text-lg font-bold mb-4 font-unbounded">Table of Contents</h4>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{
                paddingLeft: `${(heading.level - 2) * 1}rem`,
              }}
            >
              <a
                href={`#${heading.id}`}
                className={cn("toc-link", activeId === heading.id && "toc-link-active")}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

