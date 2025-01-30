import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from './AdminApiSlice';
import { useDispatch } from 'react-redux';
import {Card, CardBody} from 'react-bootstrap';

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
        navigate('/admin/dashboard')
      }catch  (error) {
       console.log(error)
    }    
  }

  return (
    <Card style={{ width: '48rem', margin: 'auto', padding: '3em', background: 'f3f3f3' }}>
        <CardBody>
            <Card.Title style={{marginBottom: '2em'}}><p className="text-danger">Admin Log in:</p></Card.Title>
        <Form onSubmit={handleSubmit} className='user-hero'>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                onChange={(e) => setEmail(e.target.value)}
              />            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Enter Password" 
                onChange={(e) => setPassword(e.target.value)}
              />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Trust this device" />
          </Form.Group>
          
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </CardBody>
  </Card>    
  );
}

export default AdminLogin;