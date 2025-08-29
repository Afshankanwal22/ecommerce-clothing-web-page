// Server Component (no "use client" here)
import kidsProducts from "@/app/productsData/kidsProducts";
import menProducts from "@/app/productsData/menProducts";
import womenProducts from "@/app/productsData/womenProducts";
import ProductGallery from "./ProductGallery";
import TypeFilter from "@/app/TypeFilter";

const allProducts = [...kidsProducts, ...menProducts, ...womenProducts];

// For static export
export async function generateStaticParams() {
  return allProducts.map((p) => ({ id: p.id.toString() }));
}

export default function ProductDetailPage({ params }) {
  const product = allProducts.find((p) => p.id === params.id);

  if (!product)
    return (
      <div className="p-10 text-center text-gray-500">Product not found</div>
    );

  const finalPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Top Section: Product Gallery + Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Product Gallery (Client Component) */}
        <ProductGallery images={product.images} />

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          {/* Price with discount */}
          <div className="flex items-center gap-3 mb-3">
            {product.discount > 0 && (
              <span className="line-through text-gray-400 text-lg">
                ${product.price}
              </span>
            )}
            <span className="text-teal-600 font-bold text-2xl">
              ${finalPrice}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Add to Cart Button */}
          <button className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-600 transition w-full sm:w-auto">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Kids Products Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
          Kids Collection
        </h2>
        <TypeFilter category="kids" />
    
      </div>

      {/* Men Products Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
          Men’s Collection
        </h2>
        <TypeFilter category="men" />
      </div>

      {/* Women Products Section */}
      <div className="mt-12 mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
          Women’s Collection
        </h2>
        <TypeFilter category="women" />
      </div>
    </div>
  );
}
