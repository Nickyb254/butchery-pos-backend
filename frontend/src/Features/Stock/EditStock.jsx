import { useState } from 'react';
import {Form, Button,  Modal, Image} from 'react-bootstrap';
import { useUpdateStockMutation } from './stockApiSlice';

function EditStock({card}) {
  
  const [updateStock, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useUpdateStockMutation()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  const [product_name, setProduct_name] = useState(card.product_name);
  const [price, setPrice] = useState(card.price);
  const [mass_bought, setMass_bought] = useState(card.mass_bought);
  const [mass_available, setMass_available] = useState(card.mass_available);
  const [supplier_name, setSupplier_name] = useState(card.supplier_name);
  const [transaction_by, setTransaction_by] = useState(card.transaction_by);
  const [stock_image, setStock_image] = useState(null);

  const [imageURL, setImageURL] = useState(null);

  const onProductChange = (e) => setProduct_name(e.target.value)
  const onPriceChange = (e) => setPrice(e.target.value)
  const onMassBoughtChange = (e) => setMass_bought(e.target.value)
  const onMassChange = (e) => setMass_available(e.target.value)
  const onSupplierChange = (e) => setSupplier_name(e.target.value)
  const onTransactionByChange = (e) => setTransaction_by(e.target.value)
  // const onFileChange = (e) => setStock_image(e.target.files[0])
  const onFileChange = (e) => {
    const file = e.target.files[0];
    // console.log('Selected file:', file);
    setStock_image(file);
}

  const handleUpdate = (e) =>{
    // e.preventDefault();  
    const formData = new FormData()

    if (stock_image) {
      formData.append('image', stock_image);
      // const data = {id: card._id, product_name, price, mass_bought, mass_available, supplier_name, transaction_by, stock_image}
      // console.log('Selected stock file:', data);
      // setShow(false)
    } else {
        console.error('No file selected');
    }

    formData.append('_id', card._id)
    formData.append('image', stock_image)
    formData.append('product_name', product_name);
    formData.append('price', price);
    formData.append('mass_bought', mass_bought);
    formData.append('mass_available', mass_available);
    formData.append('supplier_name', supplier_name);
    formData.append('transaction_by', transaction_by);
  
    updateStock({formData})
    
     
      }

  return (
    <>
      <Button variant='success' style={{paddingLeft: '4em', paddingRight: '5em', marginTop: '3em'}} onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Stock Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
            <Form style={{paddingTop: '2em'}} onSubmit={handleUpdate} >

                <Form.Group className="mb-3" controlId="product_name">
                <Form.Label>* Enter Product Names:</Form.Label>
                <Form.Control type="string" onChange={onProductChange} value={product_name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                <Form.Label>* Price in Ksh./ role:</Form.Label>
                <Form.Control type="number" onChange={onPriceChange} value={price} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="mass_bought">
                <Form.Label>* Mass bought:</Form.Label>
                <Form.Control type="number" onChange={onMassBoughtChange}  value={mass_bought} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="mass_availablel">
                <Form.Label>Mass available:</Form.Label>
                <Form.Control type="number"  onChange={onMassChange} value={mass_available} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="supplier_name">
                <Form.Label>* Supplier name:</Form.Label>
                <Form.Control type="string" onChange={onSupplierChange} value={supplier_name} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="transaction_by">
                <Form.Label>* Staff name:</Form.Label>
                <Form.Control type="string" onChange={onTransactionByChange} value={transaction_by} />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control type="file" accept='image/*' onChange={onFileChange} />
                <Image src={stock_image}  />
                </Form.Group>
                {/* <Button variant="primary" type="submit" >Update</Button> */}
            </Form>
          

        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>Close</Button> */}
          <Button variant="primary" onClick={handleUpdate} >Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditStock;


 // Create an image URL for preview
    //  const reader = new FileReader();
    //  reader.onloadend = () => {
    //    setImageURL(reader.result);
    //  };
    //  reader.readAsDataURL(stock_image);