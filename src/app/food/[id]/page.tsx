import Navbar from '../../components/Navbar';
import FoodDetail from './FoodDetail';
import client from '@/sanity/lib/client';

export default async function FoodDetailPage({ params }: { params: { id: string } }) {
  // Fetch food data in the Server Component
  const food = await client.fetch(`*[_type == "food" && _id == "${params.id}"][0]`);

  if (!food) {
    return <div>Food not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {/* Pass fetched data to the Client Component */}
      <FoodDetail food={food} />
    </div>
  );
}
