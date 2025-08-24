// "use client";
// import Image from "next/image";

// export default function Home() {
//   const categories = [
//     { id: 1, name: "Men", img:"https://images.unsplash.com/photo-1610088441520-4352457e7095?w=600&auto=format&fit=crop&q=60" },
//     { id: 2, name: "Women", img: "https://images.unsplash.com/photo-1602442787305-decbd65be507?w=600&auto=format&fit=crop&q=60" },
//     { id: 3, name: "Kids", img: "https://plus.unsplash.com/premium_photo-1669589659097-9ab41ee05ad9?w=600&auto=format&fit=crop&q=60" },
//   ];

  

//   return (
//     <div className="bg-gray-50 text-gray-800 min-h-screen">



// {/* Hero Section */}
// <section className="relative bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 text-white py-40 text-center overflow-hidden">
//   <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 scale-105 animate-pulse-slow"></div>
//   <div className="relative z-10">
//     <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-down">Discover Your Style</h2>
//     <p className="mb-6 text-xl md:text-2xl animate-fade-in-up">Trendy fashion clothing for men, women & kids</p>
//     <button className="bg-white text-teal-500 px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition transform hover:scale-105">Shop Now</button>
//   </div>
// </section>

// {/* Categories */}
// <section className="py-20 px-8">
//   <h3 className="text-4xl font-bold text-center mb-12">Shop by Category</h3>
//   <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
//     {categories.map((c) => (
//       <div key={c.id} className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transform transition duration-500 hover:shadow-indigo-500/50">
//         <Image src={c.img} alt={c.name} width={400} height={400} className="object-cover" unoptimized />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4">
//           <h4 className="text-white text-2xl font-extrabold">{c.name}</h4>
//         </div>
//       </div>
//     ))}
//   </div>
// </section>

// {/* Products */}
// <section className="px-8 py-20">
//   <h3 className="text-4xl font-bold text-center mb-12 text-teal-500">Featured Products</h3>
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
//     {products.map((p) => (
//       <div key={p.id} className="bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transform transition duration-300 relative group">
//         <div className="relative w-full h-72">
//           <Image src={p.img} alt={p.name} fill className="object-cover" unoptimized />
//           <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
//             <button className="bg-white text-teal-500 px-4 py-2 rounded-md hover:bg-teal-500 hover:text-white transition">Quick View</button>
//           </div>
//         </div>
//         <div className="p-6 text-center">
//           <h4 className="font-semibold text-xl mb-2">{p.name}</h4>
//           <div className="flex justify-between items-center mb-4">
//             <p className="text-teal-500 font-bold text-lg">{p.price}</p>
//             <div className="flex">
//               {[...Array(5)].map((_, i) => (
//                 <span key={i} className={`text-sm ${i < Math.floor(Math.random() * 5) + 1 ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
//               ))}
//             </div>
//           </div>
//           <button className="mt-2 w-full bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 transition">Add to Cart</button>
//         </div>
//       </div>
//     ))}
//   </div>
// </section>

// {/* Newsletter */}
// <section className="bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-500 py-24 text-center text-white relative overflow-hidden">
//   <div className="relative z-10">
//     <h3 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to our Newsletter</h3>
//     <p className="mb-8 text-lg md:text-xl">Get latest updates and exclusive offers</p>
//     <div className="flex justify-center flex-wrap gap-2 md:gap-4">
//       <input type="email" placeholder="Enter your email" className="px-5 py-3 rounded-l-md text-gray-800 w-64 md:w-80 focus:outline-none focus:ring-2 focus:ring-white transition"/>
//       <button className="bg-white text-teal-500 px-6 py-3 rounded-r-md font-semibold hover:bg-gray-200 hover:text-teal-600 transition">Subscribe</button>
//     </div>
//   </div>
//   <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//   <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
// </section>

// {/* Footer */}
// <footer className="bg-teal-600 text-white text-center py-16 mt-12 relative overflow-hidden">
//   <div className="relative z-10">
//     <p className="font-semibold text-lg mb-4">© 2025 Clothify. All rights reserved.</p>
//     <div className="flex justify-center gap-6 mt-2">
//       <a href="#" className="hover:text-yellow-300 transition-colors duration-300 font-medium">Facebook</a>
//       <a href="#" className="hover:text-pink-400 transition-colors duration-300 font-medium">Instagram</a>
//       <a href="#" className="hover:text-blue-300 transition-colors duration-300 font-medium">Twitter</a>
//     </div>
//   </div>
//   <div className="absolute top-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//   <div className="absolute bottom-0 right-0 w-72 h-72 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
// </footer>

// {/* Animations */}
// <style jsx>{`
//   @keyframes fadeInDown {0% {opacity:0; transform: translateY(-20px);} 100% {opacity:1; transform: translateY(0);}}
//   @keyframes fadeInUp {0% {opacity:0; transform: translateY(20px);} 100% {opacity:1; transform: translateY(0);}}
//   @keyframes pulseSlow {0%,100%{transform:scale(1.05);} 50%{transform:scale(1);}}
//   .animate-fade-in-down {animation: fadeInDown 1s ease-out forwards;}
//   .animate-fade-in-up {animation: fadeInUp 1s ease-out forwards;}
//   .animate-pulse-slow {animation: pulseSlow 6s ease-in-out infinite;}
// `}</style>

// </div>
//   );
// }
"use client";

export default function HomePage() {
  const categories = [
    { name: "T-Shirts", image: "https://via.placeholder.com/300x200" },
    { name: "Jeans", image: "https://via.placeholder.com/300x200" },
    { name: "Jackets", image: "https://via.placeholder.com/300x200" },
    { name: "Shoes", image: "https://via.placeholder.com/300x200" },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 text-white py-40 text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute w-full h-full bg-black opacity-20"></div>
          <img
            src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=1600&auto=format&fit=crop&q=80"
            alt="Fashion"
            className="w-full h-full object-cover opacity-50 scale-105 animate-pulse-slow"
          />
        </div>

        {/* Hero Content */}
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

        {/* Decorative Circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white opacity-10 rounded-full animate-pulse-slow"></div>
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

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1); }
        }

        .animate-fade-in-down { animation: fadeInDown 1s ease-out forwards; }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; }
        .animate-pulse-slow { animation: pulseSlow 8s ease-in-out infinite; }
      `}</style>
    </div>
  );
}


