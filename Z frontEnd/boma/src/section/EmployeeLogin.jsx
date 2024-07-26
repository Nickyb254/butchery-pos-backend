import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginIcon from '../components/assets/login_icon.png';
import './UserRegistration.css'
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import CardBody from 'react-bootstrap/esm/CardBody';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

const EmployeeLogin = () => { 
  
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/user/login', { email, password})
    .then((result) => {
       console.log(result)
       navigate('/employees/viewall')
    })
    .catch(error => console.log(error))
  }

  return (
    <Card style={{ width: '48rem', margin: 'auto', padding: '3em', background: 'f3f3f3' }}>
        <CardBody>
            <Card.Title>Enter details to log in as employee:</Card.Title>

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
                onChange={(e) => setPassword(e.target.value)}
                />

                <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji.
                </Form.Text>
                <Button onClick={handleSubmit}>Log in</Button>
            </Form>
        </CardBody>
  </Card>
    // <div className='user-hero'>
    //   <h2>User Login</h2> 
    //   <div className='icon-pic'>
    //         <img src={loginIcon} alt="" />
    //     </div>
    //     User details: 
    //    <br />

    //           <form onSubmit={handleSubmit}>           
    //             {/* <div>
    //               <label htmlFor='username' className='form-label'>
    //                 User Name:
    //               </label>
    //                 <input 
    //                   className='input-entry' 
    //                   type='string' 
    //                   name='username'
    //                   value={e.target.username} 
    //                   placeholder='User Name'
    //                   onChange={onChangeHandler}
    //                 />
    //             </div> */}
                 
    //             <div>
    //               <label htmlFor='email' className='form-label'>
    //                Email: 
    //               </label>
    //                 <input 
    //                   className='input-entry' 
    //                   type='String' 
    //                   name='email'
    //                  // value={userData.email} 
    //                   placeholder='Enter Email'
    //                   onChange={(e) => setEmail(e.target.value)}
    //                 />
    //             </div>
    //             <div>
    //               <label htmlFor='password' className='form-label'>
    //                 Password:
    //               </label>
    //                   <input 
    //                     className='input-entry' 
    //                     type='string' 
    //                     name='password'
    //                    // value={userData.password} 
    //                     placeholder='Enter Password'
    //                     onChange={(e) => setPassword(e.target.value)}
    //                   />
    //             </div>
    //           <br />      
    //           <button type='submit'>Submit</button>
    //           </form>
    // </div>
  )
}

export default EmployeeLogin




   

