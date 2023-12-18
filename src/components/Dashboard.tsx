import { useEffect, useState } from 'react';

import { Search } from './Search';
import { UsersTable } from './UsersTable';
import { AsideBlock } from './AsideBlock';
import { getUserList, getUserTransfers } from '../api/bitAPI';
import { IUserInfo } from '../interfaces/userListInterface';
import { ITransfer } from '../interfaces/userTransfersInterface';

interface IDashboard {
  showAside: boolean;
  setShowAside: (value: boolean) => void;
}

export const Dashboard = ({ showAside, setShowAside }: IDashboard) => {
  const [userList, setUserList] = useState<IUserInfo[] | null>(null);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [chartData, setChartData] = useState<number[] | null>(null);
  const [userTransfers, setUserTransfers] = useState<ITransfer[] | null>(null);

  useEffect(() => {
    getUserList()
      .then((data) => {
        setUserList(data.data);
      })
      .catch(() => {
        alert('Сервер не отвечает на запрос getUserList');
      });
  }, []);

  const calculateChartData = (startAmount: number, transfers: ITransfer[]) => {
    let initialValue = startAmount;

    const result = transfers.map((change) => {
      if (change.type === 'REPLENISH') {
        initialValue += change.amount;
      } else {
        initialValue -= change.amount;
      }

      return initialValue;
    });

    setChartData(result.reverse());
  };

  const handleGetUserTransfers = async (user: IUserInfo) => {
    const transfers = await getUserTransfers(user?.id);
    setUserTransfers(transfers);
    setCurrentUser(user?.email);
    calculateChartData(user?.subscription?.tokens, transfers);
  };

  return (
    <div className="flex-1 w-full bg-mainBlue rounded-[18px]">
      <div className="text-[22px] leading-[29px]">
        <div className="pt-[24px] ml-[34px] font-[600]">Моя организация</div>
        <span className="block w-full h-[1px] bg-borderBlue mt-[24px]" />
        <div className="pt-[24px] ml-[34px] font-[600]">Пользователи</div>
      </div>
      <Search />
      {userList && (
        <UsersTable
          userList={userList}
          setShowAside={setShowAside}
          handleGetUserTransfers={handleGetUserTransfers}
        />
      )}
      <div> PAGINATION </div>
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
