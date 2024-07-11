import React, { useState } from 'react';
import loginIcon from '../components/assets/login_icon.png';
import './UserRegistration.css'
import axios from 'axios';

const UserLogin = () => {
  // const [userData, setUserData] = useState({
  //  // username:'',
  //   email:'',
  //   password:'',
  // });
  
  // const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // const onChangeHandler = (event) => {
  //   setUserData(() => ({
  //     ...userData,
  //     [event.target.name]: event.target.value
  //   }))
  //  }


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/user/login", { email, password})
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }

  return (
    <div className='user-hero'>
      <h2>User Login</h2> 
      <div className='icon-pic'>
            <img src={loginIcon} alt="" />
        </div>
        User details: 
       <br />

              <form onSubmit={handleSubmit}>           
                {/* <div>
                  <label htmlFor='username' className='form-label'>
                    User Name:
                  </label>
                    <input 
                      className='input-entry' 
                      type='string' 
                      name='username'
                      value={e.target.username} 
                      placeholder='User Name'
                      onChange={onChangeHandler}
                    />
                </div> */}
                 
                <div>
                  <label htmlFor='email' className='form-label'>
                   Email: 
                  </label>
                    <input 
                      className='input-entry' 
                      type='String' 
                      name='email'
                     // value={userData.email} 
                      placeholder='Enter Email'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                  <label htmlFor='password' className='form-label'>
                    Password:
                  </label>
                      <input 
                        className='input-entry' 
                        type='string' 
                        name='password'
                       // value={userData.password} 
                        placeholder='Enter Password'
                        onChange={(e) => setEmail(e.target.value)}
                      />
                </div>
              <br />      
              <button type='submit'>Submit</button>
              </form>
    </div>
  )
}

export default UserLogin