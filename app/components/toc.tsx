"use client";

import { useEffect } from "react";
import tocbot from "tocbot";

export const Toc = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".target-toc",
      headingSelector: "h2, h3, h4",
      headingsOffset: 100,
      scrollSmoothOffset: -40,
    });

    // 不要となったtocbotインスタンスを削除
    return () => tocbot.destroy();
  }, []);

  return (
    <div className="bg-white mt-5 p-4 shadow-lg">
      <span className="text-xl font-bold">目次</span>
      <nav className="m-1 p-1 toc" />
    </div>
  );
};
