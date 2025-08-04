"use client"

import { Search, ShoppingBag, User, Heart, Truck, RotateCcw, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
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
  )
}
