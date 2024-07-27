import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import MyNavbar from '../components/Navbar';
import Footer from './Footer';

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
    <MyNavbar />
      <Card className="text-center">
          <Card.Body>
            <Card.Title style={{fontSize: '2rem'}} >Meat Your Needs With Us!</Card.Title>
          </Card.Body>
      <Container>
        <Carousel >
          <Carousel.Item>
          <img src={photo_1} style={imgStyles} class="img-rounded img-responsive d-block w-100"/>
            <Carousel.Caption>
              <h3>Beef/ Steak</h3>
              <p>1Kg 750/=</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={photo_2} style={imgStyles} class="img-rounded img-responsive d-block w-100"/>
            <Carousel.Caption>
              <h3>Rump Steak</h3>
              <p>1Kg 720/=</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={photo_3} style={imgStyles} class="img-rounded img-responsive d-block w-100" />
            <Carousel.Caption>
              <h3>Beef CUbes/ Steak Only</h3>
              <p> 1Kg 900/=</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Footer/>
      </Card>
    </>
  );
}

export default Public;