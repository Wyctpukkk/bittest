import { ITransfer } from '../interfaces/userTransfersInterface';
import { TransfersTableHeader } from './TransfersTableHeader';
import { TransfersTableRow } from './TransfersTableRow';

interface ITransfersTable {
  userTransfers: ITransfer[];
}

export const TransfersTable = ({ userTransfers }: ITransfersTable) => {
  return (
    <div className="px-[20px]">
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
