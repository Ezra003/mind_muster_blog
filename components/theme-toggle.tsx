"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className="rounded-full"
    >
      <motion.div
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {theme === "light" ? (
          <Sun className="h-5 w-5 text-accent" />
        ) : (
          <Moon className="h-5 w-5 text-accent" />
        )}
      </motion.div>
    </Button>
  )
}
