"use client"

import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { Post } from "@/lib/mdx"

interface FeaturedPostProps {
  post: Post
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
        <div className="space-y-4">
          <div className="space-y-2">
            {post.categories.map((category) => (
              <span key={category} className="category-badge mr-2">
                {category}
              </span>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold font-unbounded">
            <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
              {post.title}
            </Link>
          </h2>

          <p className="opacity-80">{post.description}</p>

          <div className="flex items-center space-x-4">
            <Image
              src={post.authorImage || "/placeholder.svg?height=40&width=40"}
              alt={post.author}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">Mind & Muster</p>
              <p className="text-sm opacity-60">{format(new Date(post.date), "MMMM d, yyyy")}</p>
            </div>
          </div>

          <Button asChild>
            <Link href={`/blog/${post.slug}`}>Read Article</Link>
          </Button>
        </div>

        <div className="relative h-64 md:h-auto overflow-hidden rounded-lg order-first md:order-last">
          <Image
            src={post.image || "/placeholder.svg?height=400&width=600"}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </motion.div>
  )
}
