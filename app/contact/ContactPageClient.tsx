"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

// Sample portfolio projects
const projects = [
  {
    title: "European Travel Guide",
    description: "A comprehensive guide to traveling across Europe as an expatriate.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Travel", "Guide", "Europe"],
    link: "#",
  },
  {
    title: "Tech Innovations Blog",
    description: "Analysis and insights on the latest technology trends affecting expatriates.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Technology", "Analysis", "Innovation"],
    link: "#",
  },
  {
    title: "Cultural Exchange Platform",
    description: "A platform connecting expatriates for cultural exchange and networking.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Community", "Networking", "Culture"],
    link: "#",
  },
  {
    title: "Expatriate Resources Hub",
    description: "Curated resources for expatriates living in various European countries.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Resources", "Expatriate", "Guide"],
    link: "#",
  },
]

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary blur-3xl"></div>
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-4xl font-bold md:text-5xl"
          >
            My Portfolio & Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground"
          >
            Explore my work and get in touch for collaborations, questions, or just to say hello.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center text-3xl font-bold"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold group-hover:text-accent">{project.title}</h3>
                  <p className="mb-4 text-muted-foreground">{project.description}</p>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-accent-foreground hover:text-accent"
                  >
                    View Project
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
                      className="ml-2"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-primary py-16">
        <div className="container px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">My Skills & Expertise</h2>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                category: "Content Creation",
                skills: ["Travel Writing", "Technical Documentation", "Blog Management", "SEO Optimization"],
              },
              {
                category: "Technical Skills",
                skills: ["Web Development", "Digital Marketing", "Data Analysis", "UX Research"],
              },
              {
                category: "Languages",
                skills: ["English (Native)", "French (Fluent)", "German (Intermediate)", "Spanish (Basic)"],
              },
              {
                category: "Other Expertise",
                skills: ["Project Management", "Public Speaking", "Community Building", "Event Organization"],
              },
            ].map((skillGroup, index) => (
              <div key={index} className="rounded-xl bg-background p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="mr-3 h-2 w-2 rounded-full bg-accent"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl rounded-xl border bg-card p-8 shadow-lg">
            <h2 className="mb-8 text-center text-3xl font-bold">Get In Touch</h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-bold">Contact Information</h3>

                <div className="mb-6 space-y-4">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
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
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
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
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">hello@yourname.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
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
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground">Berlin, Germany</p>
                    </div>
                  </div>
                </div>

                <h3 className="mb-4 text-xl font-bold">Connect With Me</h3>
                <div className="flex space-x-4">
                  {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((platform) => (
                    <a
                      key={platform}
                      href={`#${platform.toLowerCase()}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary transition-transform duration-300 hover:-translate-y-1"
                      aria-label={platform}
                    >
                      <span className="sr-only">{platform}</span>
                      {/* Simple placeholder for social icons */}
                      <div className="h-5 w-5 rounded-full bg-accent"></div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

