"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setEmail("")

    toast({
      title: "Subscribed!",
      description: "You've successfully subscribed to our newsletter.",
    })
  }

  return (
    <motion.div
      className="mx-auto max-w-3xl rounded-xl bg-background p-8 shadow-lg border border-white border-opacity-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold font-unbounded">Stay Updated</h2>
        <p className="mb-6 opacity-80">
          Subscribe to my newsletter to receive updates on new articles and exclusive content.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-primary border-white border-opacity-10"
          />
          <Button type="submit" disabled={isSubmitting} className="btn-primary">
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-background"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Subscribing...
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>

        <p className="mt-4 text-xs opacity-60">I respect your privacy. Unsubscribe at any time.</p>
      </div>
    </motion.div>
  )
}

