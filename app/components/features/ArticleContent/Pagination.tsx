import Link from "next/link";

interface PageProps {
  type: string;
  pages: number[];
  currentPage?: number;
}

const Pagination = ({ type, pages, currentPage = 1 }: PageProps) => {
  const totalPages = pages.length;
  const pageLimit = 5;

  // 計算した開始ページと終了ページを決定
  let startPage = Math.max(currentPage - Math.floor(pageLimit / 2), 1);
  let endPage = Math.min(startPage + pageLimit - 1, totalPages);

  // ページ数が足りない場合は調整
  if (endPage - startPage + 1 < pageLimit) {
    startPage = Math.max(endPage - pageLimit + 1, 1);
  }

  const paginationRange: number[] = [];
  for (let i = startPage; i <= endPage; i++) {
    paginationRange.push(i);
  }

  return (
    <ul className="flex justify-center space-x-2 my-10">
      {currentPage > 1 && (
        <li>
          <Link href={`/${type}/${currentPage - 1}`}>
            <div className="px-3 py-1 border dark:border-none rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer bg-darkModeItemBg">
              前のページ
            </div>
          </Link>
        </li>
      )}
      {startPage > 1 && (
        <>
          <li>
            <Link href={`/${type}/1`}>
              <div className="px-3 py-1 border dark:border-none rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer bg-darkModeItemBg">
                最初のページ
              </div>
            </Link>
          </li>
          {startPage > 2 && (
            <li>
              <span className="px-3 py-1 border dark:border-none rounded bg-darkModeItemBg">
                ...
              </span>
            </li>
          )}
        </>
      )}
      {paginationRange.map((page) => (
        <li key={page}>
          <Link href={`/${type}/${page}`}>
            <div
              className={`px-3 py-1 rounded cursor-pointer ${
                currentPage == page
                  ? "text-black dark:text-darkModeFontColor"
                  : "border dark:border-none bg-white hover:bg-green-100 cursor-pointer"
              }`}
            >
              {page}
            </div>
          </Link>
        </li>
      ))}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <li>
              <span className="px-3 py-1 border dark:border-none rounded bg-darkModeItemBg">
                ...
              </span>
            </li>
          )}
          <li>
            <Link href={`/${type}/${totalPages}`}>
              <div className="px-3 py-1 border dark:border-none bg-white rounded cursor-pointer">
                最後のページ
              </div>
            </Link>
          </li>
        </>
      )}
      {currentPage < totalPages && (
        <li>
          <Link href={`/${type}/${Number(currentPage) + 1}`}>
            <div className="px-3 py-1 border dark:border-none bg-white rounded cursor-pointer">
              次のページ
            </div>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
