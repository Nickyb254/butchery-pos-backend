import express from 'express';
const router = express.Router();

router.get('/',(request, response, next)=>{
  response.status(200).json({
    message: 'Get request from stock successful!'
  });
});


router.post('/', (request, response, next)=>{
  const stockItem = {
    product_name: request.body.product_name,
    price: request.body.price,
    mass_bought: request.body.mass_bought,
    mass_available: request.body.mass_available,
    supplier_name: request.body.supplier_name,
  }

  response.status(200).json({
    message: 'Post request from stock successful!',
    stockItem: stockItem,
  });
});


router.patch('/:stockId', (request, response, next)=>{
  response.status(200).json({
    message: 'Patch request from stock successful!'
  });
});


router.delete('/:stockId', (request, response, next)=>{
  response.status(200).json({
    message: 'Delete request from stock successful!'
  })
});

export default router;