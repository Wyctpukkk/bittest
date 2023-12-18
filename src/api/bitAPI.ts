import { IResponseGetUsers } from '../interfaces/userListInterface';
import { ITransfer } from '../interfaces/userTransfersInterface';

/* eslint-disable no-alert */
const url = 'https://test.gefara.xyz/api/v1';

export const getUserList = async (
  sortValue: boolean,
  userName?: string,
): Promise<IResponseGetUsers> => {
  try {
    const response = await fetch(
      `${url}/user/list?orderBy=tokens%3A${sortValue ? 'desc' : 'asc'}${
        userName ? `&search=${userName}` : ''
      }`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    alert('Сервер не отвечает на запрос getUserList');
    throw error;
  }
};

export const getUserTransfers = async (id: string): Promise<ITransfer[]> => {
  try {
    const response = await fetch(`${url}/user/${id}/transactions`);
    const data = await response.json();
    return data;
  } catch (error) {
    alert('Сервер не отвечает на запрос getUserTransfers');
    throw error;
  }
};
