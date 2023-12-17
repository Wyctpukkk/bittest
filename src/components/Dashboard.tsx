import { useState } from 'react';
import { Search } from './Search';
import { UsersTable } from './UsersTable';
import { AsideBlock } from './AsideBlock';

export const Dashboard = () => {
  const [showAside, setShowAside] = useState<boolean>(true);
  return (
    <div className="flex-1 w-full bg-mainBlue rounded-[18px]">
      <div className="text-[22px] leading-[29px]">
        <div className="pt-[24px] ml-[34px] font-[600]">Моя организация</div>
        <span className="block w-full h-[1px] bg-borderBlue mt-[24px]" />
        <div className="pt-[24px] ml-[34px] font-[600]">Пользователи</div>
      </div>
      <Search />
      <UsersTable setShowAside={setShowAside} />
      {showAside && <AsideBlock setShowAside={setShowAside} />}
    </div>
  );
};
