export const UsersTableHeader = () => {
  return (
    <div className="bg-darkBlue rounded-[8px] flex w-full h-[46px]">
      <div className="w-1/2 sm:w-1/6 flex items-center justify-center text-[#9CA3AF] text-[14px] leading-[18px]">
        Email
      </div>
      <div className="w-1/2 sm:w-1/6 flex items-center justify-center text-[#9CA3AF] text-[14px] leading-[18px]">
        Имя
      </div>
      <div className="hidden sm:w-1/6 sm:flex items-center justify-center text-[#9CA3AF] text-[14px] leading-[18px]">
        Роль
      </div>
      <div className="hidden sm:w-1/6 sm:flex items-center justify-center text-[#9CA3AF] text-[14px] leading-[18px]">
        Подписка
      </div>
      <div className="hidden sm:w-1/6 sm:flex items-center justify-center text-[#9CA3AF] text-[14px] leading-[18px]">
        Токены
      </div>
      <div className="hidden sm:w-1/6 sm:flex items-center justify-center text-[#9CA3AF] text-[14px] leading-[18px]">
        Действия
      </div>
    </div>
  );
};