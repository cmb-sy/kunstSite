import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/another-page">
        <button className="px-8 py-4 text-lg bg-gray-500 text-white font-bold rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105 hover:shadow-lg">
          問い合わせる
        </button>
      </Link>
    </div>
  );
};

export default Contact;
