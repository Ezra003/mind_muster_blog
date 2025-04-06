"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { allPosts } from "@/lib/mdx"
import { PostCard } from "@/components/post-card"
import { Button } from "@/components/ui/button"
import { FeaturedPost } from "@/components/featured-post"
import { Newsletter } from "@/components/newsletter"
import { Globe, Briefcase, Laptop, Film } from "lucide-react"

export default function HomePage() {
  // Get the most recent posts
  const featuredPost = allPosts[0]
  const recentPosts = allPosts.slice(1, 7)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="gradient-blur"></div>

        <div className="container relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Exploring Life <span className="text-accent">& Beyond</span>
              </h1>
              <p className="mb-8 text-xl opacity-80 md:pr-8">
                Personal insights on life, adventures, tech, and entertainment from a global perspective.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start">
                <Button size="lg" className="btn-primary" asChild>
                  <Link href="/blog">Read My Blog</Link>
                </Button>
                <Button size="lg" variant="outline" className="btn-outline" asChild>
                  <Link href="/contact">View Portfolio</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto aspect-square max-w-md"
            >
              <div className="absolute inset-0 rounded-full bg-accent opacity-20 blur-xl"></div>
              <div className="relative overflow-hidden rounded-full border-4 border-accent">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Mind & Muster"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-16 bg-primary">
        <div className="container">
          <h2 className="section-title">Featured Article</h2>
          <FeaturedPost post={featuredPost} />
        </div>
      </section>

      {/* Categories Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What I Write About</h2>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                title: "Life",
                description: "My experiences and reflections on everyday life",
                icon: <Globe className="h-10 w-10" />,
              },
              {
                title: "Travel",
                description: "Guides and stories from my adventures around the world",
                icon: <Briefcase className="h-10 w-10" />,
              },
              {
                title: "Tech",
                description: "Thoughts on technology and digital innovation",
                icon: <Laptop className="h-10 w-10" />,
              },
              {
                title: "Entertainment",
                description: "Reviews and perspectives on films, books, and more",
                icon: <Film className="h-10 w-10" />,
              },
            ].map((category) => (
              <motion.div key={category.title} variants={item}>
                <Link
                  href={`/blog/category/${category.title.toLowerCase().replace(" ", "-")}`}
                  className="group relative overflow-hidden rounded-xl bg-background p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] block h-full"
                >
                  <div className="mb-4 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold font-unbounded group-hover:text-accent">{category.title}</h3>
                  <p className="opacity-80">{category.description}</p>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="section bg-primary">
        <div className="container">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <h2 className="text-3xl font-bold font-unbounded">Recent Articles</h2>
            <Link href="/blog" className="group flex items-center text-accent hover:text-accent hover:brightness-90">
              View all articles
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {recentPosts.map((post, index) => (
              <motion.div key={post.slug} variants={item}>
                <PostCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section">
        <div className="container">
          <Newsletter />
        </div>
      </section>
    </div>
  )
}
