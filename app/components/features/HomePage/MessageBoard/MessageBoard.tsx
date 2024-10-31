import React from "react";
import { announcements } from "./MessageData";

const MessageBoard = () => {
  if (announcements.length > 5) {
    throw new Error("表示できるお知らせは5件までです。");
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">最近のお知らせ</h1>
      <ul className="list-none m-0 p-0">
        {announcements.map((announcement, index) => (
          <li
            key={index}
            className={`border-b border-gray-300 ${
              index === 0 ? "border-t" : ""
            }`}
          >
            <a
              href="#"
              className="flex flex-wrap md:flex-nowrap text-gray-800 no-underline border-b border-gray-300 p-6 hover:text-blue-600"
            >
              <p className="m-0 min-w-[160px] text-xl text-gray-600 pr-6">
                {announcement.date}
              </p>
              <p className="m-0 min-w-[160px] pr-6">
                <span className="bg-gray-600 text-white text-center inline-block px-6 py-2 text-sm leading-none">
                  {announcement.category}
                </span>
              </p>
              <p className="m-0 w-full md:mt-0 mt-3 text-lg">
                {announcement.title}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageBoard;
