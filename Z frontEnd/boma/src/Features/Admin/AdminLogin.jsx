import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from './AdminSlice';
import { useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { setCredentials } from '../Auth/AuthSlice';

function AdminLogin () {
  const [login, {isLoading}] = useLoginMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{     
        const {accessToken} = await login({email, password}).unwrap()
        dispatch(setCredentials({accessToken}))

        window.localStorage.setItem("loggedIn", true)
        window.localStorage.setItem('jwtToken', accessToken)
        navigate('welcome')
      }catch  (error) {
       console.log(error)
    }    
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