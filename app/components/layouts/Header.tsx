"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { linkDatasets } from "./HeaderFooterCommonData";

const Header = () => {
  // ハンバーガーメニューの開閉
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      window.scrollTo(0, 0); // メニューを開いたときに画面を上から表示
    }
  };
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
        left-0 top-0 w-full
        ${!isMainPage ? "bg-main-white" : "bg-transparent"}
      `}
    >
      <div className="container mx-auto flex flex-col md:flex-row md:py-2">
        <div className={"flex items-center px-4 pt-4"}>
          {/* ハンバーガーボタン（スマホ画面でのみ表示） */}
          {!isMainPage && (
            <Link className="text-4xl font-bold font-serif" href={"/"}>
              <span>Kunst Site</span>
            </Link>
          )}
          <button
            className="ml-auto flex size-12 items-center justify-center rounded-full bg-white text-2xl md:hidden relative z-20" // z−２０でハンバーガーメニューより上に表示されるように制御
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="flex md:ml-auto md:justify-end">
          <nav
            className={`
              fixed right-0 top-0 flex
              h-full flex-col bg-white bg-opacity-95 transition-transform duration-300 ease-in-out
              ${menuOpen ? "translate-x-0 relative z-10" : "translate-x-full"}
              w-full px-4
              md:relative md:translate-x-0 md:bg-transparent md:p-0 md:flex-row
            `}
          >
            {linkDatasets.map((linkDataset, index) => (
              <Link
                key={index}
                className="hover:bg-gray-200 flex items-center p-4"
                href={linkDataset.path}
              >
                <div className="block">
                  <strong className="block text-lg hover:text-gray-700">
                    {linkDataset.labelEn}
                  </strong>
                  <span className="block text-sm hover:text-gray-700">
                    {linkDataset.labelJa}
                  </span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
