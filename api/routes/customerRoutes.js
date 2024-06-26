import express from "express";
const router = express.Router();

import mongoose from "mongoose";
import CustomerModel  from '../models/customers.js';




router.get('/', (request, response, next) => {
  CustomerModel.find()
    .select('customer_id customer_name customer_phone')
    .exec()
    .then(docs => {
      //console.log(doc);
      const res = {
        count: docs.length,
        customers: docs.map(doc =>{
          return{
            customer_id: doc._id,
            customer_name: doc.customer_name,
            customer_phone: doc.customer_phone,
            request: {
              type: "GET",
              url: "http://localhost:3000/customers/" + doc._id,
            }
          }
        })
      };
      response.status(200).json(res);
    })
    .catch(error => {
      console.log(error);
      response.status(500).json({
        error:error
      });
    });
  // response.status(200).json({
  //   message: 'Get Request from a customer!'
  // });
});


router.get('/:customerId', (request, response, next) => {
  const id = request.params.customerId;
  CustomerModel.findById(id)
    .select('customer_id customer_name customer_phone')
    .exec()
    .then(doc =>{
      //console.log('From database',doc);
      if(doc){
          response.status(200).json({
            customer: doc,
            request: {
              type: 'GET',
              description: 'Get all customers',
              url: '​http://localhost:3000/customers/',
            }
          });
      }
      else{
        response.status(404).json({
          message: "No valid entry found for provided ID!"
        });
      }
    })   
    .catch(error => {
      console.log(error);
      response.status(500).json({
        error:error
      });
    });  
});


router.post('/', (request, response, next) => {
  //the request being posted
  const customer = new CustomerModel({
    customer_name: request.body.customer_name,
    customer_phone: request.body.customer_phone,
  });
  customer
    .save()
    .then(result =>{
      console.log(result);
        response.status(200).json({
          message: 'Customer created!',
          //customer: customer
          createdCustomer: {
            customer_name: result.customer_name,
            customer_phone: result.customer_phone,
            _id: result._id,
            request: {
              type: 'GET',
              url: "http://localhost:3000/customers/" + result._id,
            }
          }
        }); 
    })
    .catch(error => 
      console.log(error)     
  );  
  response.status(404).json(
    error
  )
});


router.patch('/:customersId', async (req, res) => {
   try {
    const updateData = req.body;
    const result = await CustomerModel.updateOne({ customer_id: req.params.customers_Id }, updateData);    

    if (!result.matchedCount) {
      return res.status(404).json({ message: 'User not found' });
    }
    else if (result.matchedCount === 1) {res.status(200).json({ 
      message: 'Customer updated successfully', 
      request: {
        type: 'GET',
        description: 'Get all customers',
        url: '​http://localhost:3000/customers/',
      }
    })}
    //res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error', error });
  }
});





router.delete('/:customersId', async (req, res) => {
  try {
    const result = await CustomerModel.deleteOne({ _id: req.params.customersId });

    if (result.deletedCount === 1) {
      return res.status(200).json({ message: 'User deleted successfully' });
    }
    else if (!result.deletedCount ){
      res.status(404).json({ message: 'User not found' });
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error', error });
  }
});




export default router;