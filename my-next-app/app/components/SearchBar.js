"use client";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleChange}
        className="w-80 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
      />
    </div>
  );
}
