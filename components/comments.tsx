"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "@/components/ui/use-toast"

interface CommentsProps {
  slug: string
}

type Comment = {
  id: string
  name: string
  email: string
  content: string
  date: string
  avatar?: string
}

export function Comments({ slug }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      content:
        "This article was incredibly insightful! As an expat living in Berlin for the past 3 years, I can relate to so many of these experiences.",
      date: "2023-04-15T10:34:00Z",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      name: "Miguel Fernandez",
      email: "miguel@example.com",
      content:
        "I appreciate the practical tips in this post. The visa application process can be daunting, but your step-by-step guide made it much clearer.",
      date: "2023-04-16T15:21:00Z",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ])

  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    comment: z.string().min(10, {
      message: "Comment must be at least 10 characters.",
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send the comment to an API
    const newComment: Comment = {
      id: Date.now().toString(),
      name: values.name,
      email: values.email,
      content: values.comment,
      date: new Date().toISOString(),
    }

    setComments([...comments, newComment])
    form.reset()

    toast({
      title: "Comment submitted!",
      description: "Your comment has been added to the discussion.",
    })
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>

      <div className="space-y-6 mb-8">
        {comments.map((comment) => (
          <div key={comment.id} className="border rounded-lg p-4">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={comment.avatar} alt={comment.name} />
                <AvatarFallback>{comment.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{comment.name}</h3>
                  <time className="text-xs text-muted-foreground">{new Date(comment.date).toLocaleDateString()}</time>
                </div>

                <p className="text-muted-foreground">{comment.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Leave a comment</h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comment</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Share your thoughts..." className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Post Comment</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

