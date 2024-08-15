import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <div className="flex justify-center">
        <Image
          src="/profile.jpg"
          alt="Profile"
          className="rounded-full"
          width={80}
          height={80}
          priority
        />
      </div>
      <p className="font-semibold text-center mt-0.5 text-gray-800">kunst</p>
      <p className="text-gray-600 text-center mt-1">
        技術力がほしいエンジニアです。最近は山登りにハマっています。
      </p>
      <div className="text-center mt-4">
        <Link href="https://cmb-sy.github.io/portfolio/">
          <div className="text-blue-500 hover:underline">
            ポートフォリオへ行く
          </div>
        </Link>
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <Link href="https://twitter.com/yourprofile">
          <div className="text-gray-600 hover:text-blue-500">
            <FaTwitter size={24} />
          </div>
        </Link>
        <Link href="https://github.com/yourprofile">
          <div className="text-gray-600 hover:text-black">
            <FaGithub size={24} />
          </div>
        </Link>
        <Link href="https://linkedin.com/in/yourprofile">
          <div className="text-gray-600 hover:text-blue-700">
            <FaLinkedin size={24} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
