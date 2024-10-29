export const smoothScroll = (href: string) => {
  const targetSection = document.querySelector(href) as HTMLElement;
  if (targetSection) {
    const sectionTop = targetSection.getBoundingClientRect().top;
    const currentPos = window.scrollY;
    const gap = 84;
    const target = sectionTop + currentPos - gap + 20;

    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  }
};
