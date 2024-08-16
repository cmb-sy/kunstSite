"use client";

import { useEffect } from "react";
import tocbot from "tocbot";

export const Toc = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc", // 目次を追加する class 名
      contentSelector: ".target-toc", // 目次を取得するコンテンツの class 名
      headingSelector: "h2, h3, h4", // 目次として取得する見出しタグ
      headingsOffset: 100, // 見出しのオフセット
      scrollSmoothOffset: -40, //スムーススクロールのオフセット
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
