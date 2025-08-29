"use client";
import { useState } from "react";

export default function ProductGallery({ images, name }) {
  const [mainImage, setMainImage] = useState(images?.[0]);

  return (
    <div>
      {/* Main Image */}
      <div className="border rounded-lg overflow-hidden shadow-lg">
        <img
          src={mainImage}
          alt={name}
          className="w-full h-[400px] object-cover transition-all duration-300"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-4 flex-wrap">
        {images?.map((img, index) => (
          <div
            key={index}
            className={`w-20 h-20 rounded overflow-hidden cursor-pointer border-2 ${
              img === mainImage ? "border-teal-500" : "border-gray-300"
            }`}
            onClick={() => setMainImage(img)}
          >
            <img
              src={img}
              alt={`${name}-${index}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
