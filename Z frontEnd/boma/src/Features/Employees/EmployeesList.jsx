import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import RegisterEmployee from './RegisterEmployee';
import EditEmployee from './EditEmployee';
import { useGetAllEmployeesQuery, useDeleteEmployeeMutation } from './EmployeeApiSlice';

export default function EmployeeList() {
  const {data, error, isLoading} = useGetAllEmployeesQuery()
  let employees

  if(data){
    const {ids, entities} = data
    employees = ids.map(id => entities[id])
  }
    
const [deleteEmployee, {
    isSuccess: isDelSuccess,
    isError: isDelError,
    error: delerror
  }] = useDeleteEmployeeMutation()

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
        {employees?.map((employee, index) => (
          <tr key={employee._id}>
            <td>{index + 1}</td> 
            <td>{employee.employee_name}</td>
            <td>{employee.designation}</td>
            <td>{employee.phone_number}</td>
            <td>{employee.email}</td>            
            <td><Button variant='danger' onClick={() => {deleteEmployee(employee._id)}}> Delete </Button></td>
            <td><EditEmployee employee={employee} /> </td>
          </tr>          
        ))}        
      </tbody>
    </Table>
        <RegisterEmployee />
      </div>
    
  );
}

  

    // const [employees, setEmployees] = useState([])
    // const [fetchData, setFetchData] = useState(true); // Not the best way to trigger data re-fetch

  //create employee
  //INITIALLY *POSTEMPLOYEE* WAS PASSED AS PROP TO REGISTER EMPLOYEE COMPONENT
  // const postEmployee= async(employeeData) => {
  //   try{
  //     await axiosInstance.post('/employees/signup', employeeData)
  //     .then((result) => {
  //       setFetchData(false)
  //       const newEmployee = result.data.employee
  //       // setEmployees(oldEmployees =>[...oldEmployees, newEmployee])
  //       // console.log(newEmployee)
  //     })
  //   }
  //   catch(error) {console.log(error)}
  // }

 
    //fetch All Employees
     
//   const fetchEmployees = async () => {
//     await axiosInstance.get('/employees')
//       .then(response => {
//         console.log(response);
//           setEmployees(response.data.result)
//           // setFetchData(false); // Reset fetchData to avoid continuous re-fetch 
//       })      
//       .catch((error) => {
//           console.log(error);
//       })
//     }
//  useEffect(() => { 
//   fetchEmployees()
//   }, [])
 
//delete Employee
  // const onDelete = async (employeesId) =>{   
  //    try{
  //     await axiosInstance.delete(`/employees/${employeesId}`)
  //     .then(() => setFetchData(true))
  //    } catch (error){
  //     console.log(error)
  //    }
  // }