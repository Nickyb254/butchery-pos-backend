import axios from 'axios';
// import { useAuth } from '../context/AuthProvider'; // Adjust the import path
const BASE_URL ="http://localhost:3000"

const axiosInstance = axios.create({
  baseURL: BASE_URL, 
  // withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
  // timeout: 10000,
});

export default axiosInstance


export const axiosPrivate = axios.create({
  baseURL: BASE_URL, 
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})






