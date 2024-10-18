import React from "react";
import Link from "next/link";

interface ArticleTagProps {
  text: string;
  href: string;
}

const ArticleTag: React.FC<ArticleTagProps> = ({ text, href }) => {
  return (
    <Link href={href}>
      <span className="inline-block m-0.5 mb-1.5 p-1.5 leading-none text-blue-600 bg-white border border-blue-600 rounded-full">
        {text}
      </span>
    </Link>
  );
};

export default ArticleTag;
