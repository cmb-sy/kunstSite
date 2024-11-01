import React from "react";

const Form: React.FC = () => {
  return (
    <>
      <form
        action="https://ssgform.com/s/0ti4DfBGxgrh"
        method="post"
        className="min-h-screen max-w-2xl mx-auto p-8 pb-20 bg-white shadow-md rounded-lg mt-10 mb-10"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            お名前
            <span className="ml-2 bg-red-500 text-white font-bold px-2 py-1 rounded">
              必須
            </span>
          </label>
          <input
            type="text"
            name="お名前"
            id="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            メールアドレス
            <span className="ml-2 bg-red-500 text-white font-bold px-2 py-1 rounded">
              必須
            </span>
          </label>
          <input
            type="email"
            name="メールアドレス"
            id="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            お問い合わせ内容
            <span className="ml-2 bg-red-500 text-white font-bold px-2 py-1 rounded">
              必須
            </span>
          </label>
          <textarea
            name="お問い合わせ内容"
            id="message"
            required
            className="w-full h-100 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            送信する
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
