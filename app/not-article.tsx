import Link from "next/link";

const NotArticle = () => {
  return (
    <div className="container mx-auto py-[50px] flex flex-col items-center justify-start h-screen bg-cover bg-center">
      <h1 className="text-[50px] text-center text-black drop-shadow-lg">404</h1>
      このページはすでに削除されているか、URLが間違っている可能性があります。
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        ホームページに戻る
      </Link>
    </div>
  );
};

export default NotArticle;
