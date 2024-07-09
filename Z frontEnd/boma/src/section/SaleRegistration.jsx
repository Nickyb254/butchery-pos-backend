import React, { useState } from 'react';
import './SaleRegistration.css';
import saleIcon from '../components/assets/sale-icon.png';
import axios from 'axios';

//order entry required
const SaleRegistration = () => {
  const [product, setProduct] = useState();
  const [price, setPrice] = useState();
  const [mass_sold, setMass_sold] = useState();
  const [transaction_by, setTransaction_by] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3000/sales", {product, price, mass_sold, transaction_by})
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }


  return (
    <div className='sale-hero'>
      <div className='sale-container'>
      <h2>Sales Entry</h2> 
        <form onSubmit={handleSubmit}>        
          <div className='icon-pic'>
              <img src={saleIcon} alt="" />
          </div>
          Sales details: 
        <br />
            <div>
              <label htmlFor='product' className='form-label'>
                Product sold:
              </label>
              <input 
                className='input-entry' 
                type='ObjectId' 
                name='product'
                //value={String} 
                placeholder='Product Name'
                onChange={(e) => setProduct(e.target.value)}
              />
            </div>

            <div>
            <label htmlFor='price' className='form-label'>
                Selling Price:
              </label>
              <input 
                className='input-entry' 
                type='number' 
                name='price'
                //value={Number} 
                placeholder='Enter Price'
                onChange={(e) => setPrice(e.target.value)}
              />
              </div>

              <div>
              <label htmlFor='mass_sold' className='form-label'>
                  Mass sold:
              </label>
              <input 
                className='input-entry' 
                type='number' 
                name='mass_sold'
                //value={Number} 
                placeholder='Enter Quantity'
                onChange={(e) => setMass_sold(e.target.value)}
              />  
              </div>

              <div>
              <label htmlFor='transaction_by' className='form-label'>
                  Transaction by:
              </label>
              <input 
                className='input-entry' 
                type='ObjectId' 
                name='transaction_by'
                //value={String} 
                placeholder='Transaction by'
                onChange={(e) => setTransaction_by(e.target.value)}
              />
              </div>

            <br />
            <p>Select customer name from drop-down:</p>
            <p>Select mode of payment: </p>
            <button>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default SaleRegistration