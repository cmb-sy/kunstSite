import React from "react";
import Link from "next/link";
import { announcements } from "./MessageData";

const MessageBoard = () => {
  if (announcements.length > 5) {
    throw new Error("表示できるお知らせは5件までです。");
  }

  return (
    <div className="mx-20 py-16">
      <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-black-500">
        最近のお知らせ
      </h1>
      <ul className="list-none m-0 p-0">
        {announcements.map((announcement, index) => (
          <li
            key={index}
            className={`border-b border-gray-300 ${
              index === 0 ? "border-t" : ""
            }`}
          >
            <Link href="#">
              <div className="flex flex-wrap md:flex-nowrap text-gray-800 no-underline border-b border-gray-300 p-4">
                <p className="m-0 min-w-[120px] text-sm text-gray-600 pr-4">
                  {announcement.date}
                </p>
                <p className="m-0 min-w-[120px] pr-4">
                  <span className="bg-gray-600 text-white text-center inline-block px-4 py-1 text-xs leading-none">
                    {announcement.category}
                  </span>
                </p>
                <p className="m-0 w-full md:mt-0 mt-2 text-base hover:underline cursor-pointer">
                  {announcement.title}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageBoard;
