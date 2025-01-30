import React, { useState, useEffect } from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import { useAddNewCustomerMutation } from './CustomerApiSlice';
import { useNavigate } from 'react-router-dom';

export default function CustomerSelfRegistration() {
  const navigate = useNavigate()

  const [addNewCustomer, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useAddNewCustomerMutation()
 
  const [customer_name, setCustomer_name] = useState();
  const [email, setEmail] = useState();
  const [customer_phone, setCustomer_phone] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const data = {customer_name, email, customer_phone, password, confirmPassword}
  
  const handleRegister =  (e) => {
    e.preventDefault();
    addNewCustomer(data)
    navigate('/customers')   
  }

  // const canSave = Boolean(employee_name) && Boolean(phone_number) && Boolean(password);
  

  return ( 
<Card style={{ width: '38vw', padding: '0.15em', margin: 'auto'}}>
<Card.Body>
 <Card.Title >Fill form to register:</Card.Title>
   <small>* required fields.</small>
   <Form onSubmit={handleRegister} style={{paddingTop: '2em'}} >

     <Form.Group className="mb-3">
       <Form.Label>* Enter Full Names:</Form.Label>
       <Form.Control type="string" onChange = {(e) => setCustomer_name(e.target.value)} />
     </Form.Group>

     <Form.Group className="mb-3">
       <Form.Label>* Enter your email address:</Form.Label>
       <Form.Control type="email"  onChange = {(e) => setEmail(e.target.value)} />
     </Form.Group>

     <Form.Group className="mb-3" >
       <Form.Label>* Phone Number:</Form.Label>
       <Form.Control type="string" onChange = {(e) => setCustomer_phone(e.target.value)} />
     </Form.Group>

     <Form.Group className="mb-3"   >
       <Form.Label>Enter Password:</Form.Label>
       <Form.Control  type="string" onChange = {(e) => setPassword(e.target.value)} />
     </Form.Group>

     <Form.Group className="mb-3" >
       <Form.Label>*Confirm Password:</Form.Label>
       <Form.Control type="string" onChange = {(e) => setConfirmPassword(e.target.value)} />
     </Form.Group>

     <Button variant="primary" type='submit' style={{marginTop: '3em'}}>Register</Button>
   </Form>
</Card.Body>
</Card>

  );
}


// const [formState, setFormState] = useState({
//   customer_name: '',
//   email: '',
//   customer_phone: '',
//   password: '',
//   confirmPassword: '',
// })  

// const onInputChange = (e) => {
//   const { name, value } = e.target;
//   setFormState(prevState => ({
//     ...prevState,
//     [name]: value}))
// }

{/* <Form.Group className="mb-3" value={formState.confirmPassword}>
       <Form.Label>*Confirm Password:</Form.Label>
       <Form.Control type="string" onChange={onInputChange}   />
     </Form.Group> */}