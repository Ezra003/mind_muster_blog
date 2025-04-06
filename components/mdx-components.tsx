"use client"
import Image from "next/image"

interface MdxProps {
  code: string
}

// A simplified MDX renderer that works with our mock data
export function Mdx({ code }: MdxProps) {
  // For our mock implementation, we'll just render the content as-is
  // In a real implementation, you would use a proper MDX renderer
  return (
    <div className="mdx">
      {/* Render a placeholder paragraph since we don't have real MDX content */}
      <p>
        {code ||
          "This is a placeholder for the MDX content. In a real implementation, this would be rendered using a proper MDX processor."}
      </p>

      {/* Add some mock content to make the blog post look more realistic */}
      <h2>Introduction</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl
        aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam
        nisl, eu aliquam nisl nisl sit amet nisl.
      </p>

      <h2>Main Content</h2>
      <p>
        Phasellus ac dolor vel risus tincidunt interdum. Nullam vulputate, ipsum at dignissim pharetra, sapien nisi
        feugiat ante, id feugiat enim massa non turpis. Nunc ut sollicitudin arcu. Vivamus fermentum elementum neque, et
        sollicitudin velit pharetra at.
      </p>

      <Image
        src="/placeholder.svg?height=400&width=800"
        alt="Placeholder image"
        width={800}
        height={400}
        className="my-8 rounded-lg"
      />

      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>

      <h2>Conclusion</h2>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
        rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur.
      </p>
    </div>
  )
}

