import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Clock } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { useReadingTime } from "@/lib/hooks/use-reading-time"
import { toast } from "@/hooks/use-toast"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Use custom Image component with next/image and lazy loading
    img: ({ src, alt, width = 800, height = 450 }) => {
      const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
      });

      return (
        <div className="my-8" ref={ref}>
          <Image
            src={src || "/placeholder.svg"}
            alt={alt || ""}
            width={Number(width)}
            height={Number(height)}
            className="rounded-lg mx-auto"
            sizes="(max-width: 768px) 100vw, 800px"
            priority={inView}
            loading="lazy"
          />
        </div>
      );
    },
    // Custom link component using next/link for internal links
    a: ({ href, children, ...props }) => {
      if (href && href.startsWith("/")) {
        return (
          <Link href={href} {...props}>
            {children}
          </Link>
        );
      }

      if (href && href.startsWith("#")) {
        return (
          <a href={href} {...props}>
            {children}
          </a>
        );
      }

      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    },
    // Custom heading styles with IDs for table of contents
    h1: ({ children, id }) => (
      <h1
        id={id}
        className="text-4xl font-bold mt-12 mb-6 font-unbounded scroll-mt-24"
      >
        {children}
      </h1>
    ),
    h2: ({ children, id }) => (
      <h2
        id={id}
        className="text-3xl font-bold mt-10 mb-4 font-unbounded scroll-mt-24"
      >
        {children}
      </h2>
    ),
    h3: ({ children, id }) => (
      <h3
        id={id}
        className="text-2xl font-bold mt-8 mb-4 font-unbounded scroll-mt-24"
      >
        {children}
      </h3>
    ),
    h4: ({ children, id }) => (
      <h4
        id={id}
        className="text-xl font-bold mt-6 mb-2 font-unbounded scroll-mt-24"
      >
        {children}
      </h4>
    ),
    // Custom blockquote with animation
    blockquote: ({ children }) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-l-4 border-accent pl-4 italic my-6"
      >
        {children}
      </motion.div>
    ),
    // Custom code block with line numbers and copy button
    pre: ({ children, className }) => {
      const language = className?.replace(/language-/, "") || "text";
      return (
        <div className="relative my-6">
          <button
            className="absolute top-2 right-2 bg-primary px-3 py-1.5 rounded text-sm hover:bg-accent hover:text-primary"
            onClick={() => {
              navigator.clipboard.writeText(children?.toString() || "");
              toast({
                title: "Copied to clipboard!",
                description: `Successfully copied ${language} code`,
              });
            }}
          >
            Copy
          </button>
          <pre className={cn(
            "bg-primary p-4 rounded-lg overflow-x-auto",
            className
          )}>
            {children}
          </pre>
        </div>
      );
    },
    // Inline code with copy button
    code: ({ children, className }) => {
      const language = className?.replace(/language-/, "") || "text";
      return (
        <span className={cn(
          "bg-primary px-1.5 py-0.5 rounded text-sm font-mono",
          className
        )}>
          {children}
        </span>
      );
    },
    // Custom table with sticky headers
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-primary">
            {children.props.children[0]}
          </thead>
          <tbody>{children.props.children[1]}</tbody>
        </table>
      </div>
    ),
    // Table header with sorting support
    th: ({ children }) => (
      <th className="border border-white border-opacity-10 px-4 py-2 text-left font-bold bg-primary">
        {children}
      </th>
    ),
    // Table cell with hover effect
    td: ({ children }) => (
      <td className="border border-white border-opacity-10 px-4 py-2 hover:bg-primary/50">
        {children}
      </td>
    ),
    // Custom list with icons
    ul: ({ children }) => (
      <ul className="list-disc pl-6 my-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 my-4">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="mb-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </li>
    ),
    // Custom paragraph with reading time
    p: ({ children }) => {
      const readingTime = useReadingTime(children.toString());
      return (
        <p className="my-4">
          {children}
          {readingTime && (
            <span className="block mt-2 text-sm text-muted-foreground">
              <Clock className="mr-1 inline h-4 w-4" />
              {readingTime} min read
            </span>
          )}
        </p>
      );
    },
    ...components,
  };
}
