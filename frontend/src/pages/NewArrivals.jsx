import { useMemo, useState } from "react"
import { ArrowRight, Heart, Search, Star } from 'lucide-react'
import { Link } from "react-router-dom"

const CATEGORIES = ["Face", "Eyes", "Lips", "Skincare", "Tools", "Fragrance"]

const NEW_PRODUCTS = [
  { id: 101, name: "Air-Light Serum Foundation", category: "Face", price: 49, rating: 4.7, reviews: 120, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=800&fit=crop", dateAdded: "2025-08-07", badge: "New" },
  { id: 102, name: "Cushion Glow Blush", category: "Face", price: 32, rating: 4.5, reviews: 58, image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&h=800&fit=crop", dateAdded: "2025-08-06", badge: "Trending" },
  { id: 103, name: "Feather Lash Mascara", category: "Eyes", price: 26, rating: 4.6, reviews: 210, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476a?w=800&h=800&fit=crop", dateAdded: "2025-08-05", badge: "New" },
  { id: 104, name: "Silk Veil Setting Spray", category: "Face", price: 29, rating: 4.3, reviews: 44, image: "https://images.unsplash.com/photo-1585238342028-6a8f2d2b2f3b?w=800&h=800&fit=crop", dateAdded: "2025-08-03" },
  { id: 105, name: "Nude Muse Lipstick", category: "Lips", price: 24, rating: 4.8, reviews: 356, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&h=800&fit=crop", dateAdded: "2025-08-02", badge: "Limited" },
  { id: 106, name: "Petal Tint Lip Oil", category: "Lips", price: 19, rating: 4.4, reviews: 79, image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=800&fit=crop", dateAdded: "2025-08-01" },
  { id: 107, name: "Hydra Shield SPF 50", category: "Skincare", price: 33, rating: 4.7, reviews: 188, image: "https://images.unsplash.com/photo-1585238691406-5fe3e78b42e4?w=800&h=800&fit=crop", dateAdded: "2025-07-31", badge: "Trending" },
  { id: 108, name: "Rose Quartz Roller", category: "Tools", price: 22, rating: 4.2, reviews: 64, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=800&fit=crop", dateAdded: "2025-07-30" },
  { id: 109, name: "Midnight Bloom Eau de Parfum", category: "Fragrance", price: 79, rating: 4.6, reviews: 102, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop", dateAdded: "2025-07-29" },
  { id: 110, name: "Bright Eyes Concealer", category: "Eyes", price: 27, rating: 4.3, reviews: 92, image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&h=800&fit=crop", dateAdded: "2025-07-28" },
  { id: 111, name: "Revive Night Repair Cream", category: "Skincare", price: 58, rating: 4.9, reviews: 420, image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&h=800&fit=crop", dateAdded: "2025-07-27", badge: "New" },
  { id: 112, name: "Precision Brow Definer", category: "Eyes", price: 21, rating: 4.4, reviews: 133, image: "https://images.unsplash.com/photo-1618308252265-4b1d050ba2fc?w=800&h=800&fit=crop", dateAdded: "2025-07-26" },
]

export default function NewArrivalsPage() {
  const [activeCat, setActiveCat] = useState("All")
  const [sortBy, setSortBy] = useState("newest")
  const [query, setQuery] = useState("")
  const [visible, setVisible] = useState(8)

  const filtered = useMemo(() => {
    let items = NEW_PRODUCTS.slice()

    if (activeCat !== "All") {
      items = items.filter((p) => p.category === activeCat)
    }
    if (query.trim()) {
      const q = query.toLowerCase()
      items = items.filter((p) => p.name.toLowerCase().includes(q))
    }
    items.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "rating-desc":
          return b.rating - a.rating
        default:
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      }
    })
    return items
  }, [activeCat, sortBy, query])

  const visibleItems = filtered.slice(0, visible)
  const canLoadMore = visible < filtered.length

  return (
    <main className="bg-white">
      <section className="border-b bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">New Arrivals</h1>
              <p className="text-gray-600 mt-2">Fresh picks from CrystalBeutyclear, just dropped.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative hidden sm:block w-64">
                <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search new arrivals"
                  className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700"
              >
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Top Rated</option>
              </select>
            </div>
          </div>

          <div className="sm:hidden mt-4">
            <div className="relative">
              <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search new arrivals"
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div className="mt-6 -mx-1 overflow-x-auto">
            <div className="flex items-center gap-2 px-1 pb-1">
              <button
                onClick={() => setActiveCat("All")}
                className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap ${
                  activeCat === "All"
                    ? "bg-rose-600 border-rose-600 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                All
              </button>
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap ${
                    activeCat === c ? "bg-rose-600 border-rose-600 text-white" : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {visibleItems.length === 0 ? (
            <div className="py-20 text-center text-gray-600">No new arrivals match your filters.</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {visibleItems.map((p) => (
                <article key={p.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                  <div className="relative overflow-hidden">
                    <img
                      src={p.image || "/placeholder.svg"}
                      alt={p.name}
                      className="w-full h-56 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {p.badge && (
                      <span className="absolute top-3 left-3 bg-rose-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                        {p.badge}
                      </span>
                    )}
                    <button className="absolute top-3 right-3 bg-white/85 hover:bg-white p-2 rounded-full transition-colors" aria-label="Add to wishlist">
                      <Heart className="h-4 w-4 text-gray-700" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">{p.name}</h3>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.round(p.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">({p.reviews})</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">${p.price.toFixed(2)}</span>
                      <button className="px-3 py-2 text-sm bg-rose-600 hover:bg-rose-700 text-white rounded-lg">Add to Cart</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {canLoadMore && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setVisible((v) => v + 8)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Load more
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}

          <div className="mt-10 text-center">
            <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-black">
              View all products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
