import React, { FC } from "react";
import "./style.scss";
import ReactPaginate from "react-paginate";

interface IPaginationProps {
  pageCount: number;
  onChnagePage?: (page: number) => void;
  ellPerPage: number;
}
const Pagination: FC<IPaginationProps> = ({
  onChnagePage,
  pageCount,
  ellPerPage,
}) => {
  const handlePageClick = (event: any) => {
    if (onChnagePage) onChnagePage(event.selected + 1);
  };

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        className="pagintion"
        pageClassName="pagintion__page"
        activeClassName="pagintion__page_active"
        previousClassName="pagintion__previous"
        nextClassName="pagintion__next"
        disabledClassName={"pagintion__disabled"}
        breakClassName="pagintion__break"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={Math.ceil(pageCount / ellPerPage)}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
