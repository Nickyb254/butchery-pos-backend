// INSIDE EMPLOYEES
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import CustomersList from './CustomersList';
import { useAddNewCustomerMutation } from './CustomerApiSlice';
//employees register customers here
//employees can also view/modify customers 
//using different UI from Admin

export default function CustomerRegistration () {
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    await addNewCustomer(data)
    handleClose()
  }
  
  return (

    <Card>
      <Card.Body>
          <Form onSubmit={handleSubmit} style={{paddingTop: '2em'}} >

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Names</Form.Label>
              <Form.Control type="string" onChange = {(e) => setCustomer_name(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" onChange = {(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="string" name='phone' onChange = {(e) => setCustomer_phone(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="string" name='password' onChange = {(e) => setPassword(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="string" name='confirmPassword' onChange = {(e) => setConfirmPassword(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type='submit' style={{marginTop: '3em'}}>Submit</Button>

          </Form>
      </Card.Body>
    </Card>
      
  )
}
