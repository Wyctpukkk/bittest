import sortArrow from '../assets/icons/sort.svg';

interface IUsersTableHeader {
  sortToSmall: boolean;
  setSortToSmall: (value: boolean) => void;
}

export const UsersTableHeader = ({
  sortToSmall,
  setSortToSmall,
}: IUsersTableHeader) => {
  return (
    <div className="bg-darkBlue rounded-[8px] flex w-full h-[46px] items-center justify-around">
      <div className="w-1/2 sm:w-4/12 xl:w-1/6 flex items-center justify-center text-[#9CA3AF] text-[14px] leading-[18px]">
        Email
      </div>
      <div className="w-1/2 sm:w-3/12 xl:w-1/6 flex items-center justify-center text-[#9CA3AF] text-[14px] leading-[18px]">
        Имя
      </div>
      <div className="hidden sm:w-1/12 xl:w-1/6 sm:flex items-center justify-center text-[#9CA3AF] text-[14px] leading-[18px]">
        Роль
      </div>
      <div className="hidden sm:w-1/12 xl:w-1/6 sm:flex items-center justify-center text-[#9CA3AF] text-[14px] leading-[18px]">
        Подписка
      </div>
      <button
        onClick={() => setSortToSmall(!sortToSmall)}
        type="button"
        className="hidden sm:w-1/12 xl:w-1/6 sm:flex items-center justify-center text-[#9CA3AF] text-[14px] leading-[18px]"
      >
        Токены
        <img
          className={`${sortToSmall ? '' : 'rotate-180'}`}
          src={sortArrow}
          alt="sort"
        />
      </button>
      <div className="hidden sm:w-1/12 xl:w-1/6 sm:flex items-center justify-center text-[#9CA3AF] text-[14px] leading-[18px]">
        Действия
      </div>
    </div>
  );
};
