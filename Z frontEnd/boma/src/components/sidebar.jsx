import React from 'react'
import './sidebar.css'
//import { sideLinks } from "../constants/index.js";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-container'>
      <p>Beef Products</p>
      <p>Goat Products</p>
      <p>Chicken Products</p>
      <p>Seafoods</p>
      <p>Other products</p>
      <p>Delivery services</p>
      </div>
    </div>
  )
}

export default Sidebar

 

{/* <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
      {sideLinks.map((item) => {
        <li key={item.label}>
          <a href={item.href} 
            className='font-montserrat leading-normal text-lg text-slate-gray'
            >
            {item.label}
          </a>
        </li>
      })}
      </ul>  */}