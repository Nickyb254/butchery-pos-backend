import React, { useState } from 'react';
import './StockRegistration.css';
import stockIcon from '../components/assets/stock_icon.png';

const StockRegistration = () => {
  const [product, setProduct] = useState();
  const [price, setPrice] = useState();
  const [massBought, setMassBought] = useState();
  const [massAvailable, setMassAvailable] = useState();
  const [supplier, setSupplier] = useState();
  const [image, setImage] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('', {product, price, massBought, massAvailable, supplier, image})
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
          placeholder='Enter Buying Price'
          onChange={(e) => setPrice(e.target.value)}
        />

        <input 
          className='input-entry' 
          type='number' 
          name='massBought'
          //value={Number} 
          placeholder='Enter Quantity Bought'
          onChange={(e) => setMassBought(e.target.value)}
        />

        <input 
          className='input-entry' 
          type='number' 
          name='massAvailable'
          //value={Number} 
          placeholder='Enter Quantity Available'
          onChange={(e) => setMassAvailable(e.target.value)}
        />

        <input 
          className='input-entry' 
          type='string' 
          name='supplier'
          //value={String} 
          placeholder='Name of Supplier'
          onChange={(e) => setSupplier(e.target.value)}
        />

        <input 
        className='input-entry' 
        type='file' 
        name='file' 
        placeholder='Choose image'
        />

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