
// app/products/[id]/page.js
import { Star } from "lucide-react";


const products = [
    // Kids
    { id: "1", image: "https://images.unsplash.com/photo-1628071645679-101ea5fad26f?q=80", name: "Kids T-Shirt", category: "Kids", type: "T-Shirt", price: 20, discount: 10, rating: 4 },
    { id: "2", image: "https://images.unsplash.com/photo-1713833864082-846e463c0f85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtpZHMlMjBzaG9ydHN8ZW58MHx8MHx8fDA%3D", name: "Kids Shorts", category: "Kids", type: "Shorts", price: 15, discount: 5, rating: 3 },
    { id: "3", image: "https://images.unsplash.com/photo-1719004127526-47185a73c9a9?q=80", name: "Kids Pants", category: "Kids", type: "Pants", price: 18, discount: 10, rating: 4 },
    { id: "4", image: "https://plus.unsplash.com/premium_photo-1681884440024-0a147c1c617a?q=80", name: "Kids Hoodie", category: "Kids", type: "Hoodie", price: 25, discount: 5, rating: 5 },
    { id: "5", image:"https://images.unsplash.com/photo-1554342321-0776d282ceac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkfGVufDB8fDB8fHww", name: "Kids Jacket", category: "Kids", type: "jacket", price: 29, discount: 5, rating: 5 },
    { id: "6", image:"https://plus.unsplash.com/premium_photo-1675033154326-4f8641603652?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGtpZCUyMFNXZWF0ZXJ8ZW58MHx8MHx8fDA%3D", name: "Kids Sweater", category: "Kids", type: "sweater", price: 30, discount: 5, rating: 5 },
    { id: "7", image:"https://plus.unsplash.com/premium_photo-1697183203532-6e0b961c0e0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D", name: "Kids Shirt", category: "Kids", type: "Shirt", price: 22, discount: 5, rating: 5 },
    { id: "8", image:"https://images.unsplash.com/photo-1684244160171-97f5dac39204?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8", name: "Kids Frock", category: "Kids", type: "frock", price: 32, discount: 5, rating: 5 },

    // Men
    { id: "9", image: "https://images.unsplash.com/photo-1716369786765-5de0bb2d2658?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxtYW4lMjBzaGlydHN8ZW58MHx8MHx8fDA%3D", name: "Men T-Shirt", category: "Men", type: "T-Shirt", price: 25, discount: 10, rating: 4 },
    { id: "10", image: "https://images.unsplash.com/photo-1675877879221-871aa9f7c314?w=600", name: "Men Jacket", category: "Men", type: "Jacket", price: 120, discount: 15, rating: 5 },
    { id: "11", image: "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?w=600", name: "Men Pants", category: "Men", type: "Pants", price: 40, discount: 5, rating: 4 },
    { id: "12", image: "https://images.unsplash.com/photo-1659989183952-8adb74ddcd35?q=80", name: "Men Shorts", category: "Men", type: "Shorts", price: 30, discount: 0, rating: 3 },
    { id: "13", image: "https://plus.unsplash.com/premium_photo-1725075088969-73798c9b422c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFuJTIwc2hpcnRzfGVufDB8fDB8fHww", name: "Men Shirts", category: "Men", type: "Shirts", price: 55, discount: 10, rating: 5 },
    { id: "14", image: "https://images.unsplash.com/photo-1618333826210-34c62badc237?w=600", name: "Men Hoodie", category: "Men", type: "Hoodie", price: 50, discount: 10, rating: 5 },
    { id: "15", image: "https://images.unsplash.com/photo-1610871276695-5e79e9cd497c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGNvYXR8ZW58MHx8MHx8fDA%3D", name: "Men Coat", category: "Men", type: "coat", price: 59, discount: 10, rating: 5 },
    

    // Women
    { id: "16", image: "https://plus.unsplash.com/premium_photo-1690338235263-68f2c173b5cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Women T-Shirt", category: "Women", type: "T-Shirt", price: 25, discount: 10, rating: 4 },
    { id: "17", image: "https://images.unsplash.com/photo-1646588714110-910c3ed742c0?w=600", name: "Women Jacket", category: "Women", type: "Jacket", price: 100, discount: 20, rating: 5 },
    { id: "18", image: "https://plus.unsplash.com/premium_photo-1661396824144-3a3e8f5160d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBjb2F0fGVufDB8fDB8fHww", name: "Women Coat", category: "Women", type: "Coat", price: 60, discount: 15, rating: 4 },
    { id: "19", image: "https://images.unsplash.com/photo-1688589564537-62c4b51c8c6c?w=600", name: "Women Skirt", category: "Women", type: "Skirt", price: 40, discount: 5, rating: 3 },
    { id: "20", image: "https://images.unsplash.com/photo-1507274301514-7de9f124ff54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBzaG9ydHN8ZW58MHx8MHx8fDA%3D", name: "Women Shorts", category: "Women", type: "Shorts", price: 35, discount: 5, rating: 4 },
    { id: "21", image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?q=80", name: "Women Pants", category: "Women", type: "Pants", price: 50, discount: 10, rating: 4 },
    { id: "22", image: "https://images.unsplash.com/photo-1634276703006-c1236a505b36?q=80", name: "Women Hoodie", category: "Women", type: "Hoodie", price: 55, discount: 10, rating: 5 },
    { id: "23", image: "https://plus.unsplash.com/premium_photo-1690350731538-57344931ac02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D", name: "Women Shirt", category: "Women", type: "Shirt", price: 50, discount: 10, rating: 5 },
    { id: "24", image: "https://images.unsplash.com/photo-1637527032130-3ee8b11d0cfc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBzd2VhdGVyfGVufDB8fDB8fHww", name: "Women Shirt", category: "Women", type: "Shirt", price: 45, discount: 5, rating: 5 },
  ];

// ✅ Required for static export
export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

// ✅ Server Component: params props use karo
export default function ProductDetail({ params }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <div className="p-10 text-center text-gray-500">Product not found</div>;
  }

  const finalPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-96 object-cover rounded-lg shadow"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-600 mt-2">{product.description}</p>

            {/* Price */}
            <div className="flex gap-2 items-center mt-4">
              {product.discount > 0 && (
                <span className="text-gray-400 line-through text-lg">${product.price}</span>
              )}
              <span className="text-teal-600 font-bold text-2xl">${finalPrice}</span>
              {product.discount > 0 && (
                <span className="bg-red-100 text-red-600 text-sm font-semibold px-2 py-1 rounded-md">
                  -{product.discount}%
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center mt-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                />
              ))}
              <span className="ml-2 text-gray-600 text-sm">({product.rating}/5)</span>
            </div>
          </div>

          {/* Button */}
          <button className="mt-6 w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition text-lg font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
