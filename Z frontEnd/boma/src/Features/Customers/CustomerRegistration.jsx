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
    <Container>
      <Row>
        <Col className='mt-3 col-sm-4 col-lg-4'>
          <Card>
            <Card.Body>
              <Card.Title >Register Repeat Customers:</Card.Title>
                <small>This helps in recording orders.</small>
                <Form onSubmit={handleSubmit} style={{paddingTop: '2em'}} >

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Customer Names</Form.Label>
                    <Form.Control type="string" placeholder="Enter Customer Name" onChange = {(e) => setCustomer_name(e.target.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter Email" onChange = {(e) => setEmail(e.target.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Customer Phone Number</Form.Label>
                    <Form.Control type="string" name='phone' placeholder="Enter Customer Phone No." onChange = {(e) => setCustomer_phone(e.target.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="string" name='password' placeholder="Enter password" onChange = {(e) => setPassword(e.target.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="string" name='confirmPassword' placeholder="Enter password again" onChange = {(e) => setConfirmPassword(e.target.value)}/>
                  </Form.Group>

                  <Button variant="primary" type='submit' style={{marginTop: '3em'}}>Submit</Button>

                  {/* <p>Select area of residence for delivery options:</p> */}
                </Form>
            </Card.Body>
          </Card>
      </Col>
      <Col className='col-sm-8 col-lg-8 '>
        <CustomersList/>
      </Col>
      </Row>
    </Container>
  )
}
