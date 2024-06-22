import express from 'express';
const router =  express.Router();
import salesModel from '../models/sales.js';

router.get('/', (request, response, next)=>{
  salesModel.find()
    .exec()
    .then(result => {
      console.log(result);
      response.status(200).json(result);
    })
    .catch(error => {
      console.log(error);
      response.status().json({
        error: error
      });
    });
  });


router.post('/', (request, response, next) => {
  const sale = new salesModel ({
    product_name: request.body.product_name,
    price: request.body.price,
    mass_sold: request.body.mass_sold,
    supplier_name: request.body.supplier_name,
  });
  sale
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(error => console.log(error));

  response.status(200).json({
    message: 'Post request from Sales successful!',
    sale: sale,
  });
});


router.patch('/:salesId', async (request, response, next)=>{
  try{
    const updateData = request.body;
    const result = await salesModel.updateOne({ sales_id: request.params.sales_id }, updateData);
    if(!result.matchedCount){
      return response.status(404).json({ 
        error: error,
        message: 'Sale_id not found!' });
    } 
    else if (result.matchedCount === 1){
      return response.status(200).json({  message: 'Sale updated successfully!'});
    }
  }catch(error){
    console.log(error);
    response.status(500).json({ message: 'Server error', error});
  }
});


router.delete('/:salesId', async (request, response, next)=>{
  try{
    const result = await salesModel.deleteOne({sale_id: request.params.sale_id});
    if(result.deletedCount === 1){
      return response.status(200).json({message: 'Sale item deleted!'})
    }
    else if(!result.deletedCount){
      return response.status(404).json({message: 'No sale item found!'});
    }
  }
  catch(error){
    console.log(error);
    response.status(500).json({message: 'Server error', error});
  }
  //started testing out this way
  // response.status(200).json({
  //   message: 'Delete request from Sales successful!'
  // });
});

export default router;