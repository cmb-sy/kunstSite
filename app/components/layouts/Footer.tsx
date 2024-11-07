"use client";

import Link from "next/link";
import { FaFacebook, FaArrowUp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { linkDatasets } from "./HeaderFooterCommonData";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-4 md:px-8 gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">kunst Site</h1>
          <p className="text-sm mb-4">
            Welcome to kunst Site. Stay updated with the latest posts.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 mt-10">
            <Link href="/privacyPolicy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/aboutBlog" className="hover:underline">
              About Blog
            </Link>
            <span className="hidden md:inline">|</span>
            {linkDatasets.map((linkDataset, index) => (
              <Link
                key={index}
                href={linkDataset.path}
                className="hover:underline transition duration-300"
              >
                {linkDataset.labelEn}
              </Link>
            ))}
          </div>
          <div className="flex justify-center md:justify-start space-x-6 mt-10">
            <Link href="https://twitter.com" aria-label="Twitter">
              <BsTwitterX className="text-3xl hover:text-gray-400 transition duration-300" />
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook">
              <FaFacebook className="text-3xl hover:text-gray-400 transition duration-300" />
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-20">
            Copyright © 2024 kunst Site
          </p>
        </div>
      </div>
      <div className="absolute bottom-1 right-1 md:bottom-5 md:right-5">
        <button
          onClick={scrollToTop}
          className="bg-gray-700 p-3 hover:bg-gray-600 transition duration-300 w-12 h-12 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-2xl text-white" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
