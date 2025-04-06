import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SearchProvider } from "@/components/search-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Expat Blog - Global Perspectives and Insights",
  description: "Personal insights on life, adventures, tech, and entertainment from a global perspective.",
  keywords: [
    "blog",
    "expat",
    "global perspectives",
    "travel",
    "technology",
    "entertainment"
  ],
  authors: [{ name: "Mind & Muster" }],
  creator: "Mind & Muster",
  publisher: "Mind & Muster",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Expat Blog",
    description: "Personal insights on life, adventures, tech, and entertainment from a global perspective.",
    url: "https://your-blog.com",
    siteName: "Expat Blog",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Expat Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expat Blog",
    description: "Personal insights on life, adventures, tech, and entertainment from a global perspective.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SearchProvider>
            <Toaster />
            <SiteHeader />
            <main className="min-h-screen flex flex-col">
              {children}
            </main>
            <SiteFooter />
            <Analytics />
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}