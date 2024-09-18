// EMPLOYEE REGISTERS SELF HERE
import React, { useState, useEffect } from 'react';
import { useAddNewEmployeeMutation } from './EmployeeApiSlice';

import {Form, Button, Card} from 'react-bootstrap';

export default function EmployeeRegistration() {
  const [addNewEmployee, {
    isLoading,
    isSuccess,
    isError,
    error
}] = useAddNewEmployeeMutation()
 
  const [employee_name, setEmployee_name] = useState()
  const [designation, setDesignation] = useState()
  const [bio, setBio] = useState()
  const [phone_number, setPhone_number] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
 
  const onNameChange = e => setEmployee_name(e.target.value)
  const onDesignationChange = e => setDesignation(e.target.value)
  const onBioChange = e => setBio(e.target.value)
  const onPhoneNumberChange = e => setPhone_number(e.target.value)
  const onEmailChange = e => setEmail(e.target.value)
  const onPasswordChange = e => setPassword(e.target.value)

  const data = {employee_name, designation, bio, phone_number, email, password}

  const handleRegister = async (e) => {
    e.preventDefault();
    await addNewEmployee(data)
  }

  // const canSave = Boolean(employee_name) && Boolean(phone_number) && Boolean(password);
  

  return ( 
<Card style={{ width: '38vw', padding: '0.15em', margin: 'auto'}}>
<Card.Body>
 <Card.Title >Register As Employee:</Card.Title>
   <small>* required fields.</small>
   <Form onSubmit={handleRegister} style={{paddingTop: '2em'}} >

     <Form.Group className="mb-3" controlId="employee_name">
       <Form.Label>* Enter Full Names:</Form.Label>
       <Form.Control type="string" onChange={onNameChange}  />
     </Form.Group>

     <Form.Group className="mb-3" controlId="designation">
       <Form.Label>* Enter your designation / role:</Form.Label>
       <Form.Control type="string" onChange={onDesignationChange}  />
     </Form.Group>

     <Form.Group className="mb-3" controlId="designation">
       <Form.Label>* Enter your bio:</Form.Label>
       <Form.Control type="string" onChange={onBioChange}  />
     </Form.Group>

     <Form.Group className="mb-3" controlId="phone_number">
       <Form.Label>* Phone Number:</Form.Label>
       <Form.Control type="string" onChange={onPhoneNumberChange}   />
     </Form.Group>

     <Form.Group className="mb-3" controlId="email">
       <Form.Label>Enter Your Email address:</Form.Label>
       <Form.Control autoComplete='true' type="email"  onChange={onEmailChange}  />
     </Form.Group>

     <Form.Group className="mb-3" controlId="password">
       <Form.Label>* Password:</Form.Label>
       <Form.Control type="string" onChange={onPasswordChange}  />
     </Form.Group>

     <Button variant="primary" type='submit' style={{marginTop: '3em'}}>Register</Button>
     {/* <p>Select area of residence for delivery options:</p> */}

   </Form>
</Card.Body>
</Card>

  );
}


//ORIGNAL CODE..................................
  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   axiosInstance.post('/employees/signup', data)
  //   .then((result) => {
  //      console.log(result)
  //     //  navigate('/employees/viewall')
  //   })
  //   .catch(error => console.log(error))
  // }