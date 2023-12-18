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
  setSortToSmall: (value: boolean) => void;
}

export const UsersTable = ({
  userList,
  setShowAside,
  handleGetUserTransfers,
  sortToSmall,
  setSortToSmall,
}: IUsersTable) => {
  const [renderUserPerPage, setRenderUserPerPage] = useState<IUserInfo[]>(userList);

  console.log(userList);
  console.log(renderUserPerPage);

  return (
    <div className="px-[34px]">
      <UsersTableHeader sortToSmall={sortToSmall} setSortToSmall={setSortToSmall} />
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
