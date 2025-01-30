import React from 'react'
import {BsFillGearFill,  BsPeopleFill, BsListCheck, BsActivity,
  BsAlexa, BsAppIndicator, BsBandaidFill,
  BsAlignBottom}
 from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {  Button} from 'react-bootstrap';

const EmployeeSidebar = () => {
  return (
    <aside id="sidebar">
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <Link to ='' style={{textDecoration: 'none', color: 'gold'}} >
                <BsAlignBottom  className='icon_header'/> DASHBOARD
                </Link>
            </div>
            <span className='icon close_icon' >X</span>
        </div>

        <ul className='sidebar-list'>                        
            <li className='sidebar-list-item'>
                <Link to="sales">
                    <Button variant='outline-info' className='border-white w-100'>
                        <BsActivity/> Sales
                    </Button>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="customers">
                    <Button variant='outline-info' className='border-white w-100'>
                        <BsPeopleFill className='icon'/> Customers
                    </Button>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <Button variant='outline-info' className='border-white w-100'>
                        <BsAlexa/> View Trends
                    </Button>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <Button variant='outline-info' className='border-white w-100'>
                        <BsAppIndicator/> Place Order
                    </Button>
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="stock">
                    <Button variant='outline-info' className='border-white w-100'>
                        <BsListCheck/> Stock
                    </Button>   
                </Link>            
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <Button variant='outline-info'className='border-white w-100'>
                        <BsBandaidFill className='icon'/>Daily Stock
                    </Button>   
                </Link>           
            </li>
            <li className='sidebar-list-item'>
                <Link to="edit">
                    <Button variant='outline-info'className='border-white w-100'>
                        <BsFillGearFill className='icon'/>Settings
                    </Button>   
                </Link>           
            </li>
        </ul>
           
                
              
               
               
               
               
    </aside>
  )
}

export default EmployeeSidebar