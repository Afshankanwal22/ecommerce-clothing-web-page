"use client";
import { useState } from "react";
import ProductCard from "@/app/components/productCard";
import SearchBar from "@/app/components/SearchBar";

const products = [
  // Kids
  { id: "1", image: "https://images.unsplash.com/photo-1628071645679-101ea5fad26f?q=80", name: "Kids T-Shirt", category: "Kids", type: "T-Shirt", price: 20, discount: 10, rating: 4 },
  { id: "2", image: "https://images.unsplash.com/photo-1657796827146-56df3caa8e0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGtpZCUyMHNob3J0cyUyMGdpcmxzfGVufDB8fDB8fHww", name: "Kids Shorts", category: "Kids", type: "Shorts", price: 15, discount: 5, rating: 3 },
  { id: "3", image:"https://plus.unsplash.com/premium_photo-1729097011903-4b16e98c0476?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D", name: "Kids Pants", category: "Kids", type: "Pants", price: 18, discount: 10, rating: 4 },
  { id: "4", image: "https://images.unsplash.com/photo-1642157299220-06b9a9d09a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGtpZCUyMGhvb2RpZSUyMGJveXxlbnwwfHwwfHx8MA%3D%3D", name: "Kids Hoodie", category: "Kids", type: "Hoodie", price: 25, discount: 5, rating: 5 },
  { id: "5", image:"https://plus.unsplash.com/premium_photo-1707816501228-1d814ad62d7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lkJTIwamFja2V0JTIwYm95fGVufDB8fDB8fHww", name: "Kids Jacket", category: "Kids", type: "Jacket", price: 29, discount: 5, rating: 5 },
  { id: "6", image:"https://plus.unsplash.com/premium_photo-1675033154326-4f8641603652?w=600", name: "Kids Sweater", category: "Kids", type: "Sweater", price: 30, discount: 5, rating: 5 },
  { id: "7", image:"https://plus.unsplash.com/premium_photo-1697183203532-6e0b961c0e0d?w=600", name: "Kids Shirt", category: "Kids", type: "Shirt", price: 22, discount: 5, rating: 5 },
  { id: "8", image:"https://images.unsplash.com/photo-1684244160171-97f5dac39204?w=600", name: "Kids Frock", category: "Kids", type: "Frock", price: 32, discount: 5, rating: 5 },

  // Men
  { id: "9", image: "https://images.unsplash.com/photo-1716369786765-5de0bb2d2658?w=600", name: "Men T-Shirt", category: "Men", type: "T-Shirt", price: 25, discount: 10, rating: 4 },
  { id: "10", image: "https://images.unsplash.com/photo-1675877879221-871aa9f7c314?w=600", name: "Men Jacket", category: "Men", type: "Jacket", price: 120, discount: 15, rating: 5 },
  { id: "11", image: "https://images.unsplash.com/photo-1714729382668-7bc3bb261662?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhbnRzfGVufDB8fDB8fHww", name: "Men Pants", category: "Men", type: "Pants", price: 40, discount: 5, rating: 4 },
  { id: "12", image: "https://images.unsplash.com/photo-1659989183952-8adb74ddcd35?q=80", name: "Men Shorts", category: "Men", type: "Shorts", price: 30, discount: 0, rating: 3 },
  { id: "13", image: "https://plus.unsplash.com/premium_photo-1725075088969-73798c9b422c?w=600", name: "Men Shirts", category: "Men", type: "Shirts", price: 55, discount: 10, rating: 5 },
  { id: "14", image: "https://images.unsplash.com/photo-1615397587950-3cbb55f95b77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D", name: "Men Hoodie", category: "Men", type: "Hoodie", price: 50, discount: 10, rating: 5 },
  { id: "15", image: "https://images.unsplash.com/photo-1610871276695-5e79e9cd497c?w=600", name: "Men Coat", category: "Men", type: "Coat", price: 59, discount: 10, rating: 5 },

  // Women
  { id: "16", image: "https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcnRzfGVufDB8fDB8fHww", name: "Women T-Shirt", category: "Women", type: "T-Shirt", price: 25, discount: 10, rating: 4 },
  { id: "17", image: "https://images.unsplash.com/photo-1684064856206-539c0531fc4e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Women Jacket", category: "Women", type: "Jacket", price: 100, discount: 20, rating: 5 },
  { id: "18", image: "https://images.unsplash.com/photo-1697095098675-1d02496ef86a?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Women Coat", category: "Women", type: "Coat", price: 60, discount: 15, rating: 4 },
  { id: "19", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpcnR8ZW58MHx8MHx8fDA%3D", name: "Women Skirt", category: "Women", type: "Skirt", price: 40, discount: 5, rating: 3 },
  { id: "20", image: "https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcnRzfGVufDB8fDB8fHww", name: "Women Shorts", category: "Women", type: "Shorts", price: 35, discount: 5, rating: 4 },
  { id: "21", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFudHxlbnwwfHwwfHx8MA%3D%3D", name: "Women Pants", category: "Women", type: "Pants", price: 50, discount: 10, rating: 4 },
  { id: "22", image: "https://images.unsplash.com/photo-1618333272197-2ee791c42963?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxob29kaWV8ZW58MHx8MHx8fDA%3D", name: "Women Hoodie", category: "Women", type: "Hoodie", price: 55, discount: 10, rating: 5 },
  { id: "23", image: "https://images.unsplash.com/photo-1679072961019-f9d39db93c8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHx0JTIwc2hpcnRzJTIwd29tZW58ZW58MHx8MHx8fDA%3D3D", name: "Women Shirt", category: "Women", type: "Shirt", price: 50, discount: 10, rating: 5 },
  { id: "24", image: "https://images.unsplash.com/photo-1637527032130-3ee8b11d0cfc?w=600", name: "Women Sweater", category: "Women", type: "Sweater", price: 58, discount: 10, rating: 5 },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || p.category === category) &&
    (type === "All" || p.type === type)
  );

  const categories = ["All", ...new Set(products.map(p => p.category))];
  const types = ["All", ...new Set(products.filter(p => category === "All" ? true : p.category === category).map(p => p.type))];

  return (
    <div className="p-6">
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />

      {/* Categories */}
      <div className="flex gap-4 mt-4 mb-2 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => { setCategory(cat); setType("All"); }}
            className={`px-4 py-2 rounded-full ${category === cat ? "bg-teal-500 text-white" : "bg-gray-200 text-gray-700"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Types */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {types.map(t => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`px-4 py-2 rounded-full ${type === t ? "bg-teal-500 text-white" : "bg-gray-200 text-gray-700"}`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(p => <ProductCard key={p.id} {...p} />)}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
}
