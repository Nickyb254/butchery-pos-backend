import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { useSendLogOutMutation } from '../../Features/Admin/AdminApiSlice';

const Header = () => {
    // onClick={OpenSidebar}
    const navigate = useNavigate()
    const [sendLogOut, {isLoading, isSuccess, isError, error}] = useSendLogOutMutation()
  
    const logOut = async (e) => {
      await sendLogOut()
      window.localStorage.setItem("loggedIn", false)
      navigate('/')
    } 
  
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' />
        </div>
        <div className='header-left' style={{background: 'gray', padding: '1em'}} >
            <BsSearch  className='icon'/>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <span onClick={ logOut} >
            <BsPersonCircle className='icon'/>Log Out
            </span>
        </div>
    </header>
  )
}

export default Header