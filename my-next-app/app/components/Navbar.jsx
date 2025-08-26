"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-lg sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="text-3xl font-bold text-teal-500 hover:scale-105 transition-transform">
        Clothify
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium text-gray-700">
        <li>
          <Link href="/" className="hover:text-teal-500 transition-colors duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/products" className="hover:text-teal-500 transition-colors duration-300">
            Products
          </Link>
        </li>
        <li>
          <Link href="/categories" className="hover:text-teal-500 transition-colors duration-300">
            Categories
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-teal-500 transition-colors duration-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-teal-500 transition-colors duration-300">
            Contact
          </Link> 
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col gap-4 p-4 md:hidden shadow-lg">
          <li>
            <Link href="/" className="hover:text-teal-500 transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-teal-500 transition-colors duration-300">
              Shop
            </Link>
          </li>
          <li>  categories ka page n hai abhi ?ji abhi nhi acha
            <Link href="/categories" className="hover:text-teal-500 transition-colors duration-300">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-teal-500 transition-colors duration-300">
              About
            </Link>
          </li>
          <li>

    
            <Link href="/contact" className="hover:text-teal-500 transition-colors duration-300">
              Contact
            </Link>
          </li>
        </ul>
      )}

      {/* Right Side */}
      <div className="hidden md:flex items-center gap-4">
     

        {/* Cart Button */}
        <button className="bg-teal-500 text-white px-5 py-2 rounded-full hover:bg-teal-600 transition flex items-center gap-2 shadow-md">
          🛒 Cart
          <span className="bg-white text-teal-500 px-2 py-1 rounded-full text-sm font-semibold">3</span>
        </button>

        {/* Signup/Login */}
        <Link
          href="/auth/signup"
          className="bg-gray-100 text-teal-600 px-5 py-2 rounded-full border border-teal-500 hover:bg-teal-500 hover:text-white transition font-medium shadow"
        >
          Signup
        </Link>

        <Link
          href="/auth/login"
          className="bg-teal-500 text-white px-5 py-2 rounded-full hover:bg-teal-600 transition font-medium shadow"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
