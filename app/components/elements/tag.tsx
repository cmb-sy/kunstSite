import React from "react";
import Link from "next/link";
import { Categories } from "@/types/categories";

interface ArticleTagProps {
  text: string;
  href: string;
}

const getCategoryIcon = (category: string): string | undefined => {
  return Categories[category];
};

const ArticleTopic: React.FC<ArticleTagProps> = ({ text, href }) => {
  let iconSrc = "/tag.svg";

  for (const key in Categories) {
    if (Categories.hasOwnProperty(key) && key.includes(text)) {
      iconSrc = getCategoryIcon(key) || "/tag.svg";
      break; // 一致するカテゴリが見つかったらループを抜ける
    }
  }

  return (
    <Link href={href}>
      <span className="inline-block m-1 mb-2 p-2 leading-none text-gray-600 bg-white border border-gray-300 rounded-full">
        {iconSrc && (
          <img src={iconSrc} alt={text} className="inline-block mr-2 w-4 h-4" />
        )}
        <span>{text}</span>
      </span>
    </Link>
  );
};

export default ArticleTopic;
