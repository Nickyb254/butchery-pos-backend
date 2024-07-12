import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './AllEmployees.css';
import BasicTable from '../components/table/basicTable';

const AllEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/employees')
      .then(response => {        
          setEmployees(response.data); 
          //console.log(response);
      })
      .catch(error => console.log(error));
  }, []);
  console.log(employees);
  
  const data = useContext(() => employees, [])
  return (
    <>
        <BasicTable data={data} />
   </> 
  );
};

export default AllEmployees;
