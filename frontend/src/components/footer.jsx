"use client"

import Link from "next/link"

export function Footer() {
  return (
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
  )
}
