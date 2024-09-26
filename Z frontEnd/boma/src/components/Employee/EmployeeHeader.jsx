import React from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useEmployeeLogOutMutation } from '../../Features/Employees/EmployeeApiSlice';
import {BsHouseExclamation } from 'react-icons/bs'
import { selectEmployee } from '../../Features/Employees/EmployeeSlice'
import { useSelector } from 'react-redux';

const EmployeeHeader = () => {
  const navigate = useNavigate()
  const employee = useSelector(selectEmployee)

  const [employeeLogOut, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useEmployeeLogOutMutation()  
  
  const logOut = async (e) => {
    await employeeLogOut()
    window.localStorage.setItem("loggedIn", false)
    navigate('/')
  } 

  const content = (
    
      // <Navbar  style={{backgroundColor: 'black'}} >
      //   <Container>
      //     <Navbar.Toggle />
      //     <Navbar.Collapse className="justify-content-end p-6">
      //       <Navbar.Text>
      //         {/* Signed in as: <a href="#login">Admin</a> */}
      //         <Navbar.Brand href="/"> <BsHouseExclamation style={{color: 'white'}}  className='icon_header, pR:5'/><strong style={{color: 'white'}}>BOMA</strong></Navbar.Brand>

      //         <Button variant='outline-primary' style={{color: 'white'}} onClick={ logOut}>Log Out</Button>
      //       </Navbar.Text>
      //     </Navbar.Collapse>
      //   </Container>
      // </Navbar>

      <div className='header'>
        <div onClick={()=>{navigate('/')}}><BsHouseExclamation style={{color: 'white'}}  className='icon_header'/>
          <strong className='d-inline mx-4' >BOMA butchery</strong>
          <h6 className='d-inline mx-4' >Welcome: {employee.employee_name}!</h6>
        </div>
        <div className='header-right end'>          
          <Button variant='outline-primary' style={{color: 'white'}} onClick={ logOut}>Log Out</Button>
        </div>
      </div>
   
  )
  return content
}

export default EmployeeHeader


//ORIGINAL CODE ...................................
 // const handleLogOut = async (e) => {
  //   e.preventDefault();
  //   try{
  //     const response = await axiosInstance.get(LOGOUT_URL)
  //     setAuth(null)
  //     window.localStorage.setItem("loggedIn", false)
  //   }catch (error) {
  //     console.log(error)
  //   }
  // }