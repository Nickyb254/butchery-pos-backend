import React, { useState } from 'react'
import axios from 'axios';
import login_icon from '../components/assets/login_icon.png';
import staffIcon from '../components/assets/staff-icon.png';
import './EmployeeRegistration.css'

const EmployeeRegistration = () => {
  const [formData, setFormData] = useState({
    username:'',
    designation:'',
    phone:'',
    email:'',
    password:'',
  });
  // const [designation, setDesignation] = useState();
  // const [phone, setPhone] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

 
 const onChangeHandler = (e) => {
  setFormData(() => ({
    ...formData,
    [e.target.name]: e.target.value
  }))
 }


 const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('/', {username, designation, phone, email, password})
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

      <div className='profile-pic'>
          <img src={login_icon} alt="" />
       </div>
       User profile photo:
       <br />

      <form onSubmit={handleSubmit}>            
       <div>
        <div>
          <label htmlFor="username" className='form-label'>
            Employee name:
          </label>
            <input 
              className='input-plc'             
              name='username'
              value={formData.name} 
              placeholder='Enter  Name'
              onChange={onChangeHandler}
            />

        </div>          

        <div>
          <label htmlFor="designation" className='form-label'>
                Designation/ Role:
          </label>
            <input 
                className='input-plc'                 
                name='designation' 
                value={formData.designation}  
                placeholder='Enter  Designation'
                onChange={onChangeHandler}
              />
        </div>
          
        <div>
          <label htmlFor="phone" className='form-label'>
                  Phone Number:
          </label>
            <input 
              className='input-plc'               
              name='phone'
              value={formData.phone}
              placeholder='Enter Phone Number'
              onChange={onChangeHandler}
            />
        </div>

          
        <div>
          <label htmlFor="email" className='form-label'>
                  Email:
          </label>
            <input 
              className='input-plc'              
              name='email'
              value={formData.email} 
              placeholder='Enter Email Address'
              onChange={onChangeHandler}
            />
        </div>
        
          
        <div>
          <label htmlFor="password" className='form-label'>
                    Password:
          </label>
            <input 
              className='input-plc'    
              name='password'           
              value={formData.password} 
              placeholder='Enter Password'
              //onChange={(e) => setPassword(e.target.value)}
              onChange={onChangeHandler}
            />
        </div>
          
          <br />

          <p>Select area of residence for logistics options:</p>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default EmployeeRegistration