import React, { useState } from 'react';
import {  Card, Form, Button } from 'react-bootstrap';
import stockIcon from '../components/assets/stock_icon.png';
import axios from 'axios';
import axiosInstance from '../api/axios';

const StockRegistration = () => {
  const [product_name, setProduct_name] = useState('');
  const [price, setPrice] = useState('');
  const [mass_bought, setMass_bought] = useState('');
  const [mass_available, setMass_available] = useState('');
  const [supplier_name, setSupplier_name] = useState('');
  const [transaction_by, setTransaction_by] = useState('');
  const [stock_image, setStock_image] = useState();

  const onProductChange = (e) => setProduct_name(e.target.value)
  const onPriceChange = (e) => setPrice(e.target.value)
  const onMassBoughtChange = (e) => setMass_bought(e.target.value)
  const onMassChange = (e) => setMass_available(e.target.value)
  const onSupplierChange = (e) => setSupplier_name(e.target.value)
  const onTransactionByChange = (e) => setTransaction_by(e.target.value)
  const onFileChange = (e) => setStock_image(e.target.value)


  const data = {product_name, price, mass_bought, mass_available, supplier_name, transaction_by, stock_image}
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post("/stock", data)
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }

  return (
<div style={{ marginTop: '3%' }}>
  <Card style={{ width: '48%', margin: 'auto', paddingTop: '2%' }}>
    <Card.Img variant="top" style={{ width: '5%', margin: 'auto' }} src={stockIcon} />
    <Card.Body>
      <Card.Title style={{ width: '90%', margin: 'auto' }}> Enter Stock Records: </Card.Title>
        
      <Form style={{paddingTop: '2em'}} >

        <Form.Group className="mb-3" controlId="product_name">
        <Form.Label>* Enter Product Names:</Form.Label>
        <Form.Control type="string" onChange={onProductChange}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
        <Form.Label>* Price in Ksh./ role:</Form.Label>
        <Form.Control type="string" onChange={onPriceChange}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="mass_bought">
        <Form.Label>* Mass bought:</Form.Label>
        <Form.Control type="string" onChange={onMassBoughtChange}   />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
        <Form.Label>Mass available:</Form.Label>
        <Form.Control type="email"  onChange={onMassChange}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="supplier_name">
        <Form.Label>* Supplier name:</Form.Label>
        <Form.Control type="string" onChange={onSupplierChange}  />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="transaction_by">
        <Form.Label>* Supplier name:</Form.Label>
        <Form.Control type="string" onChange={onTransactionByChange}  />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" onChange={onFileChange} />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}> Save Changes</Button>
      </Form>
      </Card.Body>
  </Card>
  </div>
  )
}

export default StockRegistration