import { useEffect, useState } from 'react';
import search from '../assets/icons/search.svg';

interface ISearch {
  handleGetUsersList: (value: string) => void;
}

export const Search = ({ handleGetUsersList }: ISearch) => {
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleGetUsersList(inputValue);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [inputValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="relative flex mx-[34px] my-[24px]">
      <img
        className="absolute top-[14px] left-[14px]"
        src={search}
        alt="search"
      />
      <input
        value={inputValue}
        onChange={handleChange}
        placeholder="Поиск"
        className="focus:outline-none text-[14px] pl-[36px] px-[16px] py-[21px] border-[1px] border-borderBlue rounded-[8px] bg-mainBlue w-full h-[14px]"
      />
    </div>
  );
};
