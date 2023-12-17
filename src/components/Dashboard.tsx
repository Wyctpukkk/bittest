import { useEffect, useState } from 'react';
import { Search } from './Search';
import { UsersTable } from './UsersTable';
import { AsideBlock } from './AsideBlock';
import { getUserList } from '../api/bitAPI';
import { IUserInfo } from '../interfaces/userListInterface';

export const Dashboard = () => {
  const [userList, setUserList] = useState<IUserInfo[] | null>(null);
  const [showAside, setShowAside] = useState<boolean>(false);

  useEffect(() => {
    getUserList()
      .then((data) => {
        setUserList(data.data);
      })
      .catch(() => {
        alert('Сервер не отвечает на запрос getUserList');
      });
  }, []);

  return (
    <div className="flex-1 w-full bg-mainBlue rounded-[18px]">
      <div className="text-[22px] leading-[29px]">
        <div className="pt-[24px] ml-[34px] font-[600]">Моя организация</div>
        <span className="block w-full h-[1px] bg-borderBlue mt-[24px]" />
        <div className="pt-[24px] ml-[34px] font-[600]">Пользователи</div>
      </div>
      <Search />
      {userList && (
        <UsersTable userList={userList} setShowAside={setShowAside} />
      )}
      <div> PAGINATION </div>
      {showAside && <AsideBlock setShowAside={setShowAside} />}
    </div>
  );
};
