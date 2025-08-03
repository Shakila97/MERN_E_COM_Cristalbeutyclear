"use client"

import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"

export function CategoriesSection() {
  const categories = [
    { name: "Face", image: "/placeholder.svg?height=200&width=200", count: "120+ products" },
    { name: "Eyes", image: "/placeholder.svg?height=200&width=200", count: "85+ products" },
    { name: "Lips", image: "/placeholder.svg?height=200&width=200", count: "65+ products" },
    { name: "Skincare", image: "/placeholder.svg?height=200&width=200", count: "95+ products" },
    { name: "Tools", image: "/placeholder.svg?height=200&width=200", count: "40+ products" },
    { name: "Fragrance", image: "/placeholder.svg?height=200&width=200", count: "30+ products" },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Explore our curated collection of premium beauty products across all categories
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 bg-white"
            >
              <CardContent className="p-4 md:p-6 text-center">
                <div className="relative mb-3 md:mb-4 overflow-hidden rounded-full">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={120}
                    height={120}
                    className="mx-auto group-hover:scale-110 transition-transform duration-300 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{category.name}</h3>
                <p className="text-xs md:text-sm text-gray-500">{category.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
