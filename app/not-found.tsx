import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container mx-auto py-[50px] flex flex-col items-center justify-start h-screen bg-cover bg-center">
      <h1 className="text-[50px] text-center drop-shadow-lg">404</h1>
      このページはすでに削除されているか、URLが間違っている可能性があります。
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-lime-700 text-white shadow-lg hover:bg-lime-600 transition duration-300"
      >
        ホームページに戻る
      </Link>
    </div>
  );
};

export default NotFound;
