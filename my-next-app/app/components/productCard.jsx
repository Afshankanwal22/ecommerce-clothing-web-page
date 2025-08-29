"use client";
import { useRouter } from "next/navigation";
import { Star } from "lucide-react";
import Link from "next/link";

export default function ProductCard({
  id,
  image,
  name,
  price,
  rating,
  discount,
   category,
    type, 
}) {
  const router = useRouter();
  const finalPrice = discount ? price - (price * discount) / 100 : price;

  const handleViewDetails = () => {
    router.push(`/categories/${category}`); 
  };

  return (
    <div
      className="relative bg-white shadow-md rounded-xl p-4 hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
      onClick={handleViewDetails} // pura card clickable
    >
      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-3 left-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold px-3 py-1 rounded-full shadow-md text-xs uppercase tracking-wide">
          Save {discount}%
        </div>
      )}

      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      {/* Product Name */}
      <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>

      {/* Price */}
      <div className="flex gap-2 items-center mt-2">
        {discount > 0 && (
          <span className="text-gray-400 line-through">${price}</span>
        )}
        <span className="text-teal-600 font-bold text-lg">${finalPrice}</span>
      </div>

      {/* ⭐ Star Rating */}
      <div className="flex items-center mt-2 gap-1">
        {rating > 0 ? (
          <>
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                size={16}
                className={`${
                  index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-gray-700 text-sm ml-1">{rating}/5</span>
          </>
        ) : (
          <span className="text-gray-500 italic text-sm">New Arrival</span>
        )}
      </div>

      {/* View Details Button */}
      <Link href={`/products/${id}`}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleViewDetails();
          }}
          className="mt-4 w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2 rounded-lg hover:opacity-90 transition font-medium"
        >
          View Details
        </button>
      </Link>
    </div>
  );
}
