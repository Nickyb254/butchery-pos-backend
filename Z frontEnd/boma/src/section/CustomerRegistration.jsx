import React, { useState } from 'react'
import './CustomerRegistration.css'
import login_icon from '../components/assets/login_icon.png';
import customerIcon from '../components/assets/customer_icon.png';
import axios from 'axios';

const CustomerRegistration = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  //const [email, setEmail] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('', {name, phone})
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }

  return (
    <div className='cust-hero'>
      <h2>Customer Registration</h2>
      <div  className='icon-pic'>
        <img src={customerIcon} alt="" />
      </div>
      
      <br />
      <form onSubmit={handleSubmit}>        
       <div className='profile-pic'>
       <img src={login_icon} alt="" />
       </div>
       User profile photo:
       <br />
      <input 
        className='input-plc' 
        type='text' 
        name='first_name' 
        value={String} 
        placeholder='Enter Name'
        onChange = {(e) => setFirstName(e.target.value)}/>

      <input 
        className='input-plc' 
        type='text' 
        name='phone' 
        value={String} 
        placeholder='Enter Phone Number'
        onChange = {(e) => setPhone(e.target.value)}/>

      {/* <input 
        className='input-plc' 
        type='text' 
        name='email' 
        value= {String} 
        placeholder='Enter Email Address' 
        onChange = {(e) => setEmail(e.target.value)} /> */}
      <br />

      <p>Select area of residence for delivery options:</p>
      <button>Submit</button>
      </form>
      </div>
  )
}

export default CustomerRegistration