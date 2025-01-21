'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import client from '@/sanity/lib/client';

// Define the Food type
interface Food {
  _id: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  image?: {
    asset: {
      _ref: string;
    };
  };
}

export default function FoodPage() {
  const [foods, setFoods] = useState<Food[]>([]); // State to store all food items
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // Category filter
  const [searchQuery, setSearchQuery] = useState<string>(''); // Search filter
  const [currentPage, setCurrentPage] = useState(1); // Pagination
  const itemsPerPage = 6; // Items per page

  // Fetch food data from Sanity CMS
  useEffect(() => {
    const fetchFoods = async () => {
      const data = await client.fetch('*[_type == "food"]');
      setFoods(data);
    };
    fetchFoods();
  }, []);

  // Filtered food items based on category and search query
  const filteredFoods = foods.filter((food) => {
    const matchesCategory = selectedCategory
      ? food.category?.toLowerCase() === selectedCategory.toLowerCase()
      : true;
    const matchesSearch = searchQuery
      ? food.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  // Paginated food items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedFoods = filteredFoods.slice(startIndex, startIndex + itemsPerPage);

  // Total pages for pagination
  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 px-5">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Food Items</h1>

        {/* Search Bar */}
        <div className="mb-4">
          <SearchBar onSearch={(query) => setSearchQuery(query)} />
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <select
            value={selectedCategory || ''}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">All Categories</option>
            <option value="Burger">Burger</option>
            <option value="Pizza">Pizza</option>
            <option value="Drink">Drink</option>
            <option value="Dessert">Dessert</option>
            {/* Add more categories as needed */}
          </select>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedFoods.map((food) => (
            <ProductCard key={food._id} food={food} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="mx-4 my-3">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
