/* eslint-disable no-plusplus */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';

import { IUserInfo } from '../interfaces/userListInterface';
import arrow from '../assets/icons/sort.svg';

interface IPagination {
  userList: IUserInfo[];
  setRenderUserPerPage: (value: IUserInfo[]) => void;
}

export const Pagination = ({ userList, setRenderUserPerPage }: IPagination) => {
  const ItemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(userList.length / ItemsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const indexOfLastItem = currentPage * ItemsPerPage;
    const indexOfFirstItem = indexOfLastItem - ItemsPerPage;
    const currentItems = userList.slice(indexOfFirstItem, indexOfLastItem);
    setRenderUserPerPage(currentItems);
  }, [currentPage, userList, setRenderUserPerPage]);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const getPageNumbers = () => {
    const maxPagesToShow = 3; // Максимальное количество страниц для отображения

    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);

    while (endPage - startPage + 1 < maxPagesToShow && (startPage > 1 || endPage < totalPages)) {
      if (startPage > 1) {
        startPage--;
      }
      if (endPage < totalPages) {
        endPage++;
      }
    }

    const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

    if (startPage > 1) {
      pages.unshift(1);
    }
    if (endPage < totalPages) {
      pages.push(totalPages);
    }

    return pages;
  };

  const setPage = (pageNumber: number) => {
    paginate(pageNumber);
  };

  return (
    <ul
      className={`${
        userList.length <= ItemsPerPage ? 'hidden' : ''
      } flex gap-[4px] justify-center items-center pt-[24px] pb-[45px]`}
    >
      <button
        onClick={() => setPage(currentPage - 1)}
        className={`rotate-90 ${isFirstPage ? 'opacity-50' : ''}`}
        type="button"
        disabled={isFirstPage ? true : false}
      >
        <img src={arrow} alt="prevpage" />
      </button>

      {getPageNumbers().map((page, index) => (
        <div className="flex items-center justify-center" key={index}>
          {index !== 0 && page - getPageNumbers()[index - 1] > 1 && (
            <div className="w-[19px]">...</div>
          )}
          <li>
            <button
              className={`w-[38px] h-[38px] ${
                currentPage === page ? 'bg-[#1C64F2]' : ''
              } hover:border-[1px] border-[#fff] hover:opacity-90 rounded-[8px]`}
              type="button"
              onClick={() => setPage(page)}
            >
              {page}
            </button>
          </li>
        </div>
      ))}

      <button
        onClick={() => setPage(currentPage + 1)}
        className={`-rotate-90 ${isLastPage ? 'opacity-50' : ''}`}
        type="button"
        disabled={isLastPage ? true : false}
      >
        <img src={arrow} alt="nextpage" />
      </button>
    </ul>
  );
};
