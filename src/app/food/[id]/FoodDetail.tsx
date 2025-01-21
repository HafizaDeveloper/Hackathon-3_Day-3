'use client';

import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { urlFor } from '@/sanity/lib/client';

type Food = {
  _id: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  image: { asset: { _ref: string; url: string } };
};

// New type that includes 'quantity' with 'food' properties
type FoodWithQuantity = Food & {
  quantity: number;
};

export default function FoodDetail({ food }: { food: Food }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1); // Explicitly typing quantity as a number

  return (
    <div className="max-w-4xl mx-auto py-10 px-5">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {food.image && (
          <img
            src={urlFor(food.image).url()}
            alt={food.name}
            className="w-full h-96 object-cover"
          />
        )}
        <div className="p-6">
          <h1 className="text-3xl font-bold">{food.name}</h1>
          <p className="text-gray-500">{food.category}</p>
          <p className="text-green-600 text-2xl font-bold">${food.price.toFixed(2)}</p>
          {food.description && (
            <p className="mt-4 text-gray-700">{food.description}</p>
          )}

          {/* Quantity Selector */}
          <div className="flex items-center mt-6">
            <label className="mr-3">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-16 p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart({ ...food, quantity } as FoodWithQuantity)} // Typecasting
            className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
