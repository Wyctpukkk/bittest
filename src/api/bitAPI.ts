import { IResponseGetUsers } from '../interfaces/userListInterface';

/* eslint-disable no-alert */
const url = 'https://test.gefara.xyz/api/v1';

export const getUserList = async (): Promise<IResponseGetUsers> => {
  try {
    const response = await fetch(`${url}/user/list`);
    const data = await response.json();
    return data;
  } catch (error) {
    alert('Сервер не отвечает на запрос getUserList');
    throw error;
  }
};

export const getUserTransfers = async (id: number) => {
  try {
    const response = await fetch(`${url}/user/${id}/transactions`);
    const data = await response.json();
    return data;
  } catch (error) {
    alert('Сервер не отвечает на запрос getUserTransfers');
    throw error;
  }
};
