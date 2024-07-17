import axios from "axios";

const url = 'http://localhost:${PORT}/employees';

export const fetchAllEmployees = async () => {
  const {allEmployeesData} = await axios.get(url);  
}