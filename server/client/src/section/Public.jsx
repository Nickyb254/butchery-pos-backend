import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import ProductDisplay from '../components/Products/ProductDisplay';
import photo_1 from '../components/assets/photo_1.jpg';
import photo_2 from '../components/assets/photo_2.jpg';
import photo_3 from '../components/assets/photo_3.jpg';
import Container from 'react-bootstrap/esm/Container';
import { useGetStockQuery } from '../Features/Stock/stockApiSlice';
import { putStock } from '../Features/Stock/StockSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function Public () {  
  const { data, error, isLoading } = useGetStockQuery();
  const dispatch = useDispatch();
  let stock;
  
  // Use useEffect to dispatch the stock update after the component mounts
  // useEffect(() => {
  //   if (stock) {
  //     dispatch(putStock(stock));
  //   }
  // }, [stock, dispatch]);  // Ensure this runs only when stock is updated
       
 

  if (isLoading) return <div>loading..</div>;

  if (error) return <div>{error.message}</div>;

  if (data) {        
    const { ids, entities } = data;
    stock = ids.map(id => entities[id]); 
    dispatch(putStock(stock));
  }


  const imgStyles = {
    height: '80vh', 
    objectFit: 'cover'
  };

  return (
    <>
      <main className="text-center bg-dark text-white">
        <Card.Body className='ticker-container' >
          <Card.Title className='ticker-text' style={{ fontSize: '1.2em', padding:'0.2em'}}> Welcome to Boma! &nbsp; Meat Your Needs With Us! &nbsp; Always fresh & tasty! &nbsp; We are committed to supplying you with healthy, tasty and safe animal products.</Card.Title>
        </Card.Body>
        <Container className='mb-5'>
          <Carousel>
            <Carousel.Item>
              <img src={photo_1} style={imgStyles} className="img-rounded img-responsive d-block w-100" />
              <Carousel.Caption>
                <h3>Beef/ Steak</h3>
                <p>1Kg 750/=</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={photo_2} style={imgStyles} className="img-rounded img-responsive d-block w-100" />
              <Carousel.Caption>
                <h3>Rump Steak</h3>
                <p>1Kg 720/=</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={photo_3} style={imgStyles} className="img-rounded img-responsive d-block w-100" />
              <Carousel.Caption>
                <h3>Beef Cubes/ Steak Only</h3>
                <p>1Kg 900/=</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
        <Card className='mt-5 p-5'>
          <div className='mb-5'><h1>Our Products</h1></div>
          <Container>
            <ProductDisplay stock={stock} />
          </Container>
        </Card> 
        <Footer />
      </main>
    </>
  );
}

export default Public;
