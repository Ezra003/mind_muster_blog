"use client"

import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import type { Post } from "@/lib/mdx"

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-white border-opacity-10 bg-primary hover-lift h-full">
      <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">View {post.title}</span>
      </Link>

      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background opacity-50"></div>
        <Image
          src={post.image || "/placeholder.svg?height=400&width=600"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {post.categories.length > 0 && (
          <div className="absolute top-4 left-4 z-20">
            <span className="category-badge">{post.categories[0]}</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold font-unbounded transition-colors group-hover:text-accent line-clamp-2">
          {post.title}
        </h3>

        <p className="mb-4 line-clamp-2 text-sm opacity-80">{post.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src={post.authorImage || "/placeholder.svg?height=24&width=24"}
              alt={post.author}
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="text-xs opacity-60">Mind & Muster</span>
          </div>

          <time className="text-xs opacity-60">{format(new Date(post.date), "MMM d, yyyy")}</time>
        </div>
      </div>
    </article>
  )
}
