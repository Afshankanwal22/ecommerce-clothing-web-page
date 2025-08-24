"use client";
import { Star } from "lucide-react";

export default function ProductCard({ image, name, price, rating, discount }) {
  const finalPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div className="relative bg-white shadow-md rounded-xl p-4 hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
      {discount && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          -{discount}%
        </span>
      )}
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <div className="flex gap-2 items-center mt-2">
        {discount && <span className="text-gray-400 line-through">${price}</span>}
        <span className="text-teal-600 font-bold">${finalPrice}</span>
      </div>
      <div className="flex items-center mt-2 gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={18} className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
        ))}
        <span className="text-gray-600 text-sm">{rating}/5</span>
      </div>
      <button className="mt-4 w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition">
        Add to Cart
      </button>
    </div>
  );
}
