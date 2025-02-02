import {useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom' 
import { Container, Card, Row, Col, Badge, Button } from 'react-bootstrap';
import { useGetStockQuery,  } from '../../Features/Stock/stockApiSlice';
import ProductDisplay from './ProductDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Features/Cart/cartSlice';
import {selectMyproduct, clearSelectedProduct} from '../../Features/Products/productSlice'
import { selectStock } from '../../Features/Stock/StockSlice';

const ProductDetails = () => {
  const productId = useSelector(selectMyproduct)
  const dispatch = useDispatch()
  const stock = useSelector(selectStock) 
  const [selected, setSelected] = useState(null)
  const [listItems, setListItems] = useState()

  let item
  useEffect(()=>{
      if(stock && productId){    
        item = stock?.find(i => i._id === productId)
        setSelected(item)
      }
      setListItems(stock)
  },[productId, stock])

   const handleAddToCart = (product) => {
      dispatch(addToCart(product));
   };   
 
   const handleClearSelectedProduct = ()=>{
    dispatch(clearSelectedProduct())
    setSelected(null)
   }

  return (
    <div >
    <div >
        <Row style={{display:'flex', marginTop:'1%', marginBottom:'1%'}}> 
        {
          productId ?
             (         
          <Card style={{ width: '90%', marginTop:'5%', marginBottom:'5%', margin:'auto', display:'flex', flexDirection:'row', }} >              
              <div className='image-container' style={{flexGrow: 1}}>
                <Card.Img variant="top" src={`/images/${selected?.stock_image}`}  style={{ height: '23em', objectFit: 'contain', paddingTop:'2%',  }} />
              </div>          
                <div style={{display:'flex', flexDirection: 'row-reverse', justifyContent:'start'}}>
                <Button style={{alignSelf:'flex-start' , marginTop: '0.54em'}} variant='danger' onClick={handleClearSelectedProduct}>X</Button>
                <Card.Body>                  
                    <div><h2><small>Product Name:</small> <b>{selected?.product_name}</b> </h2></div>
                    <h3><small> Price:</small> <b>{selected?.price}/=</b></h3>
                    <div>         
                    <p style={{paddingLeft:'5em'}}><i>From farm to table, our fresh cuts are packed with flavor and quality</i> </p>
                    <p style={{paddingLeft:'5em'}}><i>Taste the difference with every bite—premium, locally sourced meat, just for you</i> </p>
                    <p style={{paddingLeft:'5em'}}><i>Savor freshness at its finest—perfectly butchered, ready to cook!</i> </p>
                    </div>
                    <Card.Footer>
                    
                      <Button onClick={()=>handleAddToCart(selected)} >Add to Cart</Button>
                    </Card.Footer>
                </Card.Body>
            </div>             
          </Card>
          )
          :
          (<div style={{marginLeft:'40%'}}><p> Select products below to preview & Add to cart</p></div>)
        }
        <Card>
          <ProductDisplay stock={listItems} />
        </Card>
        </Row>
    </div>
</div>
  )
}

export default ProductDetails


// const {data, error, isLoading} = useGetStockQuery()
 // let stock
// if(data){
    //     const {ids, entities} = data
    //     stock = ids.map(id => entities[id])
    // }