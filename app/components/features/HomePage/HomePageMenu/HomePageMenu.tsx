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
    description:
      "これは非常に長い説明文です。もっともっと長くして、内容を充実させます。説明文1",
    link: "/blog",
  },
  {
    id: 2,
    icon: MdAssignmentInd,
    title: "ポートフォリオ",
    description:
      "これは非常に長い説明文です。もっともっと長くして、内容を充実させます。説明文2",
    link: "/portfolio",
  },
  {
    id: 3,
    icon: MdChatBubble,
    title: "当サイトについて",
    description: "当サイトのことを詳しく解説しています。",
    link: "/about",
  },
];

const HomePageMenu: React.FC = () => {
  return (
    <div className="px-20 pt-10 pb-20 w-screen">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-center text-black-500">
        コンテンツ
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {sampleData.map((item) => (
          <Link key={item.id} href={item.link} passHref>
            <div className="cursor-pointer text-center sm:p-8 md:p-10 bg-slate-100 rounded-lg shadow-lg transform transition-transform hover:scale-105 h-80 max-w-sm mx-auto">
              <item.icon className="text-5xl sm:text-6xl md:text-7xl mb-4 mx-auto" />
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                {item.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-left">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePageMenu;
