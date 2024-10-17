import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <div className="bg-white p-5 shadow-lg max-w-sm mx-auto lg:w-custom-298 ">
      <div className="flex items-center">
        <Image
          src="/profile.jpg"
          alt="Profile"
          className="rounded-full"
          width={100}
          height={100}
          priority
        />
        <div className="ml-4">
          <p className="font-semibold text-gray-800 text-lg">kunst</p>
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
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-3 leading-6">
        データサイエンティスト兼フロントエンジニアのkunstです!
        <br />
        最近は山登りにハマっています。
      </p>
      <div className="mt-3">
        <Link href="https://cmb-sy.github.io/portfolio/">
          <div className="text-blue-500 hover:underline">
            kunstについて詳しく
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
