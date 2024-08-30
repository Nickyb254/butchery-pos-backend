import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './UserRegistration.css'
import axiosInstance from '../api/axios';
import Form from 'react-bootstrap/Form';
import CardBody from 'react-bootstrap/esm/CardBody';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

const EmployeeLogin = (props) => { 
  
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  const handleLogIn = async (e) => {
    e.preventDefault();
    try{
      const employee = await axiosInstance.post('/employees/login', { email, password})
      props.onClick(employee)
      navigate('profile')
      window.localStorage.setItem("loggedIn", true)
      console.log(employee)
    }catch(error) {console.log(error)}
  }

  return (
    <Card style={{ width: '48rem', margin: 'auto', padding: '3em', background: 'f3f3f3' }}>
        <CardBody>
            <Card.Title style={{marginBottom: '2em'}}>Enter details to log in as employee:</Card.Title>

            <Form >
                <Form.Label htmlFor="inputEmail">Email</Form.Label>
                <Form.Control
                type="email"
                id="inputEmail"
                aria-describedby="emailHelpBlock"
                onChange={(e) => setEmail(e.target.value)}
                />

                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                autoComplete='none'
                onChange={(e) => setPassword(e.target.value)}
                />

                <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji.
                </Form.Text>
                <br></br>
                <Button style={{marginTop: '2em'}}  onClick={handleLogIn}>Log in</Button>
                <section style={{paddingTop: '2em'}} >
                <Link to="register" >Register</Link>
                </section>
            </Form>
        </CardBody>
  </Card>
    
  )
}

export default EmployeeLogin




   

