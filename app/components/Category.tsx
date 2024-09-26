import React from "react";
import { Categories } from "@/types/post";

const CategoryItem = ({ category }: { category: string }) => {
  return (
    <button className="w-full max-w-md p-2 border-b border-gray-200 hover:bg-gray-100 text-left">
      {category}
    </button>
  );
};

const CategoryList = () => {
  return (
    <div className="flex flex-col items-left mt-4 space-y-2 w-full bg-white p-4 rounded shadow text-left">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      {Object.values(Categories).map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
