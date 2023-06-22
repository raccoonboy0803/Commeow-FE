import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = process.env.REACT_APP_SERVER_URL;
const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const accesstoken = Cookies.get('accesstoken');

    if (accesstoken) {
      config.headers.Access_Token = `Bearer ${accesstoken}`;
    }
    console.log('서버요청한다:::::::::', config);
    return config;
  },
  (error) => {
    // console.log('api요청전에러::::', error);
    return Promise.reject(error);
  }
);

export default api;
