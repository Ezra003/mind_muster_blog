"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function TermsOfService() {
  return (
    <div className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold font-unbounded mb-8">Terms of Service</h1>

        <div className="prose prose-invert max-w-none">
          <p>Last updated: April 6, 2025</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            Welcome to Expat Blog. By accessing or using our website, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any of these terms, please do not use our website.
          </p>

          <h2>2. Website Content</h2>
          <h3>2.1 Intellectual Property</h3>
          <p>
            All content on this website, including text, images, logos, and software, is the property of Expat Blog or its content suppliers and is protected by copyright laws.
          </p>

          <h3>2.2 Content Usage</h3>
          <p>
            You may view and use the content for your personal, non-commercial purposes. You may not:
          </p>
          <ul>
            <li>Reproduce, distribute, or create derivative works without permission</li>
            <li>Use content for commercial purposes without authorization</li>
            <li>Remove or alter any copyright or trademark notices</li>
          </ul>

          <h2>3. User Conduct</h2>
          <p>
            You agree to use our website only for lawful purposes and in a manner that does not:
          </p>
          <ul>
            <li>Violate any laws or regulations</li>
            <li>Interfere with or disrupt our website</li>
            <li>Impersonate any person or entity</li>
            <li>Engage in spamming or other unauthorized communications</li>
          </ul>

          <h2>4. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of these websites. You access them at your own risk.
          </p>

          <h2>5. Disclaimer of Warranties</h2>
          <p>
            Our website is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the website will be error-free or uninterrupted.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, we will not be liable for any damages arising from your use of our website, including but not limited to direct, indirect, incidental, or consequential damages.
          </p>

          <h2>7. Indemnification</h2>
          <p>
            You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from your use of our website or violation of these Terms of Service.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Your continued use of our website after any changes constitutes your acceptance of the new terms.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of [Your Jurisdiction].
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="mt-2">
            Email: [your-email@example.com](mailto:your-email@example.com)
          </p>
        </div>
      </motion.div>
    </div>
  )
}
