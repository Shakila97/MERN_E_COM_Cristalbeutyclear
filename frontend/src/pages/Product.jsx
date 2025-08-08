import { useParams } from "react-router-dom"
import { Star, ShoppingBag, Heart } from "lucide-react"

const mockProduct = {
  id: 1,
  name: "Radiant Glow Foundation",
  description:
    "This lightweight foundation gives your skin a radiant finish while providing medium coverage. Perfect for all-day wear and suitable for all skin types.",
  price: 42.0,
  originalPrice: 52.0,
  rating: 4.8,
  reviews: 324,
  image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=700&fit=crop",
  highlights: [
    "Long-lasting formula",
    "Suitable for all skin types",
    "Cruelty-free and vegan",
    "Available in 12 shades",
  ],
}

export default function ProductPage() {
  const { id } = useParams()
  const product = mockProduct // replace with dynamic fetch by ID if needed

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md rounded-xl shadow-xl object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600 text-sm">({product.reviews} reviews)</span>
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Highlights */}
          <ul className="mb-6 list-disc pl-6 text-gray-600 space-y-1">
            {product.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          {/* Action buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Add to Cart
            </button>
            <button className="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-lg font-medium text-gray-700 flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
