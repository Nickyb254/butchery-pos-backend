import express from "express";
const router = express.Router();

import mongoose from "mongoose";
import CustomerModel  from '../models/customers.js';




router.get('/', (request, response, next) => {
  CustomerModel.find()
    .exec()
    .then(doc => {
      console.log(doc);
      response.status(200).json(doc);
    })
    .catch(error => {
      console.log(error);
      response.status(500).json({
        error:error
      });
    });
  response.status(200).json({
    message: 'Get Request from a customer!'
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
    })
    .catch(error => console.log(error));

  response.status(200).json({
    message: 'Post Reqest from a customer!',
    customer: customer
  });
});




// router.patch('/:customersId',(request, response, next)=>{
//   const customer = [request.params.body];
//   const id = request.params.customersId;
//   const updateOps = {};
//    for (const ops of request.body){
//     updateOps[ops.propName] = ops.value;
//    }
//    customer.update({ _id: id}, { $set: updateOps })
//    .exec()
//    .then(result => {
//     console.log(result);
//     response.status(200).json({
//       message: 'Patch Request from a customer!'
//     })
//    })
//    .catch(error => {
//     console.log(error);
//     response.status(500)
//    });
  
// });

router.patch('/:customersId', async (req, res) => {
  try {
    const updateData = req.body;
    const result = await CustomerModel.updateOne({ customer_id: req.params.id }, updateData);

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error', error });
  }
});





router.delete('/:customersId', async (req, res) => {
  try {
    const result = await CustomerModel.deleteOne({ customer_id: req.params.id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error', error });
  }
});




export default router;