import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './AllEmployees.css'

const AllEmployees = () => {
  const [employeesList, setEmployeesList] = useState([])



  useEffect(() => {
    axios.get(`http://localhost:3000/employees`)
    .then(employees => setEmployeesList(employees.data))
    .catch(error => console.log(error))
  },[])


  return (
    <div className='container'>
      <div className='hero'>
      <table className='table'>
        <thead>
          <tr>
            <th>
              Employee Name
            </th>
            <th>
              Designation
            </th>
            <th>
              Phone
            </th>
            <th>
              Email
            </th>
            <th>
              Password
            </th>
          </tr>
        </thead>
        <tbody>
          {
            employeesList.map(employees => {
              return
              <tr>
                <td>{employees.employee_name}</td>
                <td>{employees.designation}</td>
                <td>{employees.phone_number}</td>
                <td>{employees.email}</td>
                <td>{employees.password}</td>
              </tr>
            })
          }
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default AllEmployees