import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { employeeAdded } from '../features/employee/employeeSlice';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Avatar, Card, Stack, Typography, Button } from '@mui/material';
import staffIcon from '../components/assets/staff-icon.png';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function BasicTextFields() {
  const [employeeName, setEmployeeName] = useState('')
  const [designation, setDesignation] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onNameChange = e => setEmployeeName(e.target.value)
  const onDesignationChange = e => setDesignation(e.target.value)
  const onPhoneNumberChange = e => setphoneNumber(e.target.value)
  const onEmailChange = e => setEmail(e.target.value)
  const onPasswordChange = e => setPassword(e.target.value)

  const dispatch = useDispatch()
  const onSaveButtonClick = () => {
    if (employeeName && phoneNumber && password){
        dispatch(employeeAdded(employeeName, designation, phoneNumber, email, password))
          setEmployeeName('')
          setDesignation('')
          setphoneNumber('')
          setEmail('')
          setPassword('')
    }
  }

  const canSave = Boolean(employeeName) && Boolean(phoneNumber) && Boolean(email) && Boolean(password);

  return (
    <Card sx={{gap: 7, mb: 4, p: 2, marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
        </Avatar>
          <Typography component="h1" variant="h5" >
            Enter details to Sign up as Employee
          </Typography>
      
   
    <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" >      
    
      <TextField onChange={onNameChange} value={employeeName} id="employee_name" label="Name" variant="filled" helperText="Please enter employee name:" />
      <TextField onChange={onDesignationChange} value={designation} id="designation" label="Designation" variant="filled" helperText="Please enter employee designation:"/>
      <TextField onChange={onPhoneNumberChange} value={phoneNumber} id="phone_number" label="Phone" variant="filled" helperText="Please enter employee phone no:"/>
      <TextField onChange={onEmailChange} value={email} id="_email" label="Email" variant="filled" helperText="Please enter employee email:"/>
      <TextField onChange={onPasswordChange} value={password} id="password" label="Password" variant="filled" helperText="Please enter password:"/>
    </Box>
    <Button variant="outlined" type="submit" onClick={onSaveButtonClick} disabled={!canSave} >Submit</Button>
    </Card>
  );
}


// import React, { useState } from 'react'
// import axios from 'axios';
// import login_icon from '../components/assets/login_icon.png';
// import staffIcon from '../components/assets/staff-icon.png';
// import './EmployeeRegistration.css'

// const createEmployeeProfile = () => {
//   // const [employeeData, setEmployeeData] = useState({
//   //   username:'name',
//   //   designation:'job',
//   //   phone:'01235467',
//   //   email:'names@gmail.com',
//   //   password:'isitoshe',
//   // });
//   const [employee_name, setEmployee_name] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [phone_number, setPhone_number] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

 
// //  const onChangeHandler = (event) => {
// //   setFormData(() => ({
// //     ...employeeData,
// //     [event.target.name]: event.target.value
// //   }))
// //  }


//  const handleSubmit = (e) => {
//       e.preventDefault();
   
//       axios.post("http://localhost:3000/employees", {employee_name, designation, phone_number, email, password})
//       .then(result => console.log(result))
//       .catch(error => console.log(error))
//     // catch (error) {
//     //   console.error(error);
//     //   setMessage('Error creating user');
//     // }
    
//   }

//   return (
//     <div className='emp-hero'>
//       <div className='emp-container'>
//       <h2>Create Employee Profile</h2>
//       <div className='icon-pic'>
//             <img src={staffIcon} alt="" />
//         </div>

//       <br />
//           <div className='profile-pic'>
//               <img src={login_icon} alt="" />
//           </div>
//           User profile photo:
//       <br />

    
//                 <form  onSubmit={handleSubmit}>            
//                 {/* id and label should match */}
//                   <div>
//                     <label htmlFor="employee_name" className='form-label'>
//                       Employee name:
//                     </label>
//                       <input 
//                         type='text'
//                         className='input-plc'             
//                         id='employee_name'
//                         value={employee_name} 
//                         placeholder='Enter Name'
//                         onChange={(e) => setEmployee_name(e.target.value)}
//                         // onChange={onChangeHandler}
//                       />
//                   </div>          

//                   <div>
//                     <label htmlFor="designation" className='form-label'>
//                           Designation/ Role:
//                     </label>
//                       <input 
//                           className='input-plc' 
//                           type='text'                
//                           id='designation' 
//                           value={designation}  
//                           placeholder='Enter  Designation'
//                           onChange={(e) => setDesignation(e.target.value)}
//                           // onChange={onChangeHandler}
//                         />
//                   </div>
                    
//                   <div>
//                     <label htmlFor="phone_number" className='form-label'>
//                             Phone Number:
//                     </label>
//                       <input 
//                         className='input-plc'  
//                         type='text'             
//                         id='phone_number'
//                         value={phone_number}
//                         placeholder='Enter Phone Number'
//                         onChange={(e) => setPhone_number(e.target.value)}
//                         // onChange={onChangeHandler}
//                       />
//                   </div>

                    
//                   <div>
//                     <label htmlFor="_email" className='form-label'>
//                             Email:
//                     </label>
//                       <input 
//                         className='input-plc' 
//                         type='email'             
//                         id='_email'
//                         value={email} 
//                         placeholder='Enter Email Address'
//                         onChange={(e) => setEmail(e.target.value)}
//                         // onChange={onChangeHandler}
//                       />
//                   </div>
                  
                    
//                   <div>
//                     <label htmlFor="password" className='form-label'>
//                               Password:
//                     </label>
//                       <input 
//                         className='input-plc'    
//                         type='text'
//                         id='password'           
//                         value={password} 
//                         placeholder='Enter Password'
//                         onChange={(e) => setPassword(e.target.value)}
//                         // onChange={onChangeHandler}
//                       />
//                   </div>
                    
//                     <br />

//                     <p>Select area of residence for logistics options:</p>
//                     <button type='submit'>Submit</button>                  
//                 </form>
//        </div>
//     </div>
//   )
// }

// export default createEmployeeProfile 
