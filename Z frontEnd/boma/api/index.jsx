import axios from "axios";

const url = 'http://localhost:3000/employees';

export const fetchEmployees =  () => {
  return  axios.get(url);  
}