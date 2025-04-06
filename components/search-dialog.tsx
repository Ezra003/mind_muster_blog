"use client"

import { useEffect, useRef } from "react"
import { useSearch } from "@/components/search-provider"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { format } from "date-fns"
import { Search } from "lucide-react"

interface SearchDialogProps {
  onSelect: (slug: string) => void
}

export function SearchDialog({ onSelect }: SearchDialogProps) {
  const { isOpen, onClose, results, query, setQuery } = useSearch()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="search-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="search-container"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 mb-4">
              <Search className="h-5 w-5 text-accent" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search articles..."
                className="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="text-xs opacity-60 hidden md:block">ESC to close</div>
            </div>

            <div className="search-results">
              {results.length === 0 && query && (
                <div className="p-4 text-center opacity-60">No results found for "{query}"</div>
              )}

              {results.map((post) => (
                <div key={post.slug} className="search-result-item flex gap-4" onClick={() => onSelect(post.slug)}>
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={post.image || "/placeholder.svg?height=64&width=64"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{post.title}</h4>
                    <p className="text-sm opacity-60 line-clamp-1">{post.description}</p>
                    <div className="mt-1 flex items-center gap-2 text-xs opacity-60">
                      <span>{format(new Date(post.date), "MMM d, yyyy")}</span>
                      <span>•</span>
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
