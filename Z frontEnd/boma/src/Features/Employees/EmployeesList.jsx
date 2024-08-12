import  React, { useEffect, useState }  from 'react';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import axiosInstance from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import RegisterEmployee from './RegisterEmployee';
import EditEmployee from './EditEmployee';



export default function EmployeeList() {
    const [employees, setEmployees] = useState([])
    const [fetchData, setFetchData] = useState(true); // State to trigger data re-fetch
    const navigate = useNavigate()

    const [showForm, setShowForm] = useState()
    const [selectedEmployee, setSelectedEmployee] = useState(null)
  
    //fetch All Employees
 useEffect(() => { 
  if (fetchData) {
    axiosInstance.get('/employees')
    .then(response => {
        setEmployees(response.data.result)
        setFetchData(false); // Reset fetchData to avoid continuous re-fetch       
    })      
    .catch((error) => {
        console.log(error);
    })
  }}, [fetchData])

  //createEmployee
  const handleCreateClick = () => {
    setSelectedEmployee(null)
    setShowForm(true)
  }

  const onSaveButtonClick = (e) => {
    e.preventDefault()    
    const request = isEditting
        ? axios.patch('http://localhost:3000/employees', data)
        : axios.post('http://localhost:3000/employees', data)

    request.then()
        .catch((error) => {
          console.log(error)
        })
          setEmployee_name('')
          setDesignation('')
          setPhone_number('')
          setEmail('')
          setPassword('')
    }
  
  
  //update Employee 
  const handleEditClick = (employee) => {
    setSelectedEmployee(employee)
    setShowForm(true)
  }

  const updateEmployee = async (employeesId) => {
    const [data, setData] = useState([])
    try{
       await axiosInstance.patch(`/employees/${employeesId}`)
        .then(() => {
          
          setFetchData(true)})            
      }catch (error){
        console.log(error)
      }
    }

    const handleCloseClick = () => {
      setShowForm(false)
    }

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
            <td><EditEmployee employee_name={employee.employee_name} designation={employee.designation} phone_number={employee.phone_number} email={employee.email} password={employee.password} /> </td>
          </tr>          
        ))}
        <Button onClick={handleCreateClick} variant='success' style={{paddingLeft: '4em', paddingRight: '5em', marginTop: '3em'}}> Add + </Button>
        <RegisterEmployee />
      </tbody>
    </Table>
      </div>
    
  );
}
