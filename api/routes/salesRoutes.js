import express from 'express';
const router =  express.Router();

router.get('/', (request, response, next)=>{
  response.status(200).json({
    message: 'Get request from Sales success!'
  });
});


router.post('/',(request, response, next)=>{
  const sale = {
    product_name: request.body.product_name,
    price: request.body.price,
    mass_sold: request.body.mass_sold,
    supplier_name: request.body.supplier_name,
  };

  response.status(200).json({
    message: 'Post request from Sales successful!',
    sale: sale,
  });
});


router.patch('/:salesId', (request, response, next)=>{
  response.status(200).json({
    message: 'Patch request from Sales successful!'
  })
});


router.delete('/:salesId', (request, response, next)=>{
  response.status(200).json({
    message: 'Delete request from Sales successful!'
  });
});

export default router;