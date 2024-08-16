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

  return <nav className="toc" />;
};

export const TocBox = () => {
  return (
    <>
      <p>目次</p>
      <Toc />
    </>
  );
};
