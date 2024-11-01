import React from "react";

const sampleData = [
  {
    id: 1,
    title: "タイトル1",
    description:
      "これは非常に長い説明文です。もっともっと長くして、内容を充実させます。説明文1",
    buttonText: "ボタン1",
  },
  {
    id: 2,
    title: "タイトル2",
    description:
      "これは非常に長い説明文です。もっともっと長くして、内容を充実させます。説明文2",
    buttonText: "ボタン2",
  },
  {
    id: 3,
    title: "タイトル3",
    description:
      "これは非常に長い説明文です。もっともっと長くして、内容を充実させます。説明文3",
    buttonText: "ボタン3",
  },
];

const HomePageMenu: React.FC = () => {
  return (
    <div className="p-5 bg-gray-100">
      <div className="flex justify-around">
        {sampleData.map((item) => (
          <div
            key={item.id}
            className="text-center m-5 p-10 bg-white rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-5">{item.title}</h2>
            <p className="mb-5 text-lg text-left">{item.description}</p>
            <button className="px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-700 transition-colors">
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageMenu;
