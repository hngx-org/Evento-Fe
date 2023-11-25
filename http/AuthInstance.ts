import axios, { AxiosInstance } from 'axios';

const AuthInstance = (baseURL: string): AxiosInstance => {
  return axios.create({
    baseURL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      credentials: 'include',
    },
    // withCredentials: true,
  });
};

export default AuthInstance;
