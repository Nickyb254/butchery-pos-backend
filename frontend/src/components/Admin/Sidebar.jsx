import React from 'react'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill,
  BsHouseExclamation,
  Bs0SquareFill}
 from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <Link to ='/' style={{textDecoration: 'none', color: 'gold'}} >
                <BsHouseExclamation  className='icon_header'/> BOMA
                </Link>
            </div>
            <span className='icon close_icon' >X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to ="/admin/dashboard">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to ="/admin/dashboard/stock">
                    <BsFillArchiveFill className='icon'/> Stock
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to ="/admin/dashboard/employees">
                    <BsFillGrid3X3GapFill className='icon'/> Employees
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to ="/admin/dashboard/customers">
                    <BsPeopleFill className='icon'/> Customers
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to ="/admin/dashboard/orders">
                    <BsListCheck className='icon'/> Orders
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to ="sales">
                    <BsMenuButtonWideFill className='icon'/> Sales
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to ="">
                    <BsFillGearFill className='icon'/> Setting
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar