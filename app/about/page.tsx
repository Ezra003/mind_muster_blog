import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About Me | Mind & Muster",
  description: "Learn about my background, experiences, and passion for travel, technology, and storytelling.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary blur-3xl"></div>
        </div>

        <div className="container relative z-10 px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl fade-in-element">About Me</h1>
            <p className="text-xl text-muted-foreground slide-in-element">
              Expatriate, traveler, tech enthusiast, and storyteller.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="mb-6 text-3xl font-bold">
                Hello, I'm <span className="text-accent">Mind & Muster</span>
              </h2>

              <div className="space-y-4 text-lg">
                <p>
                  I'm an expatriate currently based in Berlin, Germany, with a passion for exploring European cultures,
                  technology, and entertainment.
                </p>

                <p>
                  After growing up in the United States, I moved to Europe in 2018 and have been documenting my
                  experiences, insights, and adventures ever since. My background in journalism and technology has
                  shaped how I view and share stories from around the continent.
                </p>

                <p>
                  Through this blog, I aim to provide authentic perspectives on expatriate life, travel guides that go
                  beyond tourist hotspots, analysis of European tech trends, and cultural insights that help bridge
                  understanding between different worlds.
                </p>

                <p>
                  When I'm not writing or traveling, you'll find me experimenting with new technologies, attending local
                  cultural events, or enjoying a good book in one of Berlin's many cozy cafés.
                </p>
              </div>

              <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Button asChild>
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/blog">Read My Blog</Link>
                </Button>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative mx-auto aspect-square max-w-md">
                <div className="absolute inset-0 rounded-xl bg-accent/20 blur-xl"></div>
                <div className="relative overflow-hidden rounded-xl border-4 border-accent">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Mind & Muster"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="bg-primary py-16">
        <div className="container px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">My Journey</h2>

          <div className="mx-auto max-w-4xl">
            {[
              {
                year: "2018",
                title: "Moved to Europe",
                description: "Took the leap and relocated to Berlin, Germany to begin my European adventure.",
              },
              {
                year: "2019",
                title: "Started This Blog",
                description:
                  "Launched this blog to document my experiences and share insights with fellow expatriates and travelers.",
              },
              {
                year: "2020",
                title: "Expanded to Tech Writing",
                description:
                  "Began covering European tech trends and their impact on expatriate life and global innovation.",
              },
              {
                year: "2021",
                title: "Published Travel Guides",
                description:
                  "Released a series of in-depth travel guides for expatriates exploring different European regions.",
              },
              {
                year: "2022",
                title: "Started Podcast Series",
                description:
                  "Launched a companion podcast featuring interviews with expatriates and local experts across Europe.",
              },
              {
                year: "2023",
                title: "Present Day",
                description:
                  "Continuing to explore, write, and connect with readers while developing new content formats and collaborations.",
              },
            ].map((milestone, index) => (
              <div key={index} className="relative mb-8 pl-8">
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  {index + 1}
                </div>
                <div className="absolute bottom-0 left-3.5 top-8 w-1 bg-accent/30"></div>
                <div className="rounded-lg border bg-card p-4">
                  <div className="mb-1 font-bold text-accent">{milestone.year}</div>
                  <h3 className="mb-2 text-lg font-semibold">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">My Values & Approach</h2>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
            {[
              {
                title: "Authenticity",
                description:
                  "I share real experiences and honest perspectives, never sugar-coating the challenges of expatriate life.",
                icon: "🔍",
              },
              {
                title: "Cultural Respect",
                description:
                  "I approach every culture with respect and curiosity, seeking to understand rather than judge differences.",
                icon: "🌍",
              },
              {
                title: "Practical Utility",
                description:
                  "My content aims to be genuinely useful, providing actionable insights and practical information.",
                icon: "🛠️",
              },
              {
                title: "Continuous Learning",
                description:
                  "I'm always learning and evolving my perspectives as I experience more of what Europe has to offer.",
                icon: "📚",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="flex rounded-xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md"
              >
                <div className="mr-4 text-4xl">{value.icon}</div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl rounded-xl bg-background p-8 text-center shadow-lg">
            <h2 className="mb-4 text-3xl font-bold">Let's Connect</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Whether you're a fellow expatriate, a traveler planning your European adventure, or someone interested in
              collaboration, I'd love to hear from you.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
