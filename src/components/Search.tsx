import search from '../assets/icons/search.svg';

export const Search = () => {
  return (
    <div className="relative flex mx-[34px] my-[24px]">
      <img
        className="absolute top-[14px] left-[14px]"
        src={search}
        alt="search"
      />
      <input
        placeholder="Поиск"
        className="focus:outline-none text-[14px] pl-[36px] px-[16px] py-[21px] border-[1px] border-borderBlue rounded-[8px] bg-mainBlue w-full h-[14px]"
      />
    </div>
  );
};
