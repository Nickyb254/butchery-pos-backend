import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axios';

import {Form, Button, Card} from 'react-bootstrap';



export default function CustomerSelfRegistration() {
  
 
  const [formState, setFormState] = useState({
    customer_name: '',
    email: '',
    phone: '',
    residence: '',
    password: ''
  })  

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      name: value}))
  }
  
console.log(formState)
  
  const handleRegister = (e) => {
    e.preventDefault();
    axiosInstance.post('/employees/signup', formState)
    .then((result) => {
       console.log(result)
      //  navigate('/employees/viewall')
    })
    .catch(error => console.log(error))
  }

  // const canSave = Boolean(employee_name) && Boolean(phone_number) && Boolean(password);
  

  return ( 
<Card style={{ width: '38vw', padding: '0.15em', margin: 'auto'}}>
<Card.Body>
 <Card.Title >Fill form to register:</Card.Title>
   <small>* required fields.</small>
   <Form onSubmit={handleRegister} style={{paddingTop: '2em'}} >

     <Form.Group className="mb-3" value={formState.customer_name} >
       <Form.Label>* Enter Full Names:</Form.Label>
       <Form.Control type="string" onChange={onInputChange} />
     </Form.Group>

     <Form.Group className="mb-3" value={formState.email} >
       <Form.Label>* Enter your email address:</Form.Label>
       <Form.Control type="email" onChange={onInputChange} />
     </Form.Group>

     <Form.Group className="mb-3" value={formState.phone}>
       <Form.Label>* Phone Number:</Form.Label>
       <Form.Control type="string" onChange={onInputChange}   />
     </Form.Group>

     <Form.Group className="mb-3"  value={formState.residence}  >
       <Form.Label>Enter Your Email address:</Form.Label>
       <Form.Control  type="residence"  onChange={onInputChange} />
     </Form.Group>

     <Form.Group className="mb-3" value={formState.password}>
       <Form.Label>* Password:</Form.Label>
       <Form.Control type="string" onChange={onInputChange}   />
     </Form.Group>

     <Button variant="primary" type='submit' style={{marginTop: '3em'}}>Register</Button>
     {/* <p>Select area of residence for delivery options:</p> */}

   </Form>
</Card.Body>
</Card>

  );
}
