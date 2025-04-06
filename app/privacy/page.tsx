"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function PrivacyPolicy() {
  return (
    <div className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold font-unbounded mb-8">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none">
          <p>Last updated: April 6, 2025</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to Expat Blog. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website. By using our website, you consent to the practices described in this policy.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>2.1 Personal Information</h3>
          <p>
            We may collect personal information that you voluntarily provide to us, such as your name, email address, and any other information you choose to share when:
          </p>
          <ul>
            <li>Subscribing to our newsletter</li>
            <li>Contacting us through our contact form</li>
            <li>Creating an account (if applicable)</li>
          </ul>

          <h3>2.2 Usage Data</h3>
          <p>
            We automatically collect certain information when you use our website, including:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use your information for the following purposes:
          </p>
          <ul>
            <li>To provide and maintain our services</li>
            <li>To contact you regarding your inquiries</li>
            <li>To send you updates about our blog (with your consent)</li>
            <li>To analyze and improve our website</li>
          </ul>

          <h2>4. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            We may use third-party services to help us provide, maintain, and improve our website. These services may collect information about your use of our website.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or destruction.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
          </ul>

          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-2">
            Email: [your-email@example.com](mailto:your-email@example.com)
          </p>
        </div>
      </motion.div>
    </div>
  )
}
