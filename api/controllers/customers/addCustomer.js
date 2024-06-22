import mongoose from "mongoose";
import CustomerModel  from '../../models/customers.js';

router.post('/', (request, response, next) => {
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


export default customer