import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">FoodTuck</Link>
        </h1>
        <div className="space-x-4">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/food" className="hover:text-yellow-400 transition">
            Food
          </Link>
          <Link href="/chefs" className="hover:text-yellow-400 transition">
            Chefs
          </Link>
        </div>
      </div>
    </nav>
  );
}
