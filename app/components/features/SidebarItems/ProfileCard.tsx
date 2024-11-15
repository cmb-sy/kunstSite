import { BsTwitterX, BsGithub } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <div className="bg-white dark:bg-darkModeItem p-5 shadow-lg max-w-sm mx-auto">
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
          <p className="font-semibold text-gray-800 dark:text-darkModeFontColor text-lg">
            kunst
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <Link href="https://x.com/kunst_sy_">
              <div className="text-gray-600 dark:text-darkModeFontColor hover:text-blue-500 dark:hover:text-blue-400">
                <BsTwitterX size={24} />
              </div>
            </Link>
            <Link href="https://github.com/cmb-sy">
              <div className="text-gray-600 dark:text-darkModeFontColor hover:text-black dark:hover:text-gray-200">
                <BsGithub size={24} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 dark:text-darkModeFontColor mt-3 leading-6">
        データサイエンティスト兼フロントエンジニアのkunstです!
        <br />
        最近は山登りにハマっています。
      </p>
    </div>
  );
};

export default ProfileCard;
