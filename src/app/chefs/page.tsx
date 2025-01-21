import Navbar from '../components/Navbar';
import client, { urlFor } from '@/sanity/lib/client';

interface Chef {
  _id: string;
  name: string;
  specialty: string;
  image?: {
    asset: {
      _ref: string;
    };
  };
}

export default async function ChefsPage() {
  const chefs: Chef[] = await client.fetch('*[_type == "chef"]');

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 px-5">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Chefs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {chefs.map((chef) => (
            <div
              key={chef._id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {chef.image && (
                <img
                  src={urlFor(chef.image).url()}
                  alt={chef.name}
                  className="w-full h-62 object-cover"
                />
              )}
              <div className="p-5">
                <h2 className="text-xl font-semibold">{chef.name}</h2>
                <p className="text-gray-500">{chef.specialty}</p>
                <a
                  href={`/chefs/${chef._id}`}
                  className="text-blue-500 hover:underline mt-3 block"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
