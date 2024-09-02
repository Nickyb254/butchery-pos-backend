import React, {useState, useEffect} from 'react'
import { Container, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdminFooter from '../../section/AdminFooter'

const Welcome = () => {
    const [showHeader, setShowHeader] = useState(false)
    useEffect(()=>{
      setShowHeader(true)
    },[])
    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)
  
    return (
      <>
      <Container className='d-flex '>
      <p>Welcome</p> <br/>
      <p>{today}</p>
      </Container>
    <Container style={{maxWidth: '60%'}} >      
      <Row style={{ padding: '1em', margin:'auto'}} >
        <Col>
          <Card style={{padding: '1em', margin:'auto'}} >
          <p><Link to="employees">View/Add/Edit/Disable employee(s) in the list</Link></p>
          </Card>
        </Col>
        <Col>
          <Card style={{ padding: '1em', margin:'auto'}} >
          <p><Link to="customers">View/Add/Edit/Delete customer(s) in the list</Link></p>
          </Card>
        </Col>        
      </Row>
      <Row style={{ padding: '1em', margin:'auto'}} >
      <Col>
          <Card style={{ padding: '1em', margin:'auto'}} >
          <p><Link to="stock">View/Add/Edit/Delete stock in the list</Link></p>
          </Card>
        </Col>
        <Col>
          <Card  style={{ padding: '1em', margin:'auto'}} >
          <p><Link to="sales">View/Add/Edit/Delete sales in the list</Link></p>
          </Card>
        </Col>
      </Row>     
    </Container>
    </>
  )
}

export default Welcome