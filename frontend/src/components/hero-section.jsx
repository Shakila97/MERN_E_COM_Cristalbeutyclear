"use client"

import { ArrowRight, Shield } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
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
  )
}
