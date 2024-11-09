import { HiOutlineMailOpen } from "react-icons/hi";
const ThankYou = () => {
  return (
    <section className="thank-you">
      <div className="mx-auto">
        <div className="mt-8 flex justify-center">
          <HiOutlineMailOpen className="text-6xl text-gray-500" />
        </div>
        <h2 className="my-10 text-center">お問合せありがとうございます</h2>
        <p className="mt-4 text-center">
          お問合せ内容を確認させていただきますので、
          <br />
          しばらくお待ちください。
        </p>
        <div className="flex justify-center">ボタン</div>
      </div>
    </section>
  );
};

export default ThankYou;
