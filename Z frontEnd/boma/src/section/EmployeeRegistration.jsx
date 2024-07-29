import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function EmployeeRegistration() {
  const [employee_name, setEmployee_name] = useState()
  const [designation, setDesignation] = useState('')
  const [phone_number, setPhone_number] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onNameChange = e => setEmployee_name(e.target.value)
  const onDesignationChange = e => setDesignation(e.target.value)
  const onPhoneNumberChange = e => setPhone_number(e.target.value)
  const onEmailChange = e => setEmail(e.target.value)
  const onPasswordChange = e => setPassword(e.target.value)

  const data = {employee_name, designation, phone_number, email, password}

  const onSaveButtonClick = (e) => {
    e.preventDefault()    
        axios.post('http://localhost:3000/employees', data)
        .then()
        .catch((error) => {
          console.log(error)
        })
          setEmployee_name('')
          setDesignation('')
          setPhone_number('')
          setEmail('')
          setPassword('')
    }
  

  // const canSave = Boolean(employee_name) && Boolean(phone_number) && Boolean(password);

  return ( 
<Card style={{ width: '38vw', padding: '0.15em', margin: 'auto'}}>
<Card.Body>
 <Card.Title >Please Register Here:</Card.Title>
   <small>* means required fields.</small>
   <Form onSubmit={onSaveButtonClick} style={{paddingTop: '2em'}} >

     <Form.Group className="mb-3" controlId="employee_name">
       <Form.Label>* Enter Full Names:</Form.Label>
       <Form.Control type="string" onChange={onNameChange}  />
     </Form.Group>

     <Form.Group className="mb-3" controlId="designation">
       <Form.Label>* Enter your designation / role:</Form.Label>
       <Form.Control type="string" onChange={onDesignationChange}  />
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

     <Button variant="primary" type='submit' style={{marginTop: '3em'}}>Submit</Button>
     {/* <p>Select area of residence for delivery options:</p> */}

   </Form>
</Card.Body>
</Card>

  );
}

{/* <Div >
        
          <p component="h1" variant="h5" >
            Enter details to Sign up as Employee
          </p>
      
   
    <Div component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" >      
    
      <Input  id="employee_name" label="Name" variant="filled" helperText="Please enter employee name:" />
      <Input id="designation" label="Designation" variant="filled" helperText="Please enter employee designation:"/>
      <Input id="phone_number" label="Phone" variant="filled" helperText="Please enter employee phone no:"/>
      <Input  label="Email" variant="filled" helperText="Please enter employee email:"/>
      <Input id="password" label="Password" variant="filled" helperText="Please enter password:"/>
    </Div>
    <Button variant="outlined" type="submit" onClick={onSaveButtonClick} disabled={!canSave} >Submit</Button>
    </Div> */}