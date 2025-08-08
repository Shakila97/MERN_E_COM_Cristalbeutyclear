"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Search, ShoppingBag, User, Heart, Truck, RotateCcw, Menu, ArrowRight, Shield, Star, X } from 'lucide-react'
import ProductPage from "./pages/Product"; // 👈 Adjust path if needed
import NewArrivalsPage from "./pages/NewArrivals"


<Route path="/product/:id" element={<ProductPage />} />



function App() {
const [isMenuOpen, setIsMenuOpen] = useState(false)
const [isSearchOpen, setIsSearchOpen] = useState(false)

const categories = [
  {
    name: "Face",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop&crop=face",
    count: "120+ products",
  },
  {
    name: "Eyes",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=200&h=200&fit=crop&crop=face",
    count: "85+ products",
  },
  {
    name: "Lips",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=200&h=200&fit=crop&crop=face",
    count: "65+ products",
  },
  {
    name: "Skincare",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=200&h=200&fit=crop&crop=face",
    count: "95+ products",
  },
  {
    name: "Tools",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=200&fit=crop&crop=face",
    count: "40+ products",
  },
  {
    name: "Fragrance",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop&crop=face",
    count: "30+ products",
  },
]

const featuredProducts = [
  {
    id: 1,
    name: "Radiant Glow Foundation",
    price: 42.0,
    originalPrice: 52.0,
    rating: 4.8,
    reviews: 324,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Velvet Matte Lipstick",
    price: 28.0,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop",
    badge: "New",
  },
  {
    id: 3,
    name: "Luminous Eye Palette",
    price: 65.0,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=300&h=300&fit=crop",
    badge: "Limited",
  },
  {
    id: 4,
    name: "Hydrating Face Serum",
    price: 38.0,
    originalPrice: 45.0,
    rating: 4.6,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=300&h=300&fit=crop",
    badge: "Sale",
  },
]

return (
  <Router>
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-[Auto] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top bar - Hidden on mobile */}
          <div className="hidden md:flex items-center justify-between py-2 text-sm text-gray-600 border-b">
            <div className="flex items-center space-x-6">
              <span className="flex items-center space-x-1">
                <Truck className="h-4 w-4" />
                <span>Free shipping over $50</span>
              </span>
              <span className="flex items-center space-x-1">
                <RotateCcw className="h-4 w-4" />
                <span>30-day returns</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/track" className="hover:text-gray-900 transition-colors">
                Track Order
              </Link>
              <Link to="/help" className="hover:text-gray-900 transition-colors">
                Help
              </Link>
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-4">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Logo */}
            <Link to="/" className="text-xl md:text-2xl font-bold text-rose-600">
              CrystalBeutyclear
            </Link>

            {/* Search - Desktop */}
            <div className="hidden md:flex flex-1 max-w- mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="search"
                  placeholder="Search for products, brands..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Mobile search toggle */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>

              <button className="hidden sm:flex p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                <User className="h-5 w-5" />
              </button>
              <button className="hidden sm:flex p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                <Heart className="h-5 w-5" />
              </button>
              <button className="relative p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>

          {/* Mobile search */}
          {isSearchOpen && (
            <div className="md:hidden pb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="search"
                  placeholder="Search for products, brands..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
          )}

          {/* Navigation - Desktop */}
          <nav className="hidden md:block py-4">
            <ul className="flex items-center space-x-8">
              <li>
                <Link to="/NewArrivals" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/makeup" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
                  Makeup
                </Link>
              </li>
              <li>
                <Link to="/skincare" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
                  Skincare
                </Link>
              </li>
              <li>
                <Link to="/fragrance" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
                  Fragrance
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
                  Tools & Brushes
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
                  Brands
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-rose-600 hover:text-rose-700 font-medium transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <nav className="space-y-4">
                <Link
                  to="/new"
                  className="block text-gray-700 hover:text-rose-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  New Arrivals
                </Link>
                <Link
                  to="/makeup"
                  className="block text-gray-700 hover:text-rose-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Makeup
                </Link>
                <Link
                  to="/skincare"
                  className="block text-gray-700 hover:text-rose-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skincare
                </Link>
                <Link
                  to="/fragrance"
                  className="block text-gray-700 hover:text-rose-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fragrance
                </Link>
                <Link
                  to="/tools"
                  className="block text-gray-700 hover:text-rose-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tools & Brushes
                </Link>
                <Link
                  to="/brands"
                  className="block text-gray-700 hover:text-rose-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Brands
                </Link>
                <Link
                  to="/sale"
                  className="block text-rose-600 hover:text-rose-700 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sale
                </Link>
              </nav>
              <div className="border-t pt-4 space-y-4 text-sm text-gray-600">
                <Link to="/track" className="block hover:text-gray-900 transition-colors">
                  Track Order
                </Link>
                <Link to="/help" className="block hover:text-gray-900 transition-colors">
                  Help
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Hero Section */}
              <section className="relative bg-gradient-to-r from-rose-50 to-pink-50 py-12 md:py-20 lg:py-24">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="text-center lg:text-left order-2 lg:order-1">
                      <span className="inline-block bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        New Collection
                      </span>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Discover Your
                        <span className="text-rose-600 block">Natural Beauty</span>
                      </h1>
                      <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                        Premium cosmetics crafted with the finest ingredients to enhance your natural radiance. From
                        everyday essentials to glamorous looks.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                          Shop Now
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                        <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors">
                          View Collection
                        </button>
                      </div>
                    </div>
                    <div className="relative order-1 lg:order-2">
                      <img
                        src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=700&fit=crop&crop=face"
                        alt="Beauty model"
                        className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover"
                      />
                      <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-4 md:p-6 rounded-xl shadow-lg max-w-xs">
                        <div className="flex items-center space-x-3">
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
              <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      Shop by Category
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                      Explore our curated collection of premium beauty products across all categories
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="group cursor-pointer bg-white rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="relative mb-3 md:mb-4 overflow-hidden rounded-full mx-auto w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                          <img
                            src={category.image || "/placeholder.svg"}
                            alt={category.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{category.name}</h3>
                        <p className="text-xs md:text-sm text-gray-500">{category.count}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Featured Products */}
              <section className="py-12 md:py-16 lg:py-20">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-12 gap-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
                        Trending Now
                      </h2>
                      <p className="text-gray-600 text-lg">Our most popular products this month</p>
                    </div>
                    <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors flex items-center">
                      View All
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {featuredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <span className="absolute top-3 left-3 bg-rose-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                            {product.badge}
                          </span>
                          <button className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
                            <Heart className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                            {product.name}
                          </h3>
                          <div className="flex items-center space-x-1 mb-2">
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
                            <div className="flex items-center space-x-2">
                              <span className="text-lg font-bold text-gray-900">${product.price}</span>
                              {product.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                              )}
                            </div>
                            <button className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Promotional Banner */}
              <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-rose-600 to-pink-600">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Limited Time Offer</h2>
                  <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
                    Get 25% off on all skincare products. Use code GLOW25
                  </p>
                  <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-6 md:mb-8">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px]">
                      <div className="text-xl md:text-2xl lg:text-3xl font-bold">2</div>
                      <div className="text-xs md:text-sm">Days</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px]">
                      <div className="text-xl md:text-2xl lg:text-3xl font-bold">14</div>
                      <div className="text-xs md:text-sm">Hours</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px]">
                      <div className="text-xl md:text-2xl lg:text-3xl font-bold">32</div>
                      <div className="text-xs md:text-sm">Minutes</div>
                    </div>
                  </div>
                  <button className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
                    Shop Skincare
                  </button>
                </div>
              </section>

              {/* Newsletter */}
              <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Stay in the Loop</h2>
                  <p className="text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto text-lg">
                    Subscribe to our newsletter for exclusive offers, beauty tips, and early access to new products
                  </p>
                  <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                    />
                    <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="bg-gray-900 text-white py-12 md:py-16 lg:py-20">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="sm:col-span-2 lg:col-span-1">
                      <h3 className="text-xl font-bold mb-4 text-rose-400">CrystalBeutyclear</h3>
                      <p className="text-gray-400 mb-4 max-w-sm">
                        Your trusted partner in beauty, offering premium cosmetics and skincare products.
                      </p>
                      <div className="flex space-x-4">
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
                          <Link to="/makeup" className="hover:text-white transition-colors">
                            Makeup
                          </Link>
                        </li>
                        <li>
                          <Link to="/skincare" className="hover:text-white transition-colors">
                            Skincare
                          </Link>
                        </li>
                        <li>
                          <Link to="/fragrance" className="hover:text-white transition-colors">
                            Fragrance
                          </Link>
                        </li>
                        <li>
                          <Link to="/tools" className="hover:text-white transition-colors">
                            Tools & Brushes
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Support</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>
                          <Link to="/contact" className="hover:text-white transition-colors">
                            Contact Us
                          </Link>
                        </li>
                        <li>
                          <Link to="/shipping" className="hover:text-white transition-colors">
                            Shipping Info
                          </Link>
                        </li>
                        <li>
                          <Link to="/returns" className="hover:text-white transition-colors">
                            Returns
                          </Link>
                        </li>
                        <li>
                          <Link to="/faq" className="hover:text-white transition-colors">
                            FAQ
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Company</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>
                          <Link to="/about" className="hover:text-white transition-colors">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link to="/careers" className="hover:text-white transition-colors">
                            Careers
                          </Link>
                        </li>
                        <li>
                          <Link to="/press" className="hover:text-white transition-colors">
                            Press
                          </Link>
                        </li>
                        <li>
                          <Link to="/sustainability" className="hover:text-white transition-colors">
                            Sustainability
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-sm text-center sm:text-left">
                      © 2024 CrystalBeutyclear. All rights reserved.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-gray-400 text-sm">
                      <Link to="/privacy" className="hover:text-white transition-colors text-center">
                        Privacy Policy
                      </Link>
                      <Link to="/terms" className="hover:text-white transition-colors text-center">
                        Terms of Service
                      </Link>
                    </div>
                  </div>
                </div>
              </footer>
            </>
          }
        />
      </Routes>
    </div>
  </Router>
)
}

export default App
