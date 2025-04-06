"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

interface SharePostProps {
  title: string
  slug: string
}

export function SharePost({ title, slug }: SharePostProps) {
  const baseUrl =
    typeof window !== "undefined" ? `${window.location.protocol}//${window.location.host}` : "https://yourname.com"

  const url = `${baseUrl}/blog/${slug}`

  const shareOptions = [
    {
      name: "Twitter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      name: "Facebook",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    },
  ]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    toast({
      title: "Link copied!",
      description: "The article link has been copied to your clipboard.",
    })
  }

  return (
    <div className="border-t border-b border-white border-opacity-10 py-6">
      <h3 className="font-bold mb-4 font-unbounded">Share this article</h3>
      <div className="flex flex-wrap gap-2">
        {shareOptions.map((option) => (
          <Button
            key={option.name}
            variant="outline"
            size="sm"
            onClick={() => window.open(option.url, "_blank")}
            aria-label={`Share on ${option.name}`}
            className="border-white border-opacity-10 bg-primary"
          >
            {option.icon}
            <span className="ml-2">{option.name}</span>
          </Button>
        ))}

        <Button
          variant="outline"
          size="sm"
          onClick={copyToClipboard}
          aria-label="Copy link"
          className="border-white border-opacity-10 bg-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          Copy Link
        </Button>
      </div>
    </div>
  )
}

