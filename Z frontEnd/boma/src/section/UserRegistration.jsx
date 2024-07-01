import React from 'react';
import loginIcon from '../components/assets/login_icon.png';
import './UserRegistration.css'

const UserRegistration = () => {
  return (
    <div className='user-hero'>
      <h2>User Entry</h2> 
      <form action="post">        
        <div className='icon-pic'>
            <img src={loginIcon} alt="" />
        </div>
        User details: 
       <br />
        <input className='input-entry' type='text' value={String} placeholder='User Name'/>
        <input className='input-entry' type='email' value={String} placeholder='Enter Email'/>
        <input className='input-entry' type='text' value={String} placeholder='Enter Password'/>
        
      <br />      
      <button>Submit</button>
      </form>
    </div>
  )
}

export default UserRegistration