import type { Metadata } from "next";
import Header from "@/app/components/layouts/Header";
import Footer from "@/app/components/layouts/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "kunst site",
  description:
    "発信力と文章力を磨きたい kunst のサイトです。技術ブログや雑記をぜひご覧ください。",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon/favicon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon/favicon.svg",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "shortcut icon",
      url: "/favicon/favicon.ico",
    },
    {
      rel: "manifest",
      url: "/favicon/site.webmanifest",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen bg-gray-100">
        <div className="relative z-20">
          <Header />
        </div>
        <main className="flex-grow">{children}</main>
        <div className="relative z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}
