import React, { useState } from 'react'
import './CustomerRegistration.css'
import login_icon from '../components/assets/login_icon.png';
import customerIcon from '../components/assets/customer_icon.png';
import axios from 'axios';


const CustomerRegistration = () => {
  const [customer_name, setCustomer_name] = useState();
  const [customer_phone, setCustomer_phone] = useState();
  //const [email, setEmail] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3000/customers", {customer_name, customer_phone})
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }

  return (
    <div className='cust-hero-container'>
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
      <div>
          <label htmlFor="customer_name" className='form-label'>
               Customer name:
          </label>
          <input 
            className='input-plc' 
            type='text' 
            name='customer_name' 
            // value={username} 
            placeholder='Enter Name'
            onChange = {(e) => setCustomer_name(e.target.value)}
            />
      </div>

      <div>
          <label htmlFor="customer_phone" className='form-label'>
                      Phone Number:
          </label>
          <input 
            className='input-plc' 
            type='text' 
            name='customer_phone' 
            // value={phone} 
            placeholder='Enter Phone Number'
            onChange = {(e) => setCustomer_phone(e.target.value)}
            />
        </div>

          {/* <input 
            className='input-plc' 
            type='text' 
            name='email' 
            value= {String} 
            placeholder='Enter Email Address' 
            onChange = {(e) => setEmail(e.target.value)} /> */}
          <br />

          <p>Select area of residence for delivery options:</p>
          <button type='submit'>Submit</button>
          </form>
          
          </div>
      </div>
  )
}

export default CustomerRegistration