"use client";
import Image from "next/image";

export default function Home() {
  const categories = [
    { id: 1, name: "Men", img:"https://images.unsplash.com/photo-1610088441520-4352457e7095?w=600&auto=format&fit=crop&q=60" },
    { id: 2, name: "Women", img: "https://images.unsplash.com/photo-1602442787305-decbd65be507?w=600&auto=format&fit=crop&q=60" },
    { id: 3, name: "Kids", img: "https://plus.unsplash.com/premium_photo-1669589659097-9ab41ee05ad9?w=600&auto=format&fit=crop&q=60" },
  ];

  const products = [
    { id: 1, name: "Classic White Shirt", price: "$29", img: "https://images.unsplash.com/photo-1700672481083-edffef7d5282?w=600&auto=format&fit=crop&q=60" },
    { id: 2, name: "Denim Jacket", price: "$59", img: "https://images.unsplash.com/photo-1537465978529-d23b17165b3b?w=600&auto=format&fit=crop&q=60" },
    { id: 3, name: "Casual T-Shirt", price: "$25", img: "https://images.unsplash.com/photo-1660997351262-6c31d8a35b6c?w=600&auto=format&fit=crop&q=60" },
    { id: 4, name: "Leather Jacket", price: "$89", img: "https://images.unsplash.com/photo-1553640662-9ab20b8fa2ea?w=600&auto=format&fit=crop&q=60" },
    { id: 5, name: "Blue Jeans", price: "$49", img: "https://images.unsplash.com/photo-1700993443911-6edad57779c2?w=600&auto=format&fit=crop&q=60" },
    { id: 6, name: "Formal Blazer", price: "$75", img: "https://images.unsplash.com/photo-1679117349740-c46c819d0373?w=600&auto=format&fit=crop&q=60" },
    { id: 7, name: "Summer Dress", price: "$39", img: "https://images.unsplash.com/photo-1593105522065-9a6ecd21aeb2?w=600&auto=format&fit=crop&q=60" },
    { id: 8, name: "Red Dress", price: "$55", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=60" },
    { id: 9, name: "Trendy Skirt", price: "$30", img: "https://images.unsplash.com/photo-1714207427812-ef765d0e6a4c?w=600&auto=format&fit=crop&q=60" },
    { id: 10, name: "Casual Polo Shirt", price: "$35", img: "https://images.unsplash.com/photo-1717724162644-75f624f413ca?w=600&auto=format&fit=crop&q=60" },
    { id: 11, name: "Sportswear Set", price: "$60", img: "https://images.unsplash.com/photo-1716951129133-33876f0e2338?w=600&auto=format&fit=crop&q=60" },
    { id: 12, name: "Hoodie Black", price: "$45", img: "https://images.unsplash.com/photo-1636170029620-73014ed8d0ab?w=600&auto=format&fit=crop&q=60" },
    { id: 13, name: "Kids T-Shirt", price: "$15", img: "https://plus.unsplash.com/premium_photo-1691367782576-316c6aa250d7?w=600&auto=format&fit=crop&q=60" },
    { id: 14, name: "Kids Hoodie", price: "$20", img: "https://plus.unsplash.com/premium_photo-1698305283034-6fc20d4bf946?w=600&auto=format&fit=crop&q=60" },
    { id: 15, name: "Kids Dress", price: "$25", img: "https://images.unsplash.com/photo-1670000278374-30cb2d76701f?w=600&auto=format&fit=crop&q=60" },
    { id: 16, name: "Kids Shorts", price: "$12", img:"https://plus.unsplash.com/premium_photo-1691367782367-2bd37f646abc?w=600&auto=format&fit=crop&q=60" },
    { id: 17, name: "Kids Jacket", price: "$30", img: "https://plus.unsplash.com/premium_photo-1707816501228-1d814ad62d7b?w=600&auto=format&fit=crop&q=60" },
    { id: 18, name: "Kids Pajama", price: "$18", img: "https://images.unsplash.com/photo-1608573771987-1d99b511e9ba?w=600&auto=format&fit=crop&q=60" },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">

{/* Navbar */}
<nav className="flex justify-between items-center px-8 py-4 bg-white shadow-lg sticky top-0 z-50">
  <h1 className="text-3xl font-bold text-teal-500 cursor-pointer hover:scale-105 transition-transform">Clothify</h1>
  <ul className="hidden md:flex gap-8 font-medium text-gray-700">
    <li className="hover:text-teal-500 cursor-pointer transition-colors duration-300">Home</li>
    <li className="hover:text-teal-500 cursor-pointer transition-colors duration-300">Shop</li>
    <li className="hover:text-teal-500 cursor-pointer transition-colors duration-300">Categories</li>
    <li className="hover:text-teal-500 cursor-pointer transition-colors duration-300">About</li>
    <li className="hover:text-teal-500 cursor-pointer transition-colors duration-300">Contact</li>
  </ul>
  <div className="flex items-center gap-4">
    <div className="relative hidden md:block">
      <input type="text" placeholder="Search products..." className="border border-gray-300 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-teal-400 w-64 transition"/>
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
    </div>
    <button className="bg-teal-500 text-white px-5 py-2 rounded-full hover:bg-teal-600 transition flex items-center gap-2 shadow-md">
      🛒 Cart
      <span className="bg-white text-teal-500 px-2 py-1 rounded-full text-sm font-semibold">3</span>
    </button>
  </div>
</nav>

{/* Hero Section */}
<section className="relative bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 text-white py-40 text-center overflow-hidden">
  <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 scale-105 animate-pulse-slow"></div>
  <div className="relative z-10">
    <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-down">Discover Your Style</h2>
    <p className="mb-6 text-xl md:text-2xl animate-fade-in-up">Trendy fashion clothing for men, women & kids</p>
    <button className="bg-white text-teal-500 px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition transform hover:scale-105">Shop Now</button>
  </div>
</section>

{/* Categories */}
<section className="py-20 px-8">
  <h3 className="text-4xl font-bold text-center mb-12">Shop by Category</h3>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
    {categories.map((c) => (
      <div key={c.id} className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transform transition duration-500 hover:shadow-indigo-500/50">
        <Image src={c.img} alt={c.name} width={400} height={400} className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4">
          <h4 className="text-white text-2xl font-extrabold">{c.name}</h4>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Products */}
<section className="px-8 py-20">
  <h3 className="text-4xl font-bold text-center mb-12 text-teal-500">Featured Products</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
    {products.map((p) => (
      <div key={p.id} className="bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transform transition duration-300 relative group">
        <div className="relative w-full h-72">
          <Image src={p.img} alt={p.name} fill className="object-cover" unoptimized />
          <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
            <button className="bg-white text-teal-500 px-4 py-2 rounded-md hover:bg-teal-500 hover:text-white transition">Quick View</button>
          </div>
        </div>
        <div className="p-6 text-center">
          <h4 className="font-semibold text-xl mb-2">{p.name}</h4>
          <div className="flex justify-between items-center mb-4">
            <p className="text-teal-500 font-bold text-lg">{p.price}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-sm ${i < Math.floor(Math.random() * 5) + 1 ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
              ))}
            </div>
          </div>
          <button className="mt-2 w-full bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 transition">Add to Cart</button>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Newsletter */}
<section className="bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-500 py-24 text-center text-white relative overflow-hidden">
  <div className="relative z-10">
    <h3 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to our Newsletter</h3>
    <p className="mb-8 text-lg md:text-xl">Get latest updates and exclusive offers</p>
    <div className="flex justify-center flex-wrap gap-2 md:gap-4">
      <input type="email" placeholder="Enter your email" className="px-5 py-3 rounded-l-md text-gray-800 w-64 md:w-80 focus:outline-none focus:ring-2 focus:ring-white transition"/>
      <button className="bg-white text-teal-500 px-6 py-3 rounded-r-md font-semibold hover:bg-gray-200 hover:text-teal-600 transition">Subscribe</button>
    </div>
  </div>
  <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
</section>

{/* Footer */}
<footer className="bg-teal-600 text-white text-center py-16 mt-12 relative overflow-hidden">
  <div className="relative z-10">
    <p className="font-semibold text-lg mb-4">© 2025 Clothify. All rights reserved.</p>
    <div className="flex justify-center gap-6 mt-2">
      <a href="#" className="hover:text-yellow-300 transition-colors duration-300 font-medium">Facebook</a>
      <a href="#" className="hover:text-pink-400 transition-colors duration-300 font-medium">Instagram</a>
      <a href="#" className="hover:text-blue-300 transition-colors duration-300 font-medium">Twitter</a>
    </div>
  </div>
  <div className="absolute top-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
</footer>

{/* Animations */}
<style jsx>{`
  @keyframes fadeInDown {0% {opacity:0; transform: translateY(-20px);} 100% {opacity:1; transform: translateY(0);}}
  @keyframes fadeInUp {0% {opacity:0; transform: translateY(20px);} 100% {opacity:1; transform: translateY(0);}}
  @keyframes pulseSlow {0%,100%{transform:scale(1.05);} 50%{transform:scale(1);}}
  .animate-fade-in-down {animation: fadeInDown 1s ease-out forwards;}
  .animate-fade-in-up {animation: fadeInUp 1s ease-out forwards;}
  .animate-pulse-slow {animation: pulseSlow 6s ease-in-out infinite;}
`}</style>

</div>
  );
}
