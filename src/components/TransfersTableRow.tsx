export const TransfersTableRow = () => {
  return (
    <>
      <div className="flex w-full h-[64px]">
        <div className="w-1/3 flex items-center justify-center text-[14px] leading-[18px]">
          Cписание
        </div>
        <div className="w-1/3 flex items-center justify-center text-[14px] leading-[18px] text-[#FE4242]">
          -1 000 BTKN
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center text-[14px] leading-[18px]">
          <div>31.10.23,</div>
          <div>13:41:19</div>
        </div>
      </div>
      <span className="block w-full h-[1px] bg-borderBlue" />
    </>
  );
};
