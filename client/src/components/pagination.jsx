/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import { CaretLeft, CaretRight } from 'phosphor-react';
import { usePagination, DOTS } from '../hooks/usePagination';

function Pagination(props) {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="flex flex-row gap-3">
      {currentPage > 1 && (
        <button
          type="button"
          className="py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
          onClick={onPrevious}
        >
          {/* <Left className="fill-white/50 hover:fill-white/80" /> */}
          <CaretLeft
            size={18}
            weight="bold"
            className="text-white/50 hover:text-white/80"
          />
        </button>
      )}
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <button
              className="text-white/80 py-1 px-2 border rounded-md border-white/20 bg-zinc-800"
              type="button"
            >
              ...
            </button>
          );
        }

        return (
          <button
            type="button"
            className={
              pageNumber === currentPage
                ? 'text-white/80 px-2 border rounded-md border-white/20 bg-zinc-800'
                : 'text-white/50 hover:text-white/80 px-2 border rounded-md border-white/20 bg-zinc-800'
            }
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      {currentPage < lastPage && (
        <button
          type="button"
          className="py-1 px-1 border rounded-md border-white/20 bg-zinc-800"
          onClick={onNext}
        >
          <CaretRight
            size={18}
            weight="bold"
            className="text-white/50 hover:text-white/80"
          />
        </button>
      )}
    </div>
  );
}

export default Pagination;
