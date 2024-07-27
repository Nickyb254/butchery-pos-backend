import React, { useState } from 'react';
// import loginIcon from '../components/assets/login_icon.png';
// import './UserRegistration.css'
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AdminLogin () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/user/login', { email, password})
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }


  return (
    <div className='signup-container'>
    <Form onSubmit={handleSubmit} className='user-hero'>
      <p className="text-danger" >Admin Log in:</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          onChange={(e) => setEmail(e.target.value)}
          />


        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default AdminLogin;