import { IUserInfo } from '../interfaces/userListInterface';
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
  return (
    <div className="px-[34px]">
      <UsersTableHeader
        sortToSmall={sortToSmall}
        setSortToSmall={setSortToSmall}
      />
      <ul className="flex-1">
        {userList.map((userInfo) => {
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
    </div>
  );
};
