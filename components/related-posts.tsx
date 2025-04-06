import Link from "next/link"
import Image from "next/image"
import type { Post } from "@/lib/mdx"

interface RelatedPostsProps {
  posts: Post[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 font-unbounded">Related Articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block overflow-hidden rounded-lg border border-white border-opacity-10 bg-primary hover-lift"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg?height=200&width=300"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
              />
            </div>

            <div className="p-4">
              <h3 className="font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">{post.title}</h3>
              <p className="text-sm opacity-60 line-clamp-2">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

