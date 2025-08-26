"use client";

export default function HomePage() {
  const categories = [
    { name: "T-Shirts", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&auto=format&fit=crop&q=60" },
    { name: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop&q=60" },
    { name: "Jackets", image: "https://images.unsplash.com/photo-1727515192207-3dc860bfd773?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ2fHxqYWNrZXR8ZW58MHx8MHx8fDA%3D" },
    { name: "kids", image: "https://images.unsplash.com/photo-1670014541811-9b0ec280ed60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtpZHMlMjBDTE9USEVTfGVufDB8fDB8fHww" },
  ];


  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 text-white py-40 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-full h-full bg-black opacity-20"></div>
          <img
            src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=1600&auto=format&fit=crop&q=80"
            alt="Fashion"
            className="w-full h-full object-cover opacity-50 scale-105 animate-pulse-slow"
          />
        </div>

        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-down">
            Discover Your Style
          </h1>
          <p className="mb-8 text-xl md:text-2xl lg:text-3xl animate-fade-in-up">
            Trendy fashion clothing for men, women & kids
          </p>
          <a
            href="/products"
            className="inline-block bg-white text-teal-500 px-10 py-4 rounded-lg font-bold shadow-lg hover:shadow-2xl hover:bg-gray-100 transition transform hover:scale-105"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          Explore Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-48 object-cover transform hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 text-lg font-semibold text-center">
                {cat.name}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
