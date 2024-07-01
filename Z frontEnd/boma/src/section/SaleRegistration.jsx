import React from 'react';
import './SaleRegistration.css';
import saleIcon from '../components/assets/sale-icon.png';

//order entry required
const SaleRegistration = () => {
  return (
    <div className='sale-hero'>
      <h2>Sales Entry</h2> 
      <form action="post">        
        <div className='icon-pic'>
            <img src={saleIcon} alt="" />
        </div>
        Sales details: 
       <br />
        <input className='input-entry' type='text' value={String} placeholder='Product Name'/>
        <input className='input-entry' type='text' value={Number} placeholder='Enter Quantity'/>
        <input className='input-entry' type='text' value={Number} placeholder='Enter Price'/>
        <input className='input-entry' type='email' value={String} placeholder='Enter Delivery contact'/>
      <br />
      <p>Select customer name from drop-down:</p>
      <p>Select mode of payment: </p>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default SaleRegistration