import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllEmployees.css';

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

  return (
    <div className='container'>
      <div className='hero'>
        <table className='table'>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Designation</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(employees) && employees.length > 0 ? (
              employees.map((employee) => 
                (
                <tr key={_id}>
                  <td>{employee.designation}</td>
                  <td>{employee.email}</td>
                  <td>{employee.employee_name}</td>
                  <td>{employee.password}</td>
                  <td>{employee.phone_number}</td>                  
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No employees found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEmployees;
