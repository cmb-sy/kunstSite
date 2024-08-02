import { Metadata } from "next";
import Head from "next/head";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nextjs超初心者入門だよ",
  description: "SSR,SSG,ISRでブログを作成する。",
  openGraph: {
    title: "Nextjs超初心者入門",
    description: "SSR, SSG, ISRブログを作成する。",
    url: "<サイトのurl>",
    siteName: "SSGブログ",
    images: [
      {
        width: "1200",
        height: "675",
        url: "<サイトのurl>/ogp-home.png",
      },
    ],
    locale: "jp",
    type: "website",
  },
};

const Home = () => {
  return (
    <section>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <div className="px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="p-4 bg-white shadow-md rounded-lg mb-4">
            <Link
              href="/"
              className="block mt-2 text-lg font-semibold text-blue-600 hover:underline"
            >
              SSGとSSRの使い分けの場面はいつなのか？
            </Link>
            <br />
            <small className="text-gray-500">2024/03/14</small>
          </article>
          <article className="p-4 bg-white shadow-md rounded-lg mb-4">
            <Link
              href="/"
              className="block mt-2 text-lg font-semibold text-blue-600 hover:underline"
            >
              SSGとSSRの使い分けの場面はいつなのか？
            </Link>
            <br />
            <small className="text-gray-500">2024/03/14</small>
          </article>
          <article className="p-4 bg-white shadow-md rounded-lg mb-4">
            <Link
              href="/"
              className="block mt-2 text-lg font-semibold text-blue-600 hover:underline"
            >
              SSGとSSRの使い分けの場面はいつなのか？
            </Link>
            <br />
            <small className="text-gray-500">2024/03/14</small>
          </article>
          <article className="p-4 bg-white shadow-md rounded-lg mb-4">
            <Link
              href="/"
              className="block mt-2 text-lg font-semibold text-blue-600 hover:underline"
            >
              SSGとSSRの使い分けの場面はいつなのか？
            </Link>
            <br />
            <small className="text-gray-500">2024/03/14</small>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Home;
