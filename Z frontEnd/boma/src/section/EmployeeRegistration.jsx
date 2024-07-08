import React, { useState } from 'react'
import axios from 'axios';
import login_icon from '../components/assets/login_icon.png';
import staffIcon from '../components/assets/staff-icon.png';
import './EmployeeRegistration.css'

const createEmployeeProfile = () => {
  // const [employeeData, setEmployeeData] = useState({
  //   username:'name',
  //   designation:'job',
  //   phone:'01235467',
  //   email:'names@gmail.com',
  //   password:'isitoshe',
  // });
  const [username, setUsername] = useState();
  const [designation, setDesignation] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

 
//  const onChangeHandler = (event) => {
//   setFormData(() => ({
//     ...employeeData,
//     [event.target.name]: event.target.value
//   }))
//  }


 const handleSubmit = (e) => {
      e.preventDefault();
   
      axios.post('http://localhost:3000/employees', {username, designation, phone, email, password})
      .then(result => console.log(result))
      .catch(error => console.log(error))
    // catch (error) {
    //   console.error(error);
    //   setMessage('Error creating user');
    // }
    
  }

  return (
    <div className='emp-hero'>
      <h2>Create Employee Profile</h2>
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
                {/* id and label should match */}
                  <div>
                    <label htmlFor="_username" className='form-label'>
                      Employee name:
                    </label>
                      <input 
                        type='text'
                        className='input-plc'             
                        id='_username'
                        value={username} 
                        placeholder='Enter Name'
                        onChange={(e) => setUsername(e.target.value)}
                        // onChange={onChangeHandler}
                      />
                  </div>          

                  <div>
                    <label htmlFor="designation" className='form-label'>
                          Designation/ Role:
                    </label>
                      <input 
                          className='input-plc' 
                          type='text'                
                          id='designation' 
                          value={designation}  
                          placeholder='Enter  Designation'
                          onChange={(e) => setDesignation(e.target.value)}
                          // onChange={onChangeHandler}
                        />
                  </div>
                    
                  <div>
                    <label htmlFor="_phone" className='form-label'>
                            Phone Number:
                    </label>
                      <input 
                        className='input-plc'  
                        type='text'             
                        id='_phone'
                        value={phone}
                        placeholder='Enter Phone Number'
                        onChange={(e) => setPhone(e.target.value)}
                        // onChange={onChangeHandler}
                      />
                  </div>

                    
                  <div>
                    <label htmlFor="_email" className='form-label'>
                            Email:
                    </label>
                      <input 
                        className='input-plc' 
                        type='email'             
                        id='_email'
                        value={email} 
                        placeholder='Enter Email Address'
                        onChange={(e) => setEmail(e.target.value)}
                        // onChange={onChangeHandler}
                      />
                  </div>
                  
                    
                  <div>
                    <label htmlFor="password" className='form-label'>
                              Password:
                    </label>
                      <input 
                        className='input-plc'    
                        type='text'
                        id='password'           
                        value={password} 
                        placeholder='Enter Password'
                        onChange={(e) => setPassword(e.target.value)}
                        // onChange={onChangeHandler}
                      />
                  </div>
                    
                    <br />

                    <p>Select area of residence for logistics options:</p>
                    <button type='submit'>Submit</button>
                  
                </form>
    </div>
  )
}

export default createEmployeeProfile 
