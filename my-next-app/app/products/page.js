"use client";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";

export default function ProductsPage() {
  const allProducts = [
    { id: 1, name: "Stylish T-Shirt", price: 25, image: "https://via.placeholder.com/300x200", rating: 4, discount: 20 },
    { id: 2, name: "Casual Jeans", price: 40, image: "https://via.placeholder.com/300x200", rating: 5, discount: 10 },
    { id: 3, name: "Sneakers", price: 60, image: "https://via.placeholder.com/300x200", rating: 3, discount: null },
    { id: 4, name: "Leather Jacket", price: 120, image: "https://via.placeholder.com/300x200", rating: 5, discount: 30 },
  ];

  const [products, setProducts] = useState(allProducts);

  const handleSearch = (query) => {
    const filtered = allProducts.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filtered);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Products</h1>
      <SearchBar onSearch={handleSearch} />
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => <ProductCard key={product.id} {...product} />)}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-8">No products found</p>
      )}
    </div>
  );
}
