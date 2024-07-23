import React, { useState } from 'react';
import './StockRegistration.css';
import stockIcon from '../components/assets/stock_icon.png';
import axios from 'axios';

const StockRegistration = () => {
  const [product_name, setProduct_name] = useState();
  const [price, setPrice] = useState();
  const [mass_bought, setMass_bought] = useState();
  const [mass_available, setMass_available] = useState();
  const [supplier_name, setSupplier_name] = useState();
  const [stock_image, setStock_image] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3000/stock", {product_name, price, mass_bought, mass_available, supplier_name, stock_image})
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }

  return (
  <div className='stock-hero'>
      
    <h2>Stock Entry</h2> 
    <form onSubmit={handleSubmit}>        
      <div className='icon-pic'>
          <img src={stockIcon} alt="" />
      </div>
      Stock details: 
      <br />
        <div>
          <label htmlFor="product_name" className='form-label'>
            Product name:
          </label>
          <input 
            className='input-entry' 
            type='string' 
            id='product_name'
            name='product_name'
            //value={String} 
            placeholder='Product Name'
            onChange={(e) => setProduct_name(e.target.value)}
          />
          </div>

          <div>
            <label htmlFor="price" className='form-label'>
              Price:
            </label>          
            <input 
              className='input-entry' 
              type='number' 
              id='price'
              name='price'
              //value={Number} 
              placeholder='Enter Buying Price'
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="mass_bought" className='form-label'>
              Mass bought:
            </label>          
            <input 
              className='input-entry' 
              type='number' 
              id='mass_bought'
              name='mass_bought'
              //value={Number} 
              placeholder='Enter Quantity Bought'
              onChange={(e) => setMass_bought(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="mass_available" className='form-label'>
              Mass available:
            </label> 
            <input 
              className='input-entry' 
              type='number' 
              id='mass_available'
              name='mass_available'
              //value={Number} 
              placeholder='Enter Quantity Available'
              onChange={(e) => setMass_available(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="supplier_name" className='form-label'>
              Supplier name:
            </label> 
            <input 
              className='input-entry' 
              type='string' 
              id='supplier_name'
              name='supplier_name'
              //value={String} 
              placeholder='Name of Supplier'
              onChange={(e) => setSupplier_name(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="stock_image" className='form-label'>
              Stock item image:
            </label> 
            <input 
              className='input-entry' 
              type='file' 
              id='stock_image' 
              name='stock_image' 
              placeholder='Choose image'
            />
          </div>
        {/* <br />
        <p>Enter notes/ comments:</p>
        <textarea name="comments" id=""></textarea>
        <br /> */}
        <button>Submit</button>
    </form>
  </div>
  )
}

export default StockRegistration