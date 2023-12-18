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
  console.log(currentPage);

  const indexOfLastItem = currentPage * ItemsPerPage;
  const indexOfFirstItem = indexOfLastItem - ItemsPerPage;
  const currentItems = userList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(userList.length / ItemsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setRenderUserPerPage(currentItems);
  }, [currentPage]);

  const setPrevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const setNextPage = () => {
    if (currentPage <= totalPages) {
      paginate(currentPage + 1);
    }
  };

  return (
    <ul className="flex gap-[4px] justify-center items-center pt-[24px] pb-[45px]">
      <button onClick={setPrevPage} className="rotate-90" type="button">
        <img src={arrow} alt="prevpage" />
      </button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <li key={index}>
          <button
            className={`w-[38px] h-[38px] ${
              currentPage === index + 1 ? 'bg-[#1C64F2]' : ''
            } hover:border-[1px] border-[#fff] hover:opacity-90 rounded-[8px]`}
            type="button"
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        </li>
      ))}
      <button onClick={setNextPage} className="-rotate-90" type="button">
        <img src={arrow} alt="nextpage" />
      </button>
    </ul>
  );
};
