import { HiOutlineMailOpen } from "react-icons/hi";
import Link from "next/link";

const ThankYou = () => {
  return (
    <section className="relative min-h-screen mt-32">
      <div className="mx-auto">
        <div className="mt-8 flex justify-center">
          <HiOutlineMailOpen className="text-8xl text-gray-300" />
        </div>
        <div className="my-10 text-center text-2xl md:text-4xl font-bold">
          お問合せありがとうございます
        </div>
        <p className="mt-4 text-center">
          お問合せ内容を確認させていただきますので、
          <br />
          しばらくお待ちください。
        </p>
        <div className="flex justify-center mt-10">
          <Link href="/" passHref>
            <button className="bg-lime-700 hover:bg-lime-600 text-white rounded px-4 py-2">
              トップページへ戻る
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
