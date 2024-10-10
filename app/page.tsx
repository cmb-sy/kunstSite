import Link from "next/link";
import Button from "./components/ui/button";

const Home = async () => {
  const buttonClass =
    "text-lg md:text-xl lg:text-2xl py-4 md:py-6 lg:py-8 px-6 md:px-8 lg:px-12 w-full md:w-64 lg:w-80"; // レスポンシブクラスを追加

  return (
    <div
      className="relative flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/forest-6874717_1280.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        <div className="text-white text-center text-lg md:text-2xl lg:text-7xl leading-relaxed">
          アウトプットで技術を磨くブログ
          <br />
          <br />
          Kunst Blog
        </div>
        <div className="mt-20 flex space-x-4 md:space-x-6 lg:space-x-8">
          {" "}
          {/* レスポンシブクラスを追加 */}
          <Link href="/blog" legacyBehavior>
            <a className="text-white">
              <Button text="ブログを見る" className={buttonClass} />
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-white">
              <Button text="当サイトを詳しく" className={buttonClass} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
