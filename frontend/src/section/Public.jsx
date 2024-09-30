import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import ProductDisplay from '../components/Products/ProductDisplay';
import photo_1 from '../components/assets/photo_1.jpg';
import photo_2 from '../components/assets/photo_2.jpg';
import photo_3 from '../components/assets/photo_3.jpg';
import Container from 'react-bootstrap/esm/Container';

function Public () {  
  
  const imgStyles ={
    height: '80vh', objectFit: 'cover'
  }
    
  return (
    <>
    <main className="text-center bg-dark text-white">
        <Card.Body>
          <Card.Title style={{fontSize: '2rem'}} >Meat Your Needs With Us!</Card.Title>
        </Card.Body>
        <Container className='mb-5' >
          <Carousel >
            <Carousel.Item>
            <img src={photo_1} style={imgStyles} className="img-rounded img-responsive d-block w-100"/>
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
                <h3>Beef Cubes/ Steak Only</h3>
                <p> 1Kg 900/=</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
       <Card className='mt-5 p-5' >
          <div className='mb-5'><h1>Our Products</h1> </div>
          <Container>        
            <ProductDisplay/>
          </Container>
       </Card> 
        <Footer/>
    </main>
    </>
  );
}

export default Public;

// Initial code
// import axiosInstance from '../api/axios';
  // const carts = useSelector(store => store.cart.items);
  //   console.log(carts)
    // const [stock, setStock] = useState([])
    // const [fetchData, setFetchData] = useState(true); // State to trigger data re-fetch     
    
    // const dispatch = useDispatch()

    // const handleAddToCart = () => {
    //     dispatch(addToCart({
    //         productId: 1,
    //         quantity: 1
    //     }))};
    

    // import ProductCard from '../components/Products/ProductCard';
    // this was part of the container
    // const stock = useSelector((state) => state.stock)
    {/* <Row>
            {stock?.map((product, key) => 
                <ProductCard key={key} product={product}/>
            )}
            </Row> */}