import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutMe: React.FC = () => {
  return (
    <div className="container mx-auto p-4 max-w-screen-lg">
      <div className="mt-12 flex flex-col items-center md:flex-row md:justify-center gap-8">
        <Image
          src="/profile.jpg"
          alt="Profile"
          className="rounded-full"
          width={150}
          height={150}
          priority
        />
        <div className="text-center md:text-left">
          <table className="mt-4 w-full border-collapse">
            <tbody className="space-y-2">
              <tr>
                <td className="border-transparent w-1/3">
                  <strong>氏名</strong>
                </td>
                <td className="border-transparent w-2/3">Kunst</td>
              </tr>
              <tr>
                <td className="border-transparent w-1/3">
                  <strong>居住地</strong>
                </td>
                <td className="border-transparent w-2/3">Tokoyo</td>
              </tr>
              <tr>
                <td className="border-transparent w-1/3">
                  <strong>X:</strong>
                </td>
                <td className="border-transparent w-2/3">
                  <Link href="https://x.com/kunst_sy_">
                    <span className="text-gray-600 hover:text-blue-500">
                      kunst
                    </span>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="border-transparent w-1/3">
                  <strong>Qiita</strong>
                </td>
                <td className="border-transparent w-2/3">mk777</td>
              </tr>
              <tr>
                <td className="border-transparent w-1/3">
                  <strong>Github</strong>
                </td>
                <td className="border-transparent w-2/3">
                  <Link href="https://github.com/cmb-sy">
                    <span className="text-gray-600 hover:text-black">
                      kunst
                    </span>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
        こんにちは、kunstと言います。フロントエンドエンジニア兼、データサイエンティストとして活動しています。
        静的型付けの言語やインフラ、そして機械学習に興味があります。最先端技術を使って課題を解決したいと思っています。
        趣味は、山登り/サウナ/筋トレ/読書/散策です。未知の土地へ行くのが好きです。
        今年は、統計検定1級/SC/英会話に挑戦したいと思っています。
      </div>
    </div>
  );
};

export default AboutMe;
