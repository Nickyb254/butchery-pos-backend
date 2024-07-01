import React from 'react'
import login_icon from '../components/assets/login_icon.png';
import staffIcon from '../components/assets/staff-icon.png';
import './EmployeeRegistration.css'

const EmployeeRegistration = () => {
  return (
    <div className='emp-hero'>
      <h2>Employee Registration</h2>
      <div className='icon-pic'>
            <img src={staffIcon} alt="" />
        </div>

      <br />
      <form action="post">        
       <div className='profile-pic'>
       <img src={login_icon} alt="" />
       </div>
       User profile photo:
       <br />
      <input className='input-plc' type='text' value={String} placeholder='Enter First Name'/>
      <input className='input-plc' type='text' value={Number} placeholder='Enter Phone Number'/>
      <input className='input-plc' type='text' value={Number} placeholder='Enter ID Number'/>
      <input className='input-plc' type='email' value={String} placeholder='Enter Email Address'/>
      <br />
      <p>Select area of residence for logistics options:</p>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default EmployeeRegistration