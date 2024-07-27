import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

const AdminFooter = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()

    const onGoHomeClicked = () => navigate('/')
    let goHomeButton = null
        if(pathname !== '/adminlogin'){
            goHomeButton = (
                <Button title='Home' onClick={onGoHomeClicked}>
                    Boma Butchery
                </Button>
            )
        }

    const content = (
        <Card>
        {/* <Card.Header>Quote</Card.Header> */}
        <Card.Body>
            {goHomeButton}
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.{' '}
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
      )

  return content
}

export default AdminFooter