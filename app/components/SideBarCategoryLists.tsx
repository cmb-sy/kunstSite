import React from "react";
import Link from "next/link";
import { Categories, Category } from "@/types/post";

const CategoryItem = ({
  categoryKey,
  categoryValue,
}: {
  categoryKey: Category;
  categoryValue: string;
}) => {
  return (
    <Link href={`/category/${categoryKey}`}>
      <button className="w-full max-w-md p-2 border-b border-gray-200 hover:bg-gray-100 text-left text-black">
        {categoryValue}
      </button>
    </Link>
  );
};

const CategoryLists = () => {
  return (
    <div className="flex flex-col items-left mt-4 space-y-2 w-full bg-white p-4 rounded shadow text-left">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      {Object.entries(Categories).map(([key, value], index) => (
        <CategoryItem
          key={index}
          categoryKey={key as Category}
          categoryValue={value}
        />
      ))}
    </div>
  );
};

export default CategoryLists;
