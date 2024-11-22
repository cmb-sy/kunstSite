import React from "react";
import Link from "next/link";
import { announcements } from "./MessageData";

const MessageBoard = () => {
  if (announcements.length > 5) {
    throw new Error("表示できるお知らせは5件までです。");
  }

  return (
    <div className="mx-4 sm:mx-20 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-black-500 dark:text-white">
        最近のお知らせ
      </h1>
      <ul className="list-none m-0 p-0">
        {announcements.map((announcement, index) => (
          <li
            key={index}
            className={`border-b border-gray-300 dark:border-gray-700 ${
              index === 0 ? "border-t" : ""
            }`}
          >
            <Link href="#">
              <div className="flex flex-wrap md:flex-nowrap items-stretch text-gray-800 dark:text-gray-200 no-underline border-b border-gray-300 dark:border-gray-700 p-4">
                <p className="m-0 min-w-[80px] text-sm text-gray-600 dark:text-gray-400 flex items-center">
                  {announcement.date}
                </p>
                <p className="m-0 min-w-[120px] flex items-center">
                  <span className="bg-lime-600 dark:bg-gray-800 text-white text-center inline-block px-4 py-1 text-xs leading-none">
                    {announcement.category}
                  </span>
                </p>
                <p className="m-0 w-full md:mt-0 mt-2 text-base hover:underline cursor-pointer flex items-center">
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
