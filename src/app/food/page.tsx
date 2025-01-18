import client, { urlFor } from '@/sanity/lib/client';
import Navbar from '../components/Navbar';

export default async function FoodPage() {
  const foods = await client.fetch('*[_type == "food"]');

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 px-5">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Food Items</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {foods.map((food: any) => (
            <div
              key={food._id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {food.image && (
                <img
                  src={urlFor(food.image).url()}
                  alt={food.name}
                  className="w-full h-90 object-cover"
                />
              )}
              <div className="p-5">
                <h2 className="text-xl font-semibold">{food.name}</h2>
                <p className="text-gray-500">{food.category}</p>
                <p className="text-green-600 font-bold mt-2">
                  ${food.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
