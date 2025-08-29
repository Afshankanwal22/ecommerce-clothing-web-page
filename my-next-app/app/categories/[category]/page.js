"use client";
import { useSearchParams } from "next/navigation";
import products from "@/app/productsData";
import ProductCard from "@/app/components/productCard";

export default function CategoryPage({ params }) {
  const category = params.category;
  const searchParams = useSearchParams();
  const typeFilter = searchParams.get("type"); 

  const filteredProducts = products.filter(
    (p) =>
      p.category.toLowerCase() === category.toLowerCase() &&
      (!typeFilter || p.type.toLowerCase() === typeFilter.toLowerCase())
  );

  if (!filteredProducts.length)
    return (
      <div className="p-10 text-center text-gray-500">
        No products found in {category}{typeFilter ? ` of type ${typeFilter}` : ""}
      </div>
    );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {category} Products {typeFilter && `(${typeFilter})`}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
