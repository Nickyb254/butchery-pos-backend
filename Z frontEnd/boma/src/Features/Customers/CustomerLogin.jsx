import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {useCustomerLoginMutation} from './CustomerApiSlice'
import Form from 'react-bootstrap/Form';
import CardBody from 'react-bootstrap/esm/CardBody';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch } from 'react-redux';
import { customerProfile } from './CustomerSlice';

const CustomersLogin = () => {   
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [login, {isLoading}] = useCustomerLoginMutation()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async(e) => {
    e.preventDefault()
    try{
        const data = await login({email, password}).unwrap()
        window.localStorage.setItem("loggedIn", true)
        const {name, id, accessToken } = data
        // window.localStorage.setItem('jwtToken', accessToken)
        dispatch(customerProfile({name, id}))
        navigate('profile')
    }catch (error){console.log(error)}
  }
  
  return (
    <Card style={{ width: '48rem', margin: 'auto', padding: '3em', background: 'f3f3f3' }}>
        <CardBody>
            <Card.Title style={{marginBottom: '2em'}}>Enter details to log in as customer:</Card.Title>

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
                <Button style={{marginTop: '2em'}} onClick={handleLogin} >Log in</Button>
                <section style={{paddingTop: '2em'}} >
                <Link to="register" >Register</Link>
                </section>
            </Form>
        </CardBody>
  </Card>
    
  )
}

export default CustomersLogin




   

