import React, { useState } from 'react';
import loginIcon from '../components/assets/login_icon.png';
import './UserRegistration.css'
import axios from 'axios';

const UserRegistration = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('', {name, email, password})
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }

  return (
    <div className='user-hero'>
      <h2>User Entry</h2> 
      <form onSubmit={handleSubmit}>        
        <div className='icon-pic'>
            <img src={loginIcon} alt="" />
        </div>
        User details: 
       <br />

        <input 
          className='input-entry' 
          type='string' 
          name='name'
          //value={String} 
          placeholder='User Name'
          onChange={(e) => setName(e.target.value)}
        />

        <input 
          className='input-entry' 
          type='string' 
          name='email'
          //value={String} 
          placeholder='Enter Email'
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          className='input-entry' 
          type='string' 
          name='password'
          //value={String} 
          placeholder='Enter Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        
      <br />      
      <button>Submit</button>
      </form>
    </div>
  )
}

export default UserRegistration