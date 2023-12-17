import { TransfersTableHeader } from './TransfersTableHeader';
import { TransfersTableRow } from './TransfersTableRow';

export const TransfersTable = () => {
  return (
    <div className="px-[20px]">
      <div className="block w-full h-[1px] bg-borderBlue mt-[18px]" />
      <div className="py-[18px] text-[20px] font-[600] leading-[26px]">
        История операций
      </div>
      <TransfersTableHeader />
      <TransfersTableRow />
    </div>
  );
};
