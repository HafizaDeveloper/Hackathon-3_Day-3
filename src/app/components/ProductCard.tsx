import { urlFor } from '@/sanity/lib/client';
import Link from 'next/link';

type Food = {
  _id: string;
  name: string;
  category: string;
  price: number;
  image?: { asset: { _ref: string } }; // Optional image type
};

export default function ProductCard({ food }: { food: Food }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Wrap the image in a Link */}
      <Link href={`/food/${food._id}`}>
        {food.image && (
          <img
            src={urlFor(food.image).url()}
            alt={food.name}
            className="w-full h-90 object-cover cursor-pointer hover:opacity-90 transition"
          />
        )}
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{food.name}</h2>
        <p className="text-gray-500">{food.category}</p>
        <p className="text-green-600 font-bold">${food.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
