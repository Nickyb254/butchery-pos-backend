import React from 'react'
import { useNavigate } from 'react-router-dom'
import {BsHouseExclamation } from 'react-icons/bs'
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { selectCustomer, logOutCustomer} from '../../Features/Customers/CustomerSlice.jsx';
import { useCustomerLogOutMutation } from '../../Features/Customers/CustomerApiSlice.jsx';

const CustomerHeader = () => {
  const [customerLogOut, {isLoading, isSuccess, isError, error}] = useCustomerLogOutMutation()
  const customer = useSelector(selectCustomer )
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogOut = async(e) => {
    e.preventDefault()
    await customerLogOut()
    dispatch(logOutCustomer())
    navigate('/')
    window.localStorage.setItem("loggedIn", false)
  }

  return (
    <header className='header'>
        <div onClick={()=>{navigate('/')}}><BsHouseExclamation style={{color: 'white'}}  className='icon_header'/>
            <strong className='d-inline mx-4' >BOMA butchery</strong>
            {/* <h6 className='d-inline mx-4' >Welcome: {employee.employee_name}!</h6> */}
        </div>
        <div className='header-right end'> 
            <h5>Online user: {customer?.name}!</h5>  

            <Button 
              variant='outline-primary' 
              style={{color: 'white'}} 
              onClick={handleLogOut}
            >
              Log Out
            </Button>
        </div>
    </header> 
  )
}

export default CustomerHeader