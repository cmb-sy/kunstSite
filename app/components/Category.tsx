import React from "react";
import { Categories } from "@/types/post";

const CategoryItem = ({ category }: { category: string }) => {
  return (
    <div className="w-full max-w-md p-2 border-b border-gray-200">
      {category}
    </div>
  );
};

const CategoryList = () => {
  return (
    <div className="flex flex-col items-center mt-4 space-y-2 w-full bg-white p-4 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      {Categories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
