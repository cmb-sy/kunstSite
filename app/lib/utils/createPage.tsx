import { POSTS_PER_PAGE } from "@/app/lib/contants";

type PageData = {
  currentPage: number;
  totalPages: number;
  start: number;
  end: number;
  pages: number[];
};

const createPageData = (
  currentPage: number,
  totalPostCount: number
): PageData => {
  const page = currentPage;
  const totalPages = Math.ceil(totalPostCount / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const pages = Array.from({ length: totalPages }, (_, i: number) => {
    return 1 + i;
  });
  return {
    currentPage: currentPage,
    totalPages: totalPages,
    start: start,
    end: end,
    pages: pages,
  };
};

export { createPageData };
export type { PageData };
