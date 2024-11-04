import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen p-20">
      <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black-500">
        Contact
      </h1>
      <span className="mt-2 text-xs text-gray-800">お問い合わせ</span>
      <span className="text-center my-10">
        記事内容内容の誤り / 当サイトコンテンツに関すること
        <br />
        その他の事項に関しては、
        <br />
        下記よりお問い合わせください。
      </span>
      <Link href="http://localhost:3000/contact">
        <button className="px-20 py-3 bg-black text-white rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          contact me
        </button>
      </Link>
    </div>
  );
};

export default Contact;
