import avatar from '../assets/icons/avatar.svg';
import suitecase from '../assets/icons/case.svg';

export const Header = () => {
  return (
    <header className="w-full h-[49px] sm:h-[82px] bg-mainBlue rounded-[10px] sm:rounded-[17px] px-[24px] py-[16px] flex gap-[44px] justify-between items-center">
      <div className="w-[97px] text-[22px] font-[600] leading-[29px]">BitTest</div>

      <div className="flex-1 flex items-center gap-[10px]">
        <div className="w-[24px] h-[24px] bg-borderBlue rounded-[4px] flex items-center justify-center">
          <img src={suitecase} alt="suitcase" />
        </div>
        <span className="text-[14px] md:text-[14px] leading-[18px] md:leading-[22px]">
          Моя организация
        </span>
      </div>

      <div className="hidden sm:flex w-[178px] h-[50px] gap-[12px] items-center justify-center px-[14px] py-[8px] border-[2px] rounded-[6px] border-borderBlue">
        <div>
          <img src={avatar} alt="avatar" />
        </div>

        <div className="flex flex-col ">
          <span className="text-[12px] text-[#616D8D] leading-[16px]">Вы авторизованы</span>
          <span className="text-[14px] leading-[18px]">Администратор</span>
        </div>
      </div>
    </header>
  );
};
