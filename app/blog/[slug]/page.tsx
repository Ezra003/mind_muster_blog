import { notFound } from "next/navigation"
import Image from "next/image"
import { format } from "date-fns"
import { allPosts } from "@/lib/mdx"
import { Mdx } from "@/components/mdx-components"
import { SharePost } from "@/components/share-post"
import { Comments } from "@/components/comments"
import { Newsletter } from "@/components/newsletter"
import { RelatedPosts } from "@/components/related-posts"
import { TableOfContents } from "@/components/table-of-contents"
import { ReadingProgress } from "@/components/reading-progress"

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Mind & Muster"],
      images: [
        {
          url: post.image || "/placeholder.svg?height=630&width=1200",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image || "/placeholder.svg?height=630&width=1200"],
    },
  }
}

export default function PostPage({ params }: PostPageProps) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Find related posts based on categories
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.categories.some((category) => post.categories.includes(category)))
    .slice(0, 3)

  return (
    <article className="min-h-screen">
      <ReadingProgress />

      <div className="container py-10 md:py-16">
        <div className="max-w-4xl mx-auto mb-10">
          <div className="mb-8 fade-in text-center">
            {post.categories.map((category) => (
              <span key={category} className="category-badge mr-2 mb-2 inline-block">
                {category}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-unbounded fade-in text-center">
            {post.title}
          </h1>

          <div className="flex items-center justify-center mb-8 opacity-80 slide-up">
            <div className="mr-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Mind & Muster"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="text-center">
              <p className="font-medium">Mind & Muster</p>
              <p className="text-sm">
                {format(new Date(post.date), "MMMM d, yyyy")} • {post.readingTime} min read
              </p>
            </div>
          </div>
        </div>

        {post.image && (
          <div className="mb-10 max-w-4xl mx-auto fade-in">
            <Image
              src={post.image || "/placeholder.svg?height=630&width=1200"}
              alt={post.title}
              width={1200}
              height={630}
              className="rounded-xl mx-auto"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />
            {post.imageCaption && <p className="text-center text-sm opacity-60 mt-2">{post.imageCaption}</p>}
          </div>
        )}

        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="blog-content mx-auto max-w-3xl">
                <Mdx code={post.body.code} />
              </div>
            </div>

            <div className="hidden lg:block">
              <TableOfContents />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <SharePost title={post.title} slug={post.slug} />
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Comments slug={post.slug} />
        </div>

        {relatedPosts.length > 0 && (
          <div className="max-w-4xl mx-auto mb-16">
            <RelatedPosts posts={relatedPosts} />
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <Newsletter />
        </div>
      </div>
    </article>
  )
}
