import React from "react";

const announcements = [
  {
    date: "2020/4/15",
    category: "お知らせ",
    title:
      "ここにお知らせが入りますここにお知らせが入りますここにお知らせが入ります",
  },
  {
    date: "2020/4/15",
    category: "お知らせ",
    title:
      "ここにお知らせが入りますここにお知らせが入りますここにお知らせが入ります",
  },
  {
    date: "2020/4/15",
    category: "お知らせ",
    title:
      "ここにお知らせが入りますここにお知らせが入りますここにお知らせが入ります",
  },
];

const MessageBoard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">お知らせ</h1>
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
              className="flex flex-wrap md:flex-nowrap text-gray-800 no-underline border-b border-gray-300 p-5 hover:text-blue-600"
            >
              <p className="m-0 min-w-[140px] text-lg text-gray-600 pr-5">
                {announcement.date}
              </p>
              <p className="m-0 min-w-[140px] pr-5">
                <span className="bg-gray-600 text-white text-center inline-block px-5 py-1 text-xs leading-none">
                  {announcement.category}
                </span>
              </p>
              <p className="m-0 w-full md:mt-0 mt-2">{announcement.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageBoard;
