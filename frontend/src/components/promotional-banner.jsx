"use client"

import { Button } from "@/components/ui/button"

export function PromotionalBanner() {
  return (
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
  )
}
