const NotFound = () => {
  return (
    <div
      className="container mx-auto py-[50px] flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      // style={{ backgroundImage: "url('/path/to/your/background.jpg')" }}
    >
      <h1 className="text-[50px] text-center text-black drop-shadow-lg">
        ページが見つかりませんでした。
      </h1>
      <a
        href="/"
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        ホームページに戻る
      </a>
    </div>
  );
};

export default NotFound;
