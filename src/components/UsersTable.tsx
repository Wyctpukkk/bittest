import { useState } from 'react';
import { IUserInfo } from '../interfaces/userListInterface';
import { Pagination } from './Pagination';
import { UsersTableHeader } from './UsersTableHeader';
import { UsersTableRow } from './UsersTableRow';

interface IUsersTable {
  userList: IUserInfo[];
  setShowAside: (value: boolean) => void;
  handleGetUserTransfers: (value: IUserInfo) => void;
  sortToSmall: boolean;
  getSortToSmall: (value: boolean) => void;
}

export const UsersTable = ({
  userList,
  setShowAside,
  handleGetUserTransfers,
  sortToSmall,
  getSortToSmall,
}: IUsersTable) => {
  const [renderUserPerPage, setRenderUserPerPage] = useState<IUserInfo[]>(userList);

  return (
    <div className="px-[34px]">
      <UsersTableHeader sortToSmall={sortToSmall} getSortToSmall={getSortToSmall} />
      <ul className="flex-1">
        {renderUserPerPage.map((userInfo) => {
          return (
            <li key={userInfo?.id}>
              <UsersTableRow
                userInfo={userInfo}
                setShowAside={setShowAside}
                handleGetUserTransfers={handleGetUserTransfers}
              />
            </li>
          );
        })}
      </ul>
      {userList && <Pagination userList={userList} setRenderUserPerPage={setRenderUserPerPage} />}
    </div>
  );
};
