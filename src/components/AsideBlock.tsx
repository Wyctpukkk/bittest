import { TransfersTable } from './TransfersTable';
import close from '../assets/icons/close.svg';
import { ITransfer } from '../interfaces/userTransfersInterface';

interface IAsideBlock {
  chartData: number[];
  currentUser: string;
  setShowAside: (value: boolean) => void;
  userTransfers: ITransfer[];
}

export const AsideBlock = ({
  chartData,
  currentUser,
  setShowAside,
  userTransfers,
}: IAsideBlock) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-1" />
      <aside className="fixed top-0 right-0 w-[470px] h-full bg-mainBlue z-100 overflow-auto">
        <div className="flex justify-between items-center pt-[56px] px-[20px]">
          <div className="text-[20px] font-[600] leading-[26px]">
            {currentUser}
          </div>
          <button onClick={() => setShowAside(false)} type="button">
            <img src={close} alt="close" />
          </button>
        </div>
        <TransfersTable
          chartData={chartData}
          userTransfers={userTransfers}
          currentUser={currentUser}
        />
      </aside>
    </>
  );
};
