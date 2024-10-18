import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
        <div className="mb-4 lg:mb-0">
          <h1 className="text-2xl font-bold mb-2">kunstBlog</h1>{" "}
          <div className="text-s mb-4">
            Welcome to our blog! Stay updated with the latest posts.
          </div>
          <div className="text-sm mb-4">
            <Link href="/privacyPolicy" className="hover:underline">
              プライバシーポリシー
            </Link>
          </div>
          <div className="text-xs text-gray-500 mb-4">
            Copyright © 2024 kunstBlog
          </div>
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
