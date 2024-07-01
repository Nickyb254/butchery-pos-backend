import React from 'react'
import './CustomerRegistration.css'
import login_icon from '../components/assets/login_icon.png';
import customerIcon from '../components/assets/customer_icon.png';

const CustomerRegistration = () => {
  return (
    <div className='cust-hero'>
      <h2>Customer Registration</h2>
      <div  className='icon-pic'>
        <img src={customerIcon} alt="" />
      </div>
      
      <br />
      <form action="post">        
       <div className='profile-pic'>
       <img src={login_icon} alt="" />
       </div>
       User profile photo:
       <br />
      <input className='input-plc' type='text' value={String} placeholder='Enter First Name'/>
      <input className='input-plc' type='text' value={String} placeholder='Enter Phone Number'/>
      <input className='input-plc' type='text' value= {String} placeholder='Enter Email Address'/>
      <br />
      <p>Select area of residence for delivery options:</p>
      <button>Submit</button>
      </form>
      </div>
  )
}

export default CustomerRegistration