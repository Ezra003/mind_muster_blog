"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { allPosts } from "@/lib/mdx"
import { SearchDialog } from "@/components/search-dialog"

type SearchContextType = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  search: (query: string) => void
  results: any[]
  query: string
  setQuery: (query: string) => void
}

const SearchContext = createContext<SearchContextType>({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
  search: () => {},
  results: [],
  query: "",
  setQuery: () => {},
})

export const useSearch = () => useContext(SearchContext)

export function SearchProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const router = useRouter()

  // Handle keyboard shortcut to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const search = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    const searchTerms = searchQuery.toLowerCase().split(" ")

    const filteredResults = allPosts.filter((post) => {
      const postText = `${post.title} ${post.description} ${post.categories.join(" ")}`.toLowerCase()
      return searchTerms.every((term) => postText.includes(term))
    })

    setResults(filteredResults)
  }

  useEffect(() => {
    search(query)
  }, [query])

  const handleSelect = (slug: string) => {
    router.push(`/blog/${slug}`)
    setIsOpen(false)
    setQuery("")
  }

  return (
    <SearchContext.Provider
      value={{
        isOpen,
        onOpen: () => setIsOpen(true),
        onClose: () => setIsOpen(false),
        search,
        results,
        query,
        setQuery,
      }}
    >
      {children}
      <SearchDialog onSelect={handleSelect} />
    </SearchContext.Provider>
  )
}

