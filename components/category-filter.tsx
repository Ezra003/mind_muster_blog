"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CategoryFilterProps {
  categories: string[]
  selectedCategory?: string
}

export function CategoryFilter({ categories, selectedCategory }: CategoryFilterProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleCategoryChange = (category?: string) => {
    if (category) {
      router.push(`${pathname}?category=${category}`)
    } else {
      router.push(pathname)
    }
  }

  return (
    <div className="mb-8 overflow-x-auto pb-2">
      <div className="flex space-x-2 min-w-max">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCategoryChange()}
          className={cn(
            "rounded-full",
            !selectedCategory && "bg-accent text-background hover:bg-accent hover:brightness-90",
          )}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant="ghost"
            size="sm"
            onClick={() => handleCategoryChange(category)}
            className={cn(
              "rounded-full",
              selectedCategory === category && "bg-accent text-background hover:bg-accent hover:brightness-90",
            )}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}

