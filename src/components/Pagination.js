import React from "react";
import { usePagination, DOTS } from "./usePagination";

import { Pagination } from "../styles/Pagination.style";

const PaginationComp = ({
  currentPage,
  onPageChange,
  pageSize,
  siblingCount = 1,
  totalCount,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <Pagination>
      {paginationRange.map((page) => {
        if (page === DOTS) {
          return <span className="pagination-item dots">&#8230;</span>;
        }

        return (
          <button
            className={currentPage === page ? "active-page" : ""}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        );
      })}
    </Pagination>
  );
};

export default PaginationComp;
