import  React, { useEffect, useState }  from 'react';
import axiosInstance from '../api/axios';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
// import ProductDisplay from '../components/Products/ProductDisplay';
import photo_1 from '../components/assets/photo_1.jpg';
import photo_2 from '../components/assets/photo_2.jpg';
import photo_3 from '../components/assets/photo_3.jpg';
import Container from 'react-bootstrap/esm/Container';
import ProductCard from '../components/Products/ProductCard';
import { Row } from 'react-bootstrap';

function Public () {
  
  const imgStyles ={
    height: '80vh', objectFit: 'cover'
  }
  
  // const carts = useSelector(store => store.cart.items);
  //   console.log(carts)
    const [stock, setStock] = useState([])
    const [fetchData, setFetchData] = useState(true); // State to trigger data re-fetch     
    
    // const dispatch = useDispatch()

    // const handleAddToCart = () => {
    //     dispatch(addToCart({
    //         productId: 1,
    //         quantity: 1
    //     }))};
        
    //fetch All Stock
    useEffect(() => {
        if(fetchData){
             axiosInstance.get('/stock')
        .then(response => {
            setStock(response.data.doc)
            setFetchData(false); // Reset fetchData to avoid continuous re-fetch       
        })      
        .catch((error) => {
            console.log(error);
        })
        }
    },[fetchData])

    
  return (
    <>
      <Card className="text-center bg-dark text-white">
          <Card.Body>
            <Card.Title style={{fontSize: '2rem'}} >Meat Your Needs With Us!</Card.Title>
          </Card.Body>
      <Container className='mb-5' >
        <Carousel >
          <Carousel.Item>
          <img src={photo_1} style={imgStyles} class="img-rounded img-responsive d-block w-100"/>
            <Carousel.Caption>
              <h3>Beef/ Steak</h3>
              <p>1Kg 750/=</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={photo_2} style={imgStyles} className="img-rounded img-responsive d-block w-100"/>
            <Carousel.Caption>
              <h3>Rump Steak</h3>
              <p>1Kg 720/=</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={photo_3} style={imgStyles} className="img-rounded img-responsive d-block w-100" />
            <Carousel.Caption>
              <h3>Beef CUbes/ Steak Only</h3>
              <p> 1Kg 900/=</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <div><h1>Our Products</h1> </div>
        
      <Container>
        <Row>
            {stock.map((product, key) => 
                <ProductCard key={key} product={product}/>
            )}
            </Row>
        </Container>
      <Footer/>
      </Card>
    </>
  );
}

export default Public;