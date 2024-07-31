import axios from 'axios';
const BASE_URL ="http://localhost:3000"

const axiosInstance = axios.create({
  baseURL: BASE_URL, 
});

export default axiosInstance;


export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});














// Add a request interceptor to include the token in the headers
// axiosInstance.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem('token'); // Or sessionStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );


