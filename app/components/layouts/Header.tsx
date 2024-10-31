"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { path: "/blog/1", labelEn: "Blog", labelJa: "ブログ" },
  { path: "/aboutBlog", labelEn: "About Site", labelJa: "当サイトについて" },
  { path: "/portfolio", labelEn: "Portfolio", labelJa: "ポートフォリオ" },
  { path: "/contact", labelEn: "Contact", labelJa: "問い合わせ" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white py-2">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-gray-800 text-4xl font-serif flex items-center">
          <Link href="/">
            <strong>kunst Site</strong>
          </Link>
        </h1>
        <button
          className="block md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex gap-6 text-xl h-full items-center`}
        >
          {links.map(({ path, labelEn, labelJa }, index) => (
            <li
              key={index}
              className="hover:bg-gray-200 h-full flex items-center p-4"
            >
              <Link href={path} className="hover:text-gray-700 block h-full">
                <strong>{labelEn}</strong>
                <span className="text-sm block ">{labelJa}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
