import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URI,
  headers: {
     'Cache-Control': 'no-cache',
     'Content-Type': 'application/json',
     'Allow-Access-Control-Allow-Origin': '*',
     'Bearer':process.env.Bearer
  },
});

export default instance;
