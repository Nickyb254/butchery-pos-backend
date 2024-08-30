import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/axios';
import { useAuth } from '../../context/AuthProvider';

const LOGIN_URL = "/user/login";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AdminLogin () {
  // const axiosPrivate = useAxiosPrivate();
  const { setAuth } = useAuth();
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const  response  = await axiosInstance.post(LOGIN_URL, { email, password})
      const token = response.data.accessToken
     
      setAuth(JSON.stringify({token, email}));
      // console.log(response)
      window.localStorage.setItem("loggedIn", true)
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