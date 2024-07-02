import React, { useState } from 'react';
import './SaleRegistration.css';
import saleIcon from '../components/assets/sale-icon.png';

//order entry required
const SaleRegistration = () => {
  const [product, setProduct] = useState();
  const [price, setPrice] = useState();
  const [mass, setMass] = useState();
  const [transactionby, setTransactionby] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('', {product, price, mass, transactionby})
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }


  return (
    <div className='sale-hero'>
      <h2>Sales Entry</h2> 
      <form onSubmit={handleSubmit}>        
        <div className='icon-pic'>
            <img src={saleIcon} alt="" />
        </div>
        Sales details: 
       <br />
        <input 
          className='input-entry' 
          type='string' 
          name='product'
          //value={String} 
          placeholder='Product Name'
          onChange={(e) => setProduct(e.target.value)}
        />

        <input 
          className='input-entry' 
          type='number' 
          name='price'
          //value={Number} 
          placeholder='Enter Price'
          onChange={(e) => setPrice(e.target.value)}
        />

        <input 
          className='input-entry' 
          type='number' 
          name='mass'
          //value={Number} 
          placeholder='Enter Quantity'
          onChange={(e) => setMass(e.target.value)}
        />  

        <input 
          className='input-entry' 
          type='string' 
          name='transactionby'
          //value={String} 
          placeholder='Transaction by'
          onChange={(e) => setTransactionby(e.target.value)}
        />

      <br />
      <p>Select customer name from drop-down:</p>
      <p>Select mode of payment: </p>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default SaleRegistration