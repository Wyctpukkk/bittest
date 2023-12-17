export const UsersTableRow = () => {
  return (
    <>
      <button
        type="button"
        className="flex w-full h-[64px] hover:bg-borderBlue hover:opcaity-50"
      >
        <div className="w-1/2 sm:w-1/6 flex items-center justify-center text-[14px] leading-[18px]">
          Email
        </div>
        <div className="w-1/2 sm:w-1/6 flex items-center justify-center text-[14px] leading-[18px]">
          Имя
        </div>
        <div className="hidden sm:w-1/6 sm:flex items-center justify-center text-[14px] leading-[18px]">
          Роль
        </div>
        <div className="hidden sm:w-1/6 sm:flex items-center justify-center text-[14px] leading-[18px]">
          Подписка
        </div>
        <div className="hidden sm:w-1/6 sm:flex items-center justify-center text-[14px] leading-[18px]">
          Токены
        </div>
        <div className="hidden sm:w-1/6 sm:flex items-center justify-center text-[14px] leading-[18px]">
          Действия
        </div>
      </button>
      <span className="block w-full h-[1px] bg-borderBlue" />
    </>
  );
};
