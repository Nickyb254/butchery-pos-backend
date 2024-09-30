import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillGearFill, BsAlipay, BsBackpack3Fill, BsCart4, BsFillGrid3X3GapFill } from 'react-icons/bs'
import { Button } from 'react-bootstrap'

const CustomerSidebar = () => {
  return (
    <aside className="sidebar">
       <Link to="">
        <div className='sidebar-item'>
          <div className='icon'>
            <BsFillGrid3X3GapFill className='icon'/> 
          </div>
          <span className='label'>DASHBOARD</span>
        </div>
      </Link>
      <Link to="shop">
        <div className='sidebar-item'>
          <div className="icon"><BsCart4 className='icon'/></div>
          <span className='label'>Shop</span>
        </div>
      </Link>
      <Link to="checkout">
        <div className='sidebar-item'>
          <div className="icon"><BsCart4 className='icon'/></div>
          <span className='label'>Cart</span>
        </div>
      </Link>
      <Link to="orders">
        <div className='sidebar-item'>
          <div className="icon"><BsBackpack3Fill className='icon'/></div>
          <span className='label'>Orders</span>
        </div>
      </Link>
      <Link to="">
        <div className='sidebar-item'>
          <div className="icon"><BsAlipay className='icon'/></div>
          <span className='label'>Offers</span>
        </div>
      </Link>
      <Link to="settings">
        <div className='sidebar-item'>
          <div className="icon"><BsFillGearFill className='icon'/></div>
          <span className='label'>Settings</span>
        </div> 
      </Link>    
    </aside>
  )
}

export default CustomerSidebar