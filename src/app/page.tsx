import Navbar from './components/Navbar';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto text-center py-20 px-5 my-20">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to FoodTuck!
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Explore our delicious food items and meet our talented chefs.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="/food"
            className="bg-yellow-500 text-white px-6 py-3 rounded shadow hover:bg-yellow-600 transition"
          >
            Explore Food
          </a>
          <a
            href="/chefs"
            className="bg-yellow-500 text-white px-6 py-3 rounded shadow hover:bg-yellow-600 transition"
          >
            Meet Chefs
          </a>
        </div>
      </div>
    </div>
  );
}
