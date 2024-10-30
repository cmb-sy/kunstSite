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
    <ul className="pagination justify-content-center">
      {startPage > 1 && (
        <>
          <li className="page-item">
            <Link href={`/${type}/1`} className="page-link">
              1
            </Link>
          </li>
          {startPage > 2 && (
            <li className="page-item disabled">
              <span className="page-link">...</span>
            </li>
          )}
        </>
      )}
      {paginationRange.map((page) => (
        <li className="page-item" key={page}>
          <Link
            href={`/${type}/${page}`}
            className={`page-link ${currentPage == page ? "active" : ""}`}
          >
            {page}
          </Link>
        </li>
      ))}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <li className="page-item disabled">
              <span className="page-link">...</span>
            </li>
          )}
          <li className="page-item">
            <Link href={`/${type}/${totalPages}`} className="page-link">
              {totalPages}
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Pagination;
