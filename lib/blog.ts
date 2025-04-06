import { PostFrontMatter } from "@/types/post"
import { allPosts } from "@/lib/mdx"
import { format } from "date-fns"

export const formatDate = (date: string): string => {
  return format(new Date(date), "MMMM dd, yyyy")
}

export const getFeaturedPosts = (count: number = 3): PostFrontMatter[] => {
  return allPosts.slice(0, count)
}

export const getRecentPosts = (count: number = 5): PostFrontMatter[] => {
  return allPosts.slice(1, count + 1)
}

export const getPostsByCategory = (category: string): PostFrontMatter[] => {
  return allPosts.filter(post => post.categories?.includes(category))
}

export const getPostBySlug = (slug: string): PostFrontMatter | null => {
  return allPosts.find(post => post.slug === slug) || null
}

export const getCategories = (): string[] => {
  const categories = new Set<string>()
  allPosts.forEach(post => {
    if (post.categories) {
      post.categories.forEach(category => categories.add(category))
    }
  })
  return Array.from(categories)
}

export const getReadingTime = (text: string): number => {
  const wordsPerMinute = 200
  const words = text.replace(/<[^>]+>/g, "").split(/\s+/).length
  return Math.max(Math.ceil(words / wordsPerMinute), 1)
}

export const getWordCount = (text: string): number => {
  return text.replace(/<[^>]+>/g, "").split(/\s+/).length
}

export const getExcerpt = (text: string, length: number = 200): string => {
  const excerpt = text.replace(/<[^>]+>/g, "").slice(0, length)
  return excerpt + (text.length > length ? "..." : "")
}

export const getPostMetadata = (post: PostFrontMatter): {
  title: string
  description: string
  image: string
  date: string
  readingTime: string
  categories: string[]
} => {
  return {
    title: post.title || "Untitled Post",
    description: post.excerpt || "Read the full article to learn more.",
    image: post.coverImage || "/placeholder.svg",
    date: formatDate(post.date || ""),
    readingTime: `${getReadingTime(post.content)} min read`,
    categories: post.categories || []
  }
}
