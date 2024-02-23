'use server';

import Calls from './calls';
import { cookies } from 'next/headers';

const BaseUrl = process.env.BASEURL ?? 'https://evento-qo6d.onrender.com/api/v1';

const $http = Calls(BaseUrl, true);

export const getUser = async () => {
  const userId = cookies()?.get('userId')?.value;

  if (!userId) {
    return {
      error: 'Unauthorized. Missing access token.',
      status: 401,
    };
  }

  try {
    const res = await $http.get(`/user/${userId}`);
    if (res.status === 200) {
      return {
        status: 'success',
        user: res.data.data,
      };
    }
  } catch (e: any) {
    console.log(e);
    if (e?.response?.status === 401) {
      return {
        error: 'Unauthorized. Please check your access token.',
        status: 401,
      };
    } else if (e?.response?.status === 403) {
      return {
        error: 'Forbidden',
      };
    } else if (e?.response?.status === 404) {
      return {
        error: 'Not Found. The requested endpoint was not found.',
      };
    } else {
      return {
        error: 'An error occurred. Please try again later.',
      };
    }
  }
};
