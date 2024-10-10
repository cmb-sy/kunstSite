import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-black py-5">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white">
          <Link href="/">kunst Blog</Link>
        </h1>
        <ul className="flex gap-3">
          <li>
            <Link href="/blog" className="text-white">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white">
              Contact
            </Link>
          </li>
          <li>
            <Image
              src="/search.svg"
              alt="Search Logo"
              className="dark:invert"
              width={24}
              height={24}
              priority
            />
          </li>

          <li className="text-white">MS</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
