"use client";
import { useState } from "react";
import ProductCard from "@/app/components/ProductCard";
import kidsProducts from "@/app/productsData/kidsProducts";
import menProducts from "@/app/productsData/menProducts";
import womenProducts from "@/app/productsData/womenProducts";

function getProductsByCategory(category) {
  if (category === "kids") return kidsProducts;
  if (category === "men") return menProducts;
  if (category === "women") return womenProducts;
  return [];
}

export default function TypeFilter({ category }) {
  const products = getProductsByCategory(category);

  // Type list generate karna
  const types = ["All", ...new Set(products.map((p) => p.type))];
  const [typeFilter, setTypeFilter] = useState("All");

  // Type ke hisaab se filter karna
  const filteredProducts =
    typeFilter === "All"
      ? products
      : products.filter((p) => p.type === typeFilter);

  return (
    <div>
      {/* Type Buttons */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setTypeFilter(t)}
            className={`px-4 py-2 rounded-full ${
              typeFilter === t
                ? "bg-teal-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
