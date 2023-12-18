import { ITransfer } from '../interfaces/userTransfersInterface';
import { Chart } from './Chart';
import { TransfersTableHeader } from './TransfersTableHeader';
import { TransfersTableRow } from './TransfersTableRow';

interface ITransfersTable {
  chartData: number[];
  currentUser: string;
  userTransfers: ITransfer[];
}

export const TransfersTable = ({
  chartData,
  currentUser,
  userTransfers,
}: ITransfersTable) => {
  return (
    <div className="px-[20px]">
      <div className="py-[18px] text-[20px] font-[600] leading-[26px]">
        Использование токенов
      </div>
      <Chart chartData={chartData} />
      <div className="flex gap-[5px] items-center justify-center mb-[20px]">
        <div className="w-[12px] h-[12px] bg-[#1C64F2]" />
        <div className="text-[#616D8D] text-[14px] leading-[18px] ">
          {currentUser}
        </div>
      </div>
      <div className="block w-full h-[1px] bg-borderBlue mt-[18px]" />
      <div className="py-[18px] text-[20px] font-[600] leading-[26px]">
        История операций
      </div>
      <TransfersTableHeader />
      <ul>
        {userTransfers.map((transfer) => {
          return (
            <li key={transfer?.id}>
              <TransfersTableRow transfer={transfer} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
