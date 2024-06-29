import React from 'react'
//import { sideLinks } from "../constants/index.js";

const Sidebar = () => {
  return (
    <div className='flex-col flex place-self-start  gap-6 max-lg:hidden py-40 font-montserrat leading-normal text-lg text-slate-gray pl-7'>
      <p>Beef Products</p>
      <p>Goat Products</p>
      <p>Chicken Products</p>
      <p>Seafoods</p>
      <p>Other products</p>
      <p>Delivery services</p>
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