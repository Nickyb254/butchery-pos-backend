import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button } from '@mui/material';
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
    <Box>
      <Button>
        Add +
        </Button>
        
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name of Staff </TableCell>
              <TableCell align="right">Designation</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Password</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { employees.map((employee) => (
              <TableRow
                key={employee._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {employee.employee_name}
                </TableCell>
                <TableCell align="right">{employee.designation}</TableCell>
                <TableCell align="right">{employee.phone_number}</TableCell>
                <TableCell align="right">{employee.email}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
