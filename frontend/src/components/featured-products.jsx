"use client"

import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProductCard } from "./product-card"

export function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      name: "Radiant Glow Foundation",
      price: 42.0,
      originalPrice: 52.0,
      rating: 4.8,
      reviews: 324,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Bestseller",
    },
    {
      id: 2,
      name: "Velvet Matte Lipstick",
      price: 28.0,
      rating: 4.9,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=300",
      badge: "New",
    },
    {
      id: 3,
      name: "Luminous Eye Palette",
      price: 65.0,
      rating: 4.7,
      reviews: 89,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Limited",
    },
    {
      id: 4,
      name: "Hydrating Face Serum",
      price: 38.0,
      originalPrice: 45.0,
      rating: 4.6,
      reviews: 203,
      image: "/placeholder.svg?height=300&width=300",
      badge: "Sale",
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-12 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">Trending Now</h2>
            <p className="text-gray-600">Our most popular products this month</p>
          </div>
          <Button variant="outline" className="w-full sm:w-auto bg-transparent">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
