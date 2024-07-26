import * as React from 'react';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';



export default function EmployeeList() {
    const [employees, setEmployees] = useState([])
  
 useEffect(() => {   
    axios.get('http://localhost:3000/employees')
    .then(response => {
        setEmployees(response.data.result)
        // console.log(response.data.result)        
    })      
    .catch((error) => {
        console.log(error);
    })
    }, [])

  return (
    <div class="container mt-3">
      
      <ListGroup>
        <ListGroup.Item><h1>List of Boma Butchery Employees</h1> </ListGroup.Item>
      </ListGroup>

    
    <Table striped bordered hover>
      <thead class="table-success">
        <tr>
          <th>#</th>
          <th>Employee Names</th>
          <th>Designation</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th colSpan={2}>Modify Entry</th>
        </tr>
      </thead>
      <tbody>
      {employees.map((employee, index) => (
          <tr key={employee._id}>
            <td>{index + 1}</td> 
            <td>{employee.employee_name}</td>
            <td>{employee.designation}</td>
            <td>{employee.phone_number}</td>
            <td>{employee.email}</td>
            <td><Button> Edit </Button></td> 
            <td><Button variant='danger'> Delete </Button></td>
          </tr>          
        ))}
        <Button variant='success' style={{paddingLeft: '4em', paddingRight: '5em', marginTop: '3em'}}> Add + </Button>
      </tbody>
    </Table>
  
      </div>
  );
}
