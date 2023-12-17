import { UsersTableHeader } from './UsersTableHeader';
import { UsersTableRow } from './UsersTableRow';

interface IUsersTable {
  setShowAside: (value: boolean) => void;
}

export const UsersTable = ({ setShowAside }: IUsersTable) => {
  return (
    <div className="px-[34px]">
      <UsersTableHeader />
      <UsersTableRow setShowAside={setShowAside} />
    </div>
  );
};
