import React from 'react';
import './StockRegistration.css';
import stockIcon from '../components/assets/stock_icon.png';

const StockRegistration = () => {
  return (
    <div className='stock-hero'>
      
      <h2>Stock Entry</h2> 
      <form action="post">        
        <div className='icon-pic'>
            <img src={stockIcon} alt="" />
        </div>
        Stock details: 
       <br />
        <input className='input-entry' type='text' value={String} placeholder='Product Name'/>
        <input className='input-entry' type='text' value={Number} placeholder='Enter Quantity'/>
        <input className='input-entry' type='text' value={Number} placeholder='Enter Buying Price'/>
        <input className='input-entry' type='email' value={String} placeholder='Supplier Details'/>
      <br />
      <p>Enter notes/ comments:</p>
      <textarea name="comments" id=""></textarea>
      <br />
      <button>Submit</button>
      </form>
    </div>
  )
}

export default StockRegistration