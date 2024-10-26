import React from "react";
import "tailwindcss/tailwind.css";

type TimelineItem = {
  date: string;
  title?: string;
  description?: string;
};

// サンプルのタイムラインデータ
const timelineData: TimelineItem[] = [
  {
    date: "2023年",
    title: "ソフトウェアエンジニア",
    description: "株式会社ABCでソフトウェアエンジニアとして勤務。",
  },
  {
    date: "2021年",
    title: "ウェブ開発者",
    description: "フリーランスとしてウェブ開発を行う。",
  },
  {
    date: "2019年",
    title: "インターンシップ",
    description: "XYZ株式会社でインターンシップを経験。",
  },
  {
    date: "2019年",
    description: "XYZ株式会社でインターンシップを経験。",
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="relative border-l-4 border-green-500">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="mb-12 ml-8 p-6 bg-white shadow-lg rounded-lg animate-fadeIn"
          >
            <div className="absolute w-6 h-6 bg-green-500 rounded-full -left-3 border-2 border-white"></div>
            <time className="mb-2 text-lg font-semibold leading-none text-green-500">
              {item.date}
            </time>
            <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
            <p className="text-lg font-normal text-gray-700">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
