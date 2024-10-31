import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3a3c3c] text-white p-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
        <div className="mb-4 lg:mb-0">
          <h1 className="text-2xl font-bold mb-2">kunst Site</h1>{" "}
          <div className="text-s mb-4">
            Welcome to kunst Site. Stay updated with the latest posts.
          </div>
          <div className="flex space-x-4 text-sm mb-4">
            <div className="flex space-x-4 text-sm mb-4">
              <div>
                <Link href="/privacyPolicy" className="hover:underline">
                  Privacy Policy
                </Link>
              </div>
              <span>|</span>
              <div>
                <Link href="/aboutBlog" className="hover:underline">
                  About Blog
                </Link>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-500 mb-4">
            Copyright © 2024 kunst Site
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
