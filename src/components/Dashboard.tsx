import { useCallback, useState } from 'react';

import { Search } from './Search';
import { UsersTable } from './UserTable/UsersTable';
import { AsideBlock } from './AsideBlock';
import { getUserList, getUserTransfers } from '../api/bitAPI';
import { IUserInfo } from '../interfaces/userListInterface';
import { ITransfer } from '../interfaces/userTransfersInterface';
import { IChartData, IHandleGetUsersList } from '../interfaces/getUserList';
import { formatDateToChart } from '../helpers/dateCalculator';

interface IDashboard {
  showAside: boolean;
  setShowAside: (value: boolean) => void;
}

export const Dashboard = ({ showAside, setShowAside }: IDashboard) => {
  const [sortToSmall, setSortToSmall] = useState(true);
  const [userList, setUserList] = useState<IUserInfo[] | null>(null);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [chartData, setChartData] = useState<IChartData | null>(null);
  const [userTransfers, setUserTransfers] = useState<ITransfer[] | null>(null);

  const handleGetUsersList = useCallback(
    async ({ userName = '', sortValue = sortToSmall }: IHandleGetUsersList) => {
      const result = await getUserList(sortValue, userName);

      if (result) {
        setUserList(result.data);
      }
    },
    [],
  );

  const getSortToSmall = useCallback((sortValue: boolean) => {
    setSortToSmall(sortValue);
    handleGetUsersList({ sortValue });
  }, []);

  const calculateChartData = (startAmount: number, transfers: ITransfer[]) => {
    let initialValue = startAmount;

    const valueData = transfers
      .map((change) => {
        if (change.type === 'REPLENISH') {
          initialValue += change.amount;
        } else {
          initialValue -= change.amount;
        }

        return initialValue;
      })
      .reverse();

    const categoryData = transfers
      .map((transfer) => {
        return formatDateToChart(transfer.created_at);
      })
      .reverse();

    setChartData({ categoryData, valueData });
  };

  const handleGetUserTransfers = useCallback(async (user: IUserInfo) => {
    const transfers = await getUserTransfers(user?.id);
    setUserTransfers(transfers);
    setCurrentUser(user?.email);
    calculateChartData(user?.subscription?.tokens, transfers);
  }, []);

  return (
    <div className="flex-1 w-full bg-mainBlue sm:rounded-[18px]">
      <div className="text-[18px] sm:text-[20px] md:text-[22px] leading-[29px]">
        <div className="pt-[24px] ml-[34px] font-[600]">Моя организация</div>
        <span className="block w-full h-[1px] bg-borderBlue mt-[24px]" />
        <div className="pt-[24px] ml-[34px] font-[600]">Пользователи</div>
      </div>
      <Search handleGetUsersList={handleGetUsersList} />
      {userList && (
        <UsersTable
          userList={userList}
          setShowAside={setShowAside}
          handleGetUserTransfers={handleGetUserTransfers}
          sortToSmall={sortToSmall}
          getSortToSmall={getSortToSmall}
        />
      )}
      {showAside && userTransfers && currentUser && chartData && (
        <AsideBlock
          chartData={chartData}
          setShowAside={setShowAside}
          userTransfers={userTransfers}
          currentUser={currentUser}
        />
      )}
    </div>
  );
};
