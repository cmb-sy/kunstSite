import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
        <div className="mb-4 lg:mb-0">
          <h2 className="text-2xl font-bold mb-2">kunst blog</h2>
          <p className="mb-4">
            アートとデザインに関する最新情報をお届けします。（テストコメント）
          </p>
        </div>
        <div className="flex justify-center lg:justify-end space-x-4">
          <Link href="https://twitter.com" aria-label="Twitter">
            <FaTwitter className="text-2xl hover:text-gray-400" />
          </Link>
          <Link href="https://facebook.com" aria-label="Facebook">
            <FaFacebook className="text-2xl hover:text-gray-400" />
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram">
            <FaInstagram className="text-2xl hover:text-gray-400" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
