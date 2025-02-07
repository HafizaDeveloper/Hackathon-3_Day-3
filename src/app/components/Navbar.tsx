"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Lucide-react icons for menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">FoodTuck</Link>
        </h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <Link href="/food" className="hover:text-yellow-400">Food</Link>
          <Link href="/chefs" className="hover:text-yellow-400">Chefs</Link>
          <Link href="/cart" className="hover:text-yellow-400">Cart</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white flex flex-col space-y-3 p-4">
          <Link href="/" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/food" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Food</Link>
          <Link href="/chefs" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Chefs</Link>
          <Link href="/cart" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Cart</Link>
        </div>
      )}
    </nav>
  );
}
