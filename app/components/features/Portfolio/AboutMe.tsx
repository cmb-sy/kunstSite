import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutMe: React.FC = () => (
  <div className="container mx-auto p-4 sm:p-6 md:p-8 max-w-screen-lg text-base sm:text-lg md:text-xl leading-relaxed">
    <div className="mt-12 flex flex-col items-center md:flex-row md:justify-center gap-8">
      <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 relative">
        <Image
          src="/profile.jpg"
          alt="Profile"
          className="rounded-full"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="text-center md:text-left md:ml-8 space-y-4 text-lg sm:text-xl md:text-2xl">
        {[
          { label: "氏名", value: "Kunst" },
          {
            label: "ブログ",
            value: "https://x.com/kunst_sy_",
            link: "https://x.com/kunst_sy_",
          },
          { label: "X:", value: "kunst", link: "https://x.com/kunst_sy_" },
          {
            label: "Github",
            value: "https://github.com/cmb-sy",
            link: "https://github.com/cmb-sy",
          },
        ].map(({ label, value, link }) => (
          <dl className="flex text-gray md:mx-0 md:mt-2" key={label}>
            <dt className="w-24 sm:w-28 text-lg sm:text-xl md:text-2xl font-bold">
              {label}
            </dt>
            <dd className="text-base sm:text-lg md:text-xl">
              {link ? (
                <Link href={link}>
                  <span className="text-blue-500 hover:text-blue-600">
                    {value}
                  </span>
                </Link>
              ) : (
                value
              )}
            </dd>
          </dl>
        ))}
      </div>
    </div>
    <div className="p-4 sm:p-8 md:p-12 space-y-4 text-base sm:text-lg md:text-xl">
      こんにちは、kunstと言います。フロントエンドエンジニア兼、データサイエンティストとして活動しています。
      静的型付けの言語やインフラ、そして機械学習に興味があります。最先端技術を使って課題を解決したいと思っています。
      趣味は、山登り/サウナ/筋トレ/読書/散策です。未知の土地へ行くのが好きです。
      今年は、統計検定1級/SC/英会話に挑戦したいと思っています。
    </div>
  </div>
);

export default AboutMe;
