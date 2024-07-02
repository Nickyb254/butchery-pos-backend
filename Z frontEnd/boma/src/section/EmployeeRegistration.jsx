import React, { useState } from 'react'
import axios from 'axios';
import login_icon from '../components/assets/login_icon.png';
import staffIcon from '../components/assets/staff-icon.png';
import './EmployeeRegistration.css'

const EmployeeRegistration = () => {
  const [name, setName] = useState();
  const [designation, setDesignation] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('', {name, designation, phone, email, password})
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }

  return (
    <div className='emp-hero'>
      <h2>Employee Registration</h2>
      <div className='icon-pic'>
            <img src={staffIcon} alt="" />
        </div>

      <br />
      <form onSubmit={handleSubmit}>        
       <div className='profile-pic'>
       <img src={login_icon} alt="" />
       </div>
       User profile photo:
       <br />
      <input className='input-plc' type='text' value={String} placeholder='Enter  Name'/>
      <input className='input-plc' type='text' value={String} placeholder='Enter  Designation'/>
      <input className='input-plc' type='text' value={Number} placeholder='Enter Phone Number'/>
      {/* <input className='input-plc' type='text' value={Number} placeholder='Enter ID Number'/> */}
      <input className='input-plc' type='email' value={String} placeholder='Enter Email Address'/>
      <input className='input-plc' type='text' value={Number} placeholder='Enter Password'/>
      <br />
      <p>Select area of residence for logistics options:</p>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default EmployeeRegistration