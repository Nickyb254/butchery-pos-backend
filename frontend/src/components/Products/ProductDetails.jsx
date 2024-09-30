import { useParams, Link } from 'react-router-dom' 
import { Container, Card, Row, Col, Badge, Button } from 'react-bootstrap';
import { useGetStockQuery } from '../../Features/Stock/stockApiSlice';


const ProductDetails = () => {
    const {productId} = useParams()
    const {data, error, isLoading} = useGetStockQuery()
    let stock
    if(data){
        const {ids, entities} = data
        stock = ids.map(id => entities[id])
    }
    // const stock = useSelector((state)=>state.stock.stock) 
    
const findItembyId = (productId)  => {
  return stock?.find(stock => stock._id === productId)
}

const item = findItembyId(productId)
// console.log(product)

  return (
    <div>
    <Container>
        <Row>          
        <Card style={{ width: '40%', height: '100%' }} >              
            <Card.Img variant="top" src={`http://localhost:5173/src/images/${item?.stock_image}`}  style={{ height: '23em', objectFit: 'cover' }} />
          
                <Card.Body>
                    <Card.Title>{item?.product_name}</Card.Title>
                    <h3>Price: {item?.price}</h3>
                    <Card.Text>         
                    <p>All product details here</p>
                    </Card.Text>
                </Card.Body>
        </Card>
        </Row>
    </Container>
</div>
  )
}

export default ProductDetails