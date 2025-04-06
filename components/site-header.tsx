"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"
import { useSearch } from "@/components/search-provider"
import { Sun, Moon, Search, Menu, X, Home, BookOpen, User, Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const { onOpen } = useSearch()
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsSearchOpen(false)
  }, [pathname])

  const navItems = [
    { href: "/", label: "Home", icon: <Home className="h-5 w-5" /> },
    { href: "/blog", label: "Blog", icon: <BookOpen className="h-5 w-5" /> },
    { href: "/about", label: "About", icon: <User className="h-5 w-5" /> },
    { href: "/contact", label: "Contact", icon: <Mail className="h-5 w-5" /> },
  ]

  const handleSearch = () => {
    onOpen()
    setIsSearchOpen(true)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "border-b border-white border-opacity-10 bg-background bg-opacity-95 backdrop-blur-xl shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
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

        <nav className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex items-center px-2 py-1 transition-all duration-200 nav-link",
                pathname === item.href
                  ? "text-accent"
                  : "text-foreground hover:text-accent",
              )}
              onClick={() => {
                if (pathname === item.href) {
                  toast({
                    title: "Page Refreshed",
                    description: `Reloaded ${item.label} page`,
                  })
                }
              }}
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
              {pathname === item.href && (
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent"
                  layoutId="active-link"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSearch}
            className="hidden md:flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>

          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container border-t border-white border-opacity-10 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group flex items-center px-2 py-1 transition-all duration-200 nav-link",
                      pathname === item.href
                        ? "text-accent"
                        : "text-foreground hover:text-accent",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                    {pathname === item.href && (
                      <motion.div
                        className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent"
                        layoutId="active-link"
                      />
                    )}
                  </Link>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSearch}
                  className="flex items-center justify-start px-0 w-full"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsSearchOpen(false)
              onOpen()
            }}
          />
        )}
      </AnimatePresence>
    </header>
  )
}
