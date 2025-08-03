"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Stay in the Loop</h2>
        <p className="text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
          Subscribe to our newsletter for exclusive offers, beauty tips, and early access to new products
        </p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <Input type="email" placeholder="Enter your email" className="flex-1" />
          <Button className="bg-rose-600 hover:bg-rose-700 w-full sm:w-auto">Subscribe</Button>
        </div>
      </div>
    </section>
  )
}
