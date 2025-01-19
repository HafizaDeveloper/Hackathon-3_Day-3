export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
    return (
      <input
        type="text"
        placeholder="Search for food..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
    );
  }
  