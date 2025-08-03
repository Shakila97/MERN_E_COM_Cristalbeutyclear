"use client"

import { Search, ShoppingBag, User, Heart, Truck, RotateCcw, Menu, ArrowRight, Shield, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const categories = [
    { name: "Face", image: "/placeholder.svg?height=200&width=200", count: "120+ products" },
    { name: "Eyes", image: "/placeholder.svg?height=200&width=200", count: "85+ products" },
    { name: "Lips", image: "/placeholder.svg?height=200&width=200", count: "65+ products" },
    { name: "Skincare", image: "/placeholder.svg?height=200&width=200", count: "95+ products" },
    { name: "Tools", image: "/placeholder.svg?height=200&width=200", count: "40+ products" },
    { name: "Fragrance", image: "/placeholder.svg?height=200&width=200", count: "30+ products" },
  ]

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top bar - Hidden on mobile */}
          <div className="hidden md:flex items-center justify-between py-2 text-sm text-gray-600 border-b">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1">
                <Truck className="h-4 w-4" />
                Free shipping over $50
              </span>
              <span className="flex items-center gap-1">
                <RotateCcw className="h-4 w-4" />
                30-day returns
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/track" className="hover:text-gray-900">
                Track Order
              </Link>
              <Link href="/help" className="hover:text-gray-900">
                Help
              </Link>
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-4">
            {/* Mobile menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <div className="flex flex-col gap-6 mt-6">
                    <Link href="/" className="text-2xl font-bold text-rose-600">
                      BeautyBloom
                    </Link>
                    <nav className="flex flex-col gap-4">
                      <Link href="/new" className="text-gray-700 hover:text-rose-600 font-medium py-2">
                        New Arrivals
                      </Link>
                      <Link href="/makeup" className="text-gray-700 hover:text-rose-600 font-medium py-2">
                        Makeup
                      </Link>
                      <Link href="/skincare" className="text-gray-700 hover:text-rose-600 font-medium py-2">
                        Skincare
                      </Link>
                      <Link href="/fragrance" className="text-gray-700 hover:text-rose-600 font-medium py-2">
                        Fragrance
                      </Link>
                      <Link href="/tools" className="text-gray-700 hover:text-rose-600 font-medium py-2">
                        Tools & Brushes
                      </Link>
                      <Link href="/brands" className="text-gray-700 hover:text-rose-600 font-medium py-2">
                        Brands
                      </Link>
                      <Link href="/sale" className="text-rose-600 hover:text-rose-700 font-medium py-2">
                        Sale
                      </Link>
                    </nav>
                    <div className="border-t pt-4 flex flex-col gap-4 text-sm text-gray-600">
                      <Link href="/track" className="hover:text-gray-900">
                        Track Order
                      </Link>
                      <Link href="/help" className="hover:text-gray-900">
                        Help
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <Link href="/" className="text-xl md:text-2xl font-bold text-rose-600">
              BeautyBloom
            </Link>

            {/* Search - Desktop */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input type="search" placeholder="Search for products, brands..." className="pl-10 pr-4 py-2 w-full" />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Mobile search toggle */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <Search className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  3
                </Badge>
              </Button>
            </div>
          </div>

          {/* Mobile search */}
          {isSearchOpen && (
            <div className="md:hidden pb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input type="search" placeholder="Search for products, brands..." className="pl-10 pr-4 py-2 w-full" />
              </div>
            </div>
          )}

          {/* Navigation - Desktop only */}
          <nav className="hidden md:block py-4">
            <ul className="flex items-center gap-8">
              <li>
                <Link href="/new" className="text-gray-700 hover:text-rose-600 font-medium">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/makeup" className="text-gray-700 hover:text-rose-600 font-medium">
                  Makeup
                </Link>
              </li>
              <li>
                <Link href="/skincare" className="text-gray-700 hover:text-rose-600 font-medium">
                  Skincare
                </Link>
              </li>
              <li>
                <Link href="/fragrance" className="text-gray-700 hover:text-rose-600 font-medium">
                  Fragrance
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-gray-700 hover:text-rose-600 font-medium">
                  Tools & Brushes
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-gray-700 hover:text-rose-600 font-medium">
                  Brands
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-rose-600 hover:text-rose-700 font-medium">
                  Sale
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-rose-50 to-pink-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-rose-100 text-rose-800 hover:bg-rose-100">New Collection</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Discover Your
                <span className="text-rose-600 block">Natural Beauty</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Premium cosmetics crafted with the finest ingredients to enhance your natural radiance. From everyday
                essentials to glamorous looks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700 w-full sm:w-auto">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  View Collection
                </Button>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Beauty model"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-4 md:p-6 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="bg-rose-100 p-2 rounded-full">
                    <Shield className="h-4 w-4 md:h-6 md:w-6 text-rose-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">Cruelty-Free</p>
                    <p className="text-xs md:text-sm text-gray-600">100% Ethical</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
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

      {/* Featured Products */}
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
              <Card
                key={product.id}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-rose-600 hover:bg-rose-600">{product.badge}</Badge>
                    <Button size="icon" variant="ghost" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      <Button size="sm" className="bg-rose-600 hover:bg-rose-700">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Limited Time Offer</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            Get 25% off on all skincare products. Use code GLOW25
          </p>
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 md:mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px]">
              <div className="text-xl md:text-2xl font-bold">2</div>
              <div className="text-xs md:text-sm">Days</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px]">
              <div className="text-xl md:text-2xl font-bold">14</div>
              <div className="text-xs md:text-sm">Hours</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px]">
              <div className="text-xl md:text-2xl font-bold">32</div>
              <div className="text-xs md:text-sm">Minutes</div>
            </div>
          </div>
          <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 w-full sm:w-auto">
            Shop Skincare
          </Button>
        </div>
      </section>

      {/* Newsletter */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold mb-4 text-rose-400">BeautyBloom</h3>
              <p className="text-gray-400 mb-4 max-w-sm">
                Your trusted partner in beauty, offering premium cosmetics and skincare products.
              </p>
              <div className="flex gap-4">
                <div className="bg-gray-800 p-2 rounded">
                  <div className="w-5 h-5 bg-rose-400 rounded"></div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="w-5 h-5 bg-rose-400 rounded"></div>
                </div>
                <div className="bg-gray-800 p-2 rounded">
                  <div className="w-5 h-5 bg-rose-400 rounded"></div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/makeup" className="hover:text-white transition-colors">
                    Makeup
                  </Link>
                </li>
                <li>
                  <Link href="/skincare" className="hover:text-white transition-colors">
                    Skincare
                  </Link>
                </li>
                <li>
                  <Link href="/fragrance" className="hover:text-white transition-colors">
                    Fragrance
                  </Link>
                </li>
                <li>
                  <Link href="/tools" className="hover:text-white transition-colors">
                    Tools & Brushes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:text-white transition-colors">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-white transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/sustainability" className="hover:text-white transition-colors">
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">© 2024 BeautyBloom. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-gray-400 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors text-center">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors text-center">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
