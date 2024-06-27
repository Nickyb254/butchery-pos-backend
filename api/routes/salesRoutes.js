import express, { json } from 'express';
const router =  express.Router();
import salesModel from '../models/sales.js';
import mongoose from 'mongoose';
import Employees from '../models/employees.js';
//to filter for products in stock
import Stock from '../models/stock.js';
import checkAuth from '../middleware/check-auth.js'

router.get('/', (request, response, next) => {
  salesModel.find()
    .populate('product','product_name')
    .populate('transaction_by','employee_name')
    .select('product price mass_sold transaction_by')
    .exec()
    .then(result => {
      console.log(result);      
      if(result.length < 1){
        return response.status(200).json({message: 'No sales records available!'});
      }
      else{
        response.status(200).json({
          count: result.length,
          saleProducts: result.map(result =>{
            return{
              _id: result._id,
              product: result.product,
              price: result.price,
              mass: result.mass_sold,
              servedBy: result.transaction_by,
              request: {
                type: 'GET',
                url: 'http://localhost:3000/sales'
              },
              saleDate: result.Date
            }
          })
        });  
      }         
    })
    .catch(error => {
      console.log(error);
      response.status().json({
        error: error
      });
    });
  });


  //populate adds names using product_id from stock
router.get ('/:salesId', (request, response, next) => {
  const id = request.params.salesId;
  salesModel.findById(id)
  .populate('transaction_by', 'employee_name')
  .populate('product', 'product_name')
  .exec()
  .then(result =>{    
    response.status(200).json({
      sale: result,
      request: {
        type: 'GET',
        description: 'Get a sale',
        url: '​http://localhost:3000/sales/salesId',
      }
    });
  })  
  .catch(error => {
    console.log(error);
    response.status(500).json({
      message: 'No valid entry found for provided ID!',
      error:error
    });
  })

});



router.post('/', checkAuth, (request, response, next) => {
  Stock.findById(request.body.productId)
                .then(product =>{
                  try{
                    const sale = new salesModel ({
                      product: request.body.product,
                      price: request.body.price,
                      mass_sold: request.body.mass_sold,
                      transaction_by: request.body.transaction_by
                    });
                  
                   sale
                    .save()
                    .then(result => {
                      console.log(result);
                      response.status(200).json({
                        message: 'Post request from Sales successful!',
                        sale: {
                          product: result._id,
                          price: result.price,
                          mass_sold: result.mass_sold,
                          request: {
                            type: 'GET',
                            url: 'http://localhost:3000/sales'
                          },
                        }      
                    }); 
                    })}
                    catch(error){
                      response.status(500).json({
                        message: 'Product does not exist!',
                        error: error
                      });
                    };
                })    
});


router.patch('/:salesId', checkAuth,  async (request, response, next)=>{
  try{
    const updateData = request.body;
    const result = await salesModel.updateOne({ _id: request.params.salesId }, updateData);
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



// router.delete('/:salesId', async(request, response, next)=>{
//   await salesModel.deleteOne({sales_id: request.params.salesId})
//   .exec()
//   .then(result => {
//     response.status().json({
//       message: 'Sale deleted!',
//       request: {
//         type: 'POST',
//         url: 'http://localhost:3000/sales/' + 'salesId',
//         body: { sales_id: "Id", product: "stock_id", price: "number", mass_sold: "number", transaction_by: "Employees_id" }
//       }
//     });
//   })
//   .catch(error =>{
//     console.log(error);
//     response.status(500).json({ message: 'Server error', error});
//   })
// });



router.delete('/:salesId', checkAuth,  async (request, response, next)=>{
  try{
    const result = await salesModel.deleteOne({_id: request.params.salesId});
    if(result.deletedCount === 1){
      return response.status(200).json({message: 'Sale item deleted!'})
    }
    else {
      return response.status(404).json({message: 'No sale item found with matching ID!'});
    }
  }
  catch(error){
    console.log(error);
    response.status(500).json({message: 'Server error', error});
  }
});

export default router;