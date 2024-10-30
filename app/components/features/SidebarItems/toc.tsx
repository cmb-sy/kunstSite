"use client";

import { useEffect, useState } from "react";
import * as tocbot from "tocbot";

export const Toc = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".target-toc",
      headingSelector: "h2, h3, h4",
      headingsOffset: 100,
      scrollSmoothOffset: -40,
    });

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 不要となったtocbotインスタンスとスクロールイベントリスナーを削除
    return () => {
      tocbot.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-white mt-5 p-4 shadow-lg ${
        isFixed ? "fixed top-10 lg:w-custom-298 " : ""
      }`}
    >
      <span className="text-xl font-bold">目次</span>
      <nav className="m-1 p-1 toc" />
    </div>
  );
};
