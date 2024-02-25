'use server';

import axios, { AxiosInstance } from 'axios';
import { cookies } from 'next/headers';

const Calls = (
  baseURL: string | undefined = 'https://evento-qo6d.onrender.com/api/v1',
  authorization: boolean = false,
): AxiosInstance => {
  const authToken = cookies()?.get('access_token')?.value;

  return axios.create({
    baseURL,
    timeout: 300000,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      Connection: 'keep-alive',
      credentials: 'include',
      Authorization: authorization ? `Bearer ${authToken}` : undefined,
    },
    withCredentials: true,
  });
};

export default Calls;
