import React from "react";
import Link from "next/link";
import { MdArticle } from "react-icons/md";
import { MdAssignmentInd } from "react-icons/md";
import { MdChatBubble } from "react-icons/md";

const sampleData = [
  {
    id: 1,
    icon: MdArticle,
    title: "ブログ",
    link: "/blog/1",
  },
  {
    id: 2,
    icon: MdAssignmentInd,
    title: "ポートフォリオ",
    link: "/portfolio",
  },
  {
    id: 3,
    icon: MdChatBubble,
    title: "当サイトについて",
    link: "/aboutBlog",
  },
];

const HomePageMenu: React.FC = () => {
  return (
    <div className="px-4 sm:px-8 md:px-20 pt-10 pb-20 w-screen">
      <h1 className="sm:text-3xl md:text-4xl mb-10 font-bold text-center text-black-500">
        コンテンツ
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {sampleData.map((item) => (
          <Link key={item.id} href={item.link} passHref>
            <div className="cursor-pointer text-center p-4 sm:p-6 md:p-8 lg:p-10 bg-slate-100 rounded-lg shadow-lg transform transition-transform hover:scale-105 max-w-sm mx-auto">
              <item.icon className="text-8xl sm:text-10xl md:text-12xl lg:text-9xl mb-4 mx-auto" />
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                {item.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePageMenu;
