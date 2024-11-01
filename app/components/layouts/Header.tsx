"use client";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// ヘッダーリンク
const links = [
  { path: "/blog/1", labelEn: "Blog", labelJa: "ブログ" },
  { path: "/aboutBlog", labelEn: "About Site", labelJa: "当サイトについて" },
  { path: "/portfolio", labelEn: "Portfolio", labelJa: "ポートフォリオ" },
  { path: "/contact", labelEn: "Contact", labelJa: "問い合わせ" },
];

const Header = () => {
  // ハンバーガーメニューの開閉
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  useEffect(() => {
    // ページ遷移後にスクロール位置をトップにリセット
    window.scrollTo(0, 0);
  }, [pathname]);

  // ページ遷移時にメニューを閉じる
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`
            left-0 top-0 z-20 w-full
            ${!isMainPage ? "bg-main-white" : "bg-transparent"}
        `}
    >
      <div className="container mx-auto flex flex-col py-6 md:flex-row">
        <div className="z-50 flex animate-fade-in-up items-center px-4">
          {/* ハンバーガーボタン（スマホ画面でのみ表示） */}
          {/* タイトルボタン（トップページ以外で表示） */}
          {!isMainPage && (
            <Link className="dm-sans text-2xl font-bold" href={"/"}>
              <span>Kunst Site</span>
            </Link>
          )}
          {/* ハンバーガーボタン（スマホ画面でのみ表示） */}
          <button
            className="ml-auto flex size-12 items-center justify-center rounded-full bg-white text-2xl md:hidden"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>

        <div className="flex md:ml-auto md:justify-end">
          {
            <nav
              className={`
            item-left fixed right-0 top-0 flex
            h-full flex-col flex-wrap bg-white transition-transform duration-300 ease-in-out md:flex-row
            ${menuOpen ? "translate-x-0" : "translate-x-full"} w-full px-4 pt-32
            md:relative md:translate-x-0 md:bg-transparent md:p-0
          `}
            >
              {links.map((link, index) => (
                <Link
                  key={index}
                  className="mt-8 flex animate-fade-in-up items-center hover:opacity-50 md:mr-10 md:mt-0"
                  href={link.path}
                >
                  <span className="noto-sans-jp text-lg font-bold md:text-base">
                    {link.labelEn}
                  </span>
                </Link>
              ))}
            </nav>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
