import axios from 'axios';

// axios config for server
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const http = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
