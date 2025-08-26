"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const categories = [
  {
    name: "Men",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600",
  },
  {
    name: "Women",
    image: "https://images.unsplash.com/photo-1570875625565-4aaf02f5655f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Kids",
    image: "https://images.unsplash.com/photo-1628071645679-101ea5fad26f?q=80",
  },
];

export default function CategoriesPage() {
  const router = useRouter();

  const handleCategoryClick = (category) => {
    router.push(`/products?category=${category}`); 
  };

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Shop by Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(cat.name)}
            className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
          >
            {/* Category Image */}
            <Image
              src={cat.image}
              alt={cat.name}
              width={400}
              height={400}
              className="w-full h-56 object-cover group-hover:brightness-90 transition"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-lg font-semibold">
                {cat.name}
              </span>
            </div>

            {/* Bottom Label */}
            <div className="absolute bottom-0 left-0 w-full bg-white/90 text-center py-2">
              <span className="text-gray-800 font-medium">{cat.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
