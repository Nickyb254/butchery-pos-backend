import  React, { useEffect, useState }  from 'react';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import axiosInstance from '../../api/axios';
import RegisterEmployee from './RegisterEmployee';
import EditEmployee from './EditEmployee';

export default function EmployeeList() {
    const [employees, setEmployees] = useState([])
    const [fetchData, setFetchData] = useState(true); // State to trigger data re-fetch
      
  //create employee
  const postEmployee= async(employeeData) => {
    try{
      await axiosInstance.post('/employees/signup', employeeData)
      .then((result) => {
        setFetchData(true)
        console.log(result)
      })
    }
    catch(error) {console.log(error)}
  }

 
    //fetch All Employees
 useEffect(() => { 
  if (fetchData) {
    axiosInstance.get('/employees')
    .then(response => {
        setEmployees(response.data.result)
        setFetchData(false); // Reset fetchData to avoid continuous re-fetch 
    })      
    .catch((error) => {
        console.log(response.data.result);
    })
  }}, [fetchData])
 

//delete Employee
  const onDelete = async (employeesId) =>{   
     try{
      await axiosInstance.delete(`/employees/${employeesId}`)
      .then(() => setFetchData(true))
     } catch (error){
      console.log(error)
     }
  }

  return (
  
    <div className="container mt-3">
      
      <ListGroup>
        <ListGroup.Item><h1>List of Boma Butchery Employees</h1> </ListGroup.Item>
      </ListGroup>

    
    <Table striped bordered hover>
      <thead className="table-success">
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
            <td><Button variant='danger' onClick={() => {onDelete(employee._id)}}> Delete </Button></td>
            <td><EditEmployee employee={employee}/> </td>
          </tr>          
        ))}        
      </tbody>
    </Table>
        <RegisterEmployee postEmployee={postEmployee} />
      </div>
    
  );
}
