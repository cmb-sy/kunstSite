import Image from "next/image";

const SearchBar: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-4 space-x-2 w-full">
      <input
        type="text"
        placeholder="検索"
        className="border rounded px-4 py-2 w-full max-w-md"
      />
      <button className="p-2 bg-blue-500 text-white rounded">
        <Image
          src="/search.svg"
          alt="Search Logo"
          className="dark:invert"
          width={24}
          height={24}
          priority
        />
      </button>
    </div>
  );
};

export default SearchBar;
