import { Frontmatter } from "@mdx-js/mdx"

export interface PostFrontMatter extends Frontmatter {
  title: string
  date: string
  description?: string
  excerpt?: string
  coverImage?: string
  categories?: string[]
  tags?: string[]
  slug: string
  content: string
  readingTime?: number
  wordCount?: number
}

export interface PostMetadata {
  title: string
  description: string
  image: string
  date: string
  readingTime: string
  categories: string[]
}

export interface PostCardProps {
  post: PostFrontMatter
  className?: string
}

export interface FeaturedPostProps {
  post: PostFrontMatter
  className?: string
}

export interface CategoryProps {
  title: string
  description: string
  icon: string
  count: number
  className?: string
}
