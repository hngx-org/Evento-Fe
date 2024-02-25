'use server';

import Calls from './calls';

const BaseUrl = process.env.BASEURL ?? 'https://evento-qo6d.onrender.com/api/v1';

const $http = Calls(BaseUrl);

export const allevent = async () => {
  try {
    const res = await $http.get('/events');
    if (res.status === 200) {
      return {
        status: 'success',
        events: res.data.data,
      };
    }
  } catch (e: any) {
    console.log(e);
    if (e?.response?.status === 403) {
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

export const allcategories = async () => {
  try {
    const res = await $http.get('/categories');
    if (res.status === 200) {
      return {
        status: 'success',
        categories: res.data.data,
      };
    }
  } catch (e: any) {
    console.log(e);
    if (e?.response?.status === 403) {
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

export const geteventsbycategories = async (categoryID: string) => {
  try {
    const res = await $http.get(`/categories/${categoryID}/events`);
    if (res.status === 200) {
      return {
        status: 'success',
        events: res.data.data,
      };
    }
  } catch (e: any) {
    console.log(e);
    if (e?.response?.status === 403) {
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
