import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import RegisterEmployee from './RegisterEmployee';
import EditEmployee from './EditEmployee';
import { useGetAllEmployeesQuery, useDeleteEmployeeMutation} from './EmployeeApiSlice';
import { Container } from 'react-bootstrap';

export default function EmployeeList() {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetAllEmployeesQuery(undefined, {
    // pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  })
  
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

  let changeColor
  
  return (
    <Container className='main-container'>
      <div className="container mt-3">      
        <ListGroup>
          <ListGroup.Item><h1>List of Boma Butchery Employees</h1> </ListGroup.Item>
        </ListGroup>
      
      <Table striped bordered hover>
        <thead className="table-success">
          <tr>
            <th>#</th>
            <th className='text-primary' >Employee Names</th>
            <th className='text-primary' >Designation</th>
            <th className='text-primary'>Phone Number</th>
            <th className='text-primary'>Email</th>
            <th className='text-primary' colSpan={2}>Modify Entry</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((employee, index) => {    
            employee.active ? changeColor = null : changeColor = 'text-secondary';
            return(
            <tr key={employee._id}>
              <td>{index + 1}</td> 
              <td  className={changeColor}>{employee.employee_name}</td>
              <td  className={changeColor}>{employee.designation}</td>
              <td  className={changeColor}>{employee.phone_number}</td>
              <td  className={changeColor}>{employee.email}</td>          
              <td><Button variant='danger' onClick={() => {deleteEmployee(employee._id)}}> Delete </Button></td>
              <td><EditEmployee employee={employee} /> </td>  
            </tr>  
          )})}        
        </tbody>
      </Table>
          <RegisterEmployee />
      </div>
    </Container>
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