import Navbar from '../../components/Navbar';
import client, { urlFor } from '@/sanity/lib/client';

export default async function ChefDetailPage({ params }: { params: { id: string } }) {
  const chef = await client.fetch(`*[_type == "chef" && _id == "${params.id}"][0]`);

  if (!chef) {
    return <div>Chef not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto py-10 px-5">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {chef.image && (
            <img
              src={urlFor(chef.image).url()}
              alt={chef.name}
              className="w-full h-62 object-cover"
            />
          )}
          <div className="p-6">
          <h2 className="text-xl font-semibold">{chef.name}</h2>
            <p className="text-green-600 font-bold">{chef.position}</p>
            <p className="text-green-600 font-bold mt-1">{chef.specialty}</p>
            <p className="text-sm text-gray-700 font-bold mt-1">Experience: {chef.experience} years</p>
            <p className="text-sm text-gray-700 mt-2">{chef.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
