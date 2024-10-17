import React from "react";
import Link from "next/link";

export const Categories = [
  "フロントエンド",
  "バックエンド",
  "インフラ",
  "AI",
  "その他",
] as const;

const CategoryList = () => {
  return (
    <div className="flex flex-col items-left mt-4 space-y-2 w-full bg-white p-4 rounded shadow text-left">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      {Categories.map((category, index) => (
        <Link key={index} href={`/category/${category}`}>
          <button className="w-full max-w-md p-2 border-b border-gray-200 hover:bg-gray-100 text-left text-black">
            {category}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
