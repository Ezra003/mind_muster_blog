"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"
import { Mail, Twitter, Instagram, Linkedin, Github, Globe, Briefcase, Laptop, Film, Home, BookOpen, User } from "lucide-react"

export function SiteFooter() {
  const { toast } = useToast()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive updates about new articles and content.",
    })
  }

  return (
    <footer className="border-t border-white border-opacity-10 bg-primary py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center space-x-2 group">
              <motion.div
                className="h-8 w-8 rounded-full bg-accent flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-bold">M</span>
              </motion.div>
              <span className="text-xl font-bold font-unbounded group-hover:text-accent transition-colors">
                Mind & Muster
              </span>
            </Link>
            <p className="mb-6 opacity-80">Personal insights on life, adventures, tech, and entertainment from a global perspective.</p>
            <div className="flex space-x-4 flex-wrap">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-background transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-accent" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold font-unbounded">Navigation</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home", icon: <Home className="h-5 w-5" /> },
                { href: "/blog", label: "Blog", icon: <BookOpen className="h-5 w-5" /> },
                { href: "/about", label: "About", icon: <User className="h-5 w-5" /> },
                { href: "/contact", label: "Contact", icon: <Mail className="h-5 w-5" /> },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 opacity-80 transition-colors hover:text-accent nav-link"
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold font-unbounded">Categories</h3>
            <ul className="space-y-3">
              {[
                { name: "Life", icon: <Globe className="h-5 w-5" /> },
                { name: "Travel", icon: <Briefcase className="h-5 w-5" /> },
                { name: "Tech", icon: <Laptop className="h-5 w-5" /> },
                { name: "Entertainment", icon: <Film className="h-5 w-5" /> },
              ].map((category) => (
                <li key={category.name}>
                  <Link
                    href={`/blog?category=${category.name.toLowerCase()}`}
                    className="flex items-center space-x-2 opacity-80 transition-colors hover:text-accent nav-link"
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-bold font-unbounded">Subscribe</h3>
            <p className="mb-4 opacity-80">Stay updated with my latest articles and news.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-l-md border border-r-0 border-white border-opacity-10 bg-background px-8 py-1.5 focus:outline-none focus:ring-1 focus:ring-accent"
                  required
                />
              </div>
              <button
                type="submit"
                className="rounded-r-md bg-accent px-4 py-1.5 text-background transition-colors hover:bg-accent hover:brightness-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white border-opacity-10 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm opacity-60"> 2025 Expat Blog. All rights reserved.</p>
            <div className="mt-4 flex space-x-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm opacity-60 transition-colors hover:text-accent nav-link"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm opacity-60 transition-colors hover:text-accent nav-link"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
