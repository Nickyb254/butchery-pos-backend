// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Box, Button } from '@mui/material';
// import { useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchEmployeesSuccess } from '../../redux/actions/employees/AllEmployeesSlice';



// export default function EmployeeList() {

//   // const dispatch = useDispatch()
//   // const employees = useSelector(state => state.employee.employees)
//   // console.log(useSelector(state => state.employee.employees))
//   // console.log(employees);
//   useEffect(() => {
//     const fetchEmployee = async() => {
//       try{
//         const response = await axios.get('http://localhost:3000/employees');
//         // console.log(response.data.result);        
//         // dispatch(fetchEmployeesSuccess(response.data.result))
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     fetchEmployee()
//   }, [])

//   return (
//     <Box>
//       <Button>
//         Add +
//         </Button>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Name of Staff </TableCell>
//               <TableCell align="right">Designation</TableCell>
//               <TableCell align="right">Phone Number</TableCell>
//               <TableCell align="right">Email</TableCell>
//               <TableCell align="right">Password</TableCell>
//             </TableRow>
//           </TableHead>
//           {/* <TableBody>
//             { employees.map((employee) => (
//               <TableRow
//                 key={employee.id}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   {employee.name}
//                 </TableCell>
//                 <TableCell align="right">{employee.role}</TableCell>
//                 <TableCell align="right">{employee.phone}</TableCell>
//                 <TableCell align="right">{employee.email}</TableCell>
                
//               </TableRow>
//             ))}
//           </TableBody> */}
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// }
