import React from "react";
// import SubmitButton from '../atoms/SubmitButton'
// import InputLongText from '../molecules/InputLongText'
// import InputText from '../molecules/InputText'

const Form: React.FC = () => {
  return (
    <form
      action="https://ssgform.com/s/0ti4DfBGxgrh"
      method="post"
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg mt-10"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          お名前
        </label>
        <input
          type="text"
          name="お名前"
          id="name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          メールアドレス
        </label>
        <input
          type="email"
          name="メールアドレス"
          id="email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          お問い合わせ内容
        </label>
        <textarea
          name="お問い合わせ内容"
          id="message"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          送信する
        </button>
      </div>
    </form>
  );
};

export default Form;
