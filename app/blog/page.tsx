import { Suspense } from "react"
import { allPosts } from "@/lib/mdx"
import { PostCard } from "@/components/post-card"
import { Pagination } from "@/components/pagination"
import { CategoryFilter } from "@/components/category-filter"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Blog | Mind & Muster",
  description: "Explore my latest articles on life, travel, tech, and entertainment.",
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string; category?: string }
}) {
  const page = Number(searchParams.page) || 1
  const category = searchParams.category

  // Get all unique categories
  const categories = Array.from(new Set(allPosts.flatMap((post) => post.categories)))

  // Filter posts by category if provided
  const filteredPosts = category ? allPosts.filter((post) => post.categories.includes(category)) : allPosts

  const postsPerPage = 9
  const totalPosts = filteredPosts.length
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  return (
    <div className="container py-10 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 font-unbounded fade-in">Blog</h1>
      <p className="text-xl opacity-80 mb-12 max-w-3xl slide-up">
        Explore my latest articles on life, travel, tech, and entertainment.
      </p>

      <CategoryFilter categories={categories} selectedCategory={category} />

      <Suspense fallback={<PostsSkeleton />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => <PostCard key={post.slug} post={post} />)
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-bold mb-2">No posts found</h3>
              <p className="opacity-80">
                No posts were found matching the selected category. Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </Suspense>

      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          basePath={`/blog${category ? `?category=${category}&` : "?"}`}
        />
      )}
    </div>
  )
}

function PostsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="rounded-xl border border-white border-opacity-10 bg-primary overflow-hidden">
          <Skeleton className="h-48 w-full" />
          <div className="p-6 space-y-4">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-4 w-20" />
              </div>
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
