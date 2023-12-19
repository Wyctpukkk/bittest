import React from 'react';

import { IUserInfo } from '../interfaces/userListInterface';
import trash from '../assets/icons/trash.svg';
import edit from '../assets/icons/edit.svg';

interface IUserTableRow {
  userInfo: IUserInfo;
  setShowAside: (value: boolean) => void;
  handleGetUserTransfers: (value: IUserInfo) => void;
}

export const UsersTableRow = React.memo(
  ({ userInfo, setShowAside, handleGetUserTransfers }: IUserTableRow) => {
    const showCurrentUser = () => {
      setShowAside(true);
      handleGetUserTransfers(userInfo);
    };

    return (
      <>
        <button
          type="button"
          onClick={showCurrentUser}
          className="flex gap-[1px] justify-around items-center w-full h-[64px] hover:bg-borderBlue hover:opcaity-50"
        >
          <div className="w-1/2 sm:w-4/12 xl:w-1/6 flex items-center justify-center text-[14px] leading-[18px] overflow-hidden">
            {userInfo?.email}
          </div>
          <div className="w-1/2 sm:w-3/12 xl:w-1/6 flex items-center justify-center text-[14px] leading-[18px] overflow-hidden">
            {userInfo?.name}
          </div>
          <div className="hidden sm:w-1/12 xl:w-1/6 sm:flex items-center justify-center text-[14px] leading-[18px]">
            {userInfo?.role}
          </div>
          <div className="hidden sm:w-1/12 xl:w-1/6 sm:flex items-center justify-center text-[14px] leading-[18px]">
            {userInfo?.subscription?.plan?.type}
          </div>
          <div className="hidden sm:w-1/12 xl:w-1/6 sm:flex items-center justify-center text-[14px] leading-[18px]">
            {userInfo?.subscription?.tokens}
          </div>
          <div className="hidden sm:w-1/12 xl:w-1/6 sm:flex items-center justify-center">
            <img className="w-[18px] h-[18px]" src={trash} alt="delete" />
            <img className="w-[18px] h-[18px]" src={edit} alt="edit" />
          </div>
        </button>
        <span className="block w-full h-[1px] bg-borderBlue" />
      </>
    );
  },
);
