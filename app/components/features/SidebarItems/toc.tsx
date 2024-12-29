"use client";

import { useEffect, useState } from "react";
import * as tocbot from "tocbot";

export const Toc = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [initialOffset, setInitialOffset] = useState(0);

  useEffect(() => {
    const tocElement = document.querySelector(".toc");
    if (tocElement) {
      setInitialOffset((tocElement as HTMLElement).offsetTop);
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > initialOffset) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // 初期レンダリング時に現在のスクロール位置を取得
    handleScroll();

    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".target-toc",
      headingSelector: "h2, h3",
      headingsOffset: 100,
      scrollSmoothOffset: -40,
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialOffset]);

  return (
    <div
      className={`bg-white dark:bg-darkModeItemBg mt-5 p-4 lg:w-custom-298 shadow-lg ${
        isFixed ? "fixed top-0" : ""
      }`}
    >
      <p className="my-2">目次</p>
      <div className="toc">{/* 目次の内容 */}</div>
    </div>
  );
};
