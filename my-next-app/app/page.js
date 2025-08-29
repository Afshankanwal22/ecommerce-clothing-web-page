"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const categories = [
    { name: "Men", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600" },
    { name: "Women", image: "https://images.unsplash.com/photo-1570875625565-4aaf02f5655f?w=600&auto=format&fit=crop&q=60" },
    { name: "Kids", image: "https://images.unsplash.com/photo-1628071645679-101ea5fad26f?q=80" },
  ];

  

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 text-white py-40 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-full h-full bg-black opacity-20"></div>
          <div className="relative w-full h-full animate-zoom-in-out">
            <Image
              src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=1600&auto=format&fit=crop&q=80"
              alt="Fashion"
              fill
              className="object-cover opacity-50 scale-100 animate-zoom-slow"
            />
          </div>
        </div>

        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-text-zoom">
            Discover Your Style
          </h1>
          <p className="mb-8 text-xl md:text-2xl lg:text-3xl animate-text-zoom-delay">
            Trendy fashion clothing for men, women & kids
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-teal-500 px-10 py-4 rounded-lg font-bold shadow-lg hover:shadow-2xl hover:bg-gray-100 transition transform hover:scale-105 animate-text-zoom"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Big Categories Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center animate-fade-in-down">
          Shop by Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <Link key={i} href={`/products?category=${cat.name}`} className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 animate-slide-in-up">
              <div className="relative w-full h-56">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white text-2xl font-bold">{cat.name}</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-white/90 text-center py-2">
                <span className="text-gray-800 font-medium">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

     

      {/* Tailwind Custom Animations */}
     <style jsx>{`
  @keyframes zoom-in-out {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  .animate-zoom-in-out { animation: zoom-in-out 15s ease-in-out infinite; }

  @keyframes text-zoom {
    0% { opacity: 0; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
  }
  .animate-text-zoom { animation: text-zoom 1s ease forwards; }

  @keyframes text-zoom-delay {
    0% { opacity: 0; transform: scale(0.95); }
    100% { opacity: 1; transform: scale(1); }
  }
  .animate-text-zoom-delay { animation: text-zoom-delay 1.2s ease forwards; }
`}</style>
    </div>
  );
}