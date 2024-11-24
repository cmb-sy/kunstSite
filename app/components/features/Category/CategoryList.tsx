import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Categories } from "@/app/lib/types/categories";

const CategoryList = () => {
  return (
    <div className="flex flex-col items-left mt-4 space-y-2 w-full bg-white dark:bg-darkModeItemBg p-4 rounded shadow text-left">
      <h1 className="text-2xl font-bold mb-2">カテゴリー</h1>
      {Object.keys(Categories).map((category: string, index: number) => (
        <Link key={index} href={`/category/${category}/1`}>
          <button className="w-full max-w-md p-2 border-b border-gray-200 text-left text-black dark:text-darkModeFontColor flex items-center">
            {React.createElement(Categories[category])}
            <span className="ml-2">{category}</span>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
