import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-green-700 py-8">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white">
          <Link href="/">kunst Blog</Link>
        </h1>
        <ul className="flex gap-6 text-xl h-full">
          <li className="hover:bg-gray-700 h-full">
            <Link
              href="/blog"
              className="text-white hover:text-gray-500 block h-full"
            >
              Blog
            </Link>
          </li>
          <li className="hover:bg-gray-700 h-full">
            <Link
              href="/about"
              className="text-white hover:text-gray-500 block h-full"
            >
              About
            </Link>
          </li>
          <li className="hover:bg-gray-700 h-full">
            <Link
              href="/contact"
              className="text-white hover:text-gray-500 block h-full"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
