import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';


const CustomerRegistration = () => {
  const [customer_name, setCustomer_name] = useState();
  const [customer_phone, setCustomer_phone] = useState();
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3000/customers", {customer_name, customer_phone})
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }

  return (
    <Card style={{ width: '38vw', padding: '3em', margin: 'auto'}}>
       <Card.Body>
        <Card.Title >Please Enter Customer Details:</Card.Title>
          <small>This helps in recording orders.</small>
          <Form onSubmit={handleSubmit} style={{paddingTop: '2em'}} >

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Customer Names</Form.Label>
              <Form.Control type="string" placeholder="Enter Customer Name" onChange = {(e) => setCustomer_name(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Customer Phone Number</Form.Label>
              <Form.Control type="string" placeholder="Enter Customer Phone No." onChange = {(e) => setCustomer_phone(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type='submit' style={{marginTop: '3em'}}>Submit</Button>

            {/* <p>Select area of residence for delivery options:</p> */}

            <div style={{paddingTop: '2em'}} >
             <Link to="" >Log in</Link>
          </div>
          </Form>
      </Card.Body>
    </Card>
  )
}

export default CustomerRegistration