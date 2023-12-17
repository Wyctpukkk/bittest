import { IUserInfo } from '../interfaces/userListInterface';
import { UsersTableHeader } from './UsersTableHeader';
import { UsersTableRow } from './UsersTableRow';

interface IUsersTable {
  userList: IUserInfo[];
  setShowAside: (value: boolean) => void;
  handleGetUserTransfers: (value: string) => void;
}

export const UsersTable = ({
  userList,
  setShowAside,
  handleGetUserTransfers,
}: IUsersTable) => {
  return (
    <div className="px-[34px]">
      <UsersTableHeader />
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
