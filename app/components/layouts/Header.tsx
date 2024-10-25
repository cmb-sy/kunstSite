import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white py-2">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-green-500 text-4xl font-serif flex items-center">
          <Link href="/">kunst Blog</Link>
        </h1>
        <ul className="flex gap-6 text-xl h-full items-center">
          {["/about", "/contact"].map((path, index) => (
            <li
              key={index}
              className="hover:bg-gray-200 h-full flex items-center p-4"
            >
              <Link href={path} className="hover:text-gray-700 block h-full">
                {path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
