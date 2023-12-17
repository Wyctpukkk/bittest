import { formatDate, formatTime } from '../helpers/dateCalculator';
import { ITransfer } from '../interfaces/userTransfersInterface';

interface ITransfersTableRow {
  transfer: ITransfer;
}

export const TransfersTableRow = ({ transfer }: ITransfersTableRow) => {
  return (
    <>
      <div className="flex w-full h-[64px]">
        <div className="w-1/3 flex items-center justify-center text-[14px] leading-[18px]">
          {transfer?.type === 'REPLENISH' ? 'Пополнение' : 'Списание'}
        </div>
        <div
          className={`w-1/3 flex items-center justify-center text-[14px] leading-[18px] ${
            transfer?.type === 'REPLENISH' ? 'text-[#1ABB34]' : 'text-[#FE4242]'
          } `}
        >
          {`${
            transfer?.type === 'REPLENISH'
              ? transfer?.amount
              : `-${transfer?.amount}`
          } ${transfer?.currency === 'SYSTEM_TOKEN' ? 'BTKN' : 'BTC'}`}
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center text-[14px] leading-[18px]">
          <div>{formatDate(transfer?.created_at)}</div>
          <div>{formatTime(transfer?.created_at)}</div>
        </div>
      </div>
      <span className="block w-full h-[1px] bg-borderBlue" />
    </>
  );
};
