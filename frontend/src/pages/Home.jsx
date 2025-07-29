"use client"

import { Search, ShoppingBag, User, Heart, Star, ArrowRight, Truck, Shield, RotateCcw } from "lucide-react"

import { Button } from "../components/button"
import { Input } from "../components/input"
import { Badge } from "../components/badge"
import { Card, CardContent } from "../components/card"


// Regular React replacements
const Image = ({ src, alt, className, width, height }) => (
  <img src={src} alt={alt} width={width} height={height} className={className} />
);

const Link = ({ href, children, ...props }) => (
  <a href={href} {...props}>{children}</a>
);


export default function Component() {
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

  const categories = [
    { name: "Face", image: "/placeholder.svg?height=200&width=200", count: "120+ products" },
    { name: "Eyes", image: "/placeholder.svg?height=200&width=200", count: "85+ products" },
    { name: "Lips", image: "/placeholder.svg?height=200&width=200", count: "65+ products" },
    { name: "Skincare", image: "/placeholder.svg?height=200&width=200", count: "95+ products" },
    { name: "Tools", image: "/placeholder.svg?height=200&width=200", count: "40+ products" },
    { name: "Fragrance", image: "/placeholder.svg?height=200&width=200", count: "30+ products" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 text-sm text-gray-600 border-b">
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
            <Link href="/" className="text-2xl font-bold text-rose-600">
              BeautyBloom
            </Link>

            {/* Search */}
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input type="search" placeholder="Search for products, brands..." className="pl-10 pr-4 py-2 w-full" />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
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

          {/* Navigation */}
          <nav className="py-4">
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
      <section className="relative bg-gradient-to-r from-rose-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-rose-100 text-rose-800 hover:bg-rose-100">New Collection</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Discover Your
                <span className="text-rose-600 block">Natural Beauty</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Premium cosmetics crafted with the finest ingredients to enhance your natural radiance. From everyday
                essentials to glamorous looks.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Collection
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Beauty model"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-rose-100 p-2 rounded-full">
                    <Shield className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Cruelty-Free</p>
                    <p className="text-sm text-gray-600">100% Ethical</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated collection of premium beauty products across all categories
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4 overflow-hidden rounded-full">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      width={120}
                      height={120}
                      className="mx-auto group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trending Now</h2>
              <p className="text-gray-600">Our most popular products this month</p>
            </div>
            <Button variant="outline">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Limited Time Offer</h2>
          <p className="text-xl mb-8 opacity-90">Get 25% off on all skincare products. Use code GLOW25</p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">2</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">14</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">32</div>
              <div className="text-sm">Minutes</div>
            </div>
          </div>
          <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
            Shop Skincare
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay in the Loop</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, beauty tips, and early access to new products
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button className="bg-rose-600 hover:bg-rose-700">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-rose-400">BeautyBloom</h3>
              <p className="text-gray-400 mb-4">
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
                  <Link href="/makeup" className="hover:text-white">
                    Makeup
                  </Link>
                </li>
                <li>
                  <Link href="/skincare" className="hover:text-white">
                    Skincare
                  </Link>
                </li>
                <li>
                  <Link href="/fragrance" className="hover:text-white">
                    Fragrance
                  </Link>
                </li>
                <li>
                  <Link href="/tools" className="hover:text-white">
                    Tools & Brushes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:text-white">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-white">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:text-white">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/sustainability" className="hover:text-white">
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex items-center justify-between">
            <p className="text-gray-400">© 2024 BeautyBloom. All rights reserved.</p>
            <div className="flex gap-6 text-gray-400">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
