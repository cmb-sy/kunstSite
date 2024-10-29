export const scrollToHash = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault(); // デフォルトのクリック動作を無効化
  const elmHash = event.currentTarget.getAttribute("href");
  if (elmHash) {
    const targetElement = document.querySelector(elmHash);
    if (targetElement) {
      const pos =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  }
};
