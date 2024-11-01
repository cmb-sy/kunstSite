import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Categories } from "@/app/lib/types/categories";

const CategoryList = () => {
  return (
    <div className="flex flex-col items-left mt-4 space-y-2 w-full bg-white p-4 rounded shadow text-left">
      <h1 className="text-2xl font-bold mb-2">カテゴリー</h1>
      {Object.keys(Categories).map((category: string, index: number) => (
        <Link key={index} href={`/category/${category}/1`}>
          <button className="w-full max-w-md p-2 border-b border-gray-200 hover:bg-gray-100 text-left text-black flex items-center">
            <Image
              src={Categories[category]}
              alt={`${category} Icon`}
              width={20}
              height={20}
              className="mr-2 opacity-70"
            />
            {category}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
