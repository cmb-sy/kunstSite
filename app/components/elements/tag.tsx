import React from "react";
import Link from "next/link";
import { Categories } from "@/app/lib/types/categories";
import { CiShoppingTag } from "react-icons/ci";

interface ArticleTagProps {
  text: string;
  href: string;
}

const getCategoryIcon = (category: string): React.ComponentType | undefined => {
  return Categories[category];
};

const ArticleTopic: React.FC<ArticleTagProps> = ({ text, href }) => {
  let IconComponent: React.ComponentType = CiShoppingTag;

  for (const key in Categories) {
    if (Categories.hasOwnProperty(key) && key.includes(text)) {
      IconComponent = getCategoryIcon(key) || CiShoppingTag;
      break; // 一致するカテゴリが見つかったらループを抜ける
    }
  }

  return (
    <Link href={href}>
      <span className="inline-flex items-center mr-1 mb-1 px-3 py-2 leading-none text-gray-600 bg-white border border-gray-300 rounded-full">
        <IconComponent />
        <span className="ml-2">{text}</span>
      </span>
    </Link>
  );
};

export default ArticleTopic;
