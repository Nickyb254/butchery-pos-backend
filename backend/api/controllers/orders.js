import OrderModel from '../models/order.js';


export const getAllOrders = (request, response, next)=>{
  OrderModel.find()
    .exec()
    .then(orders =>{
      // console.log(doc);
        response.status(200).json({
          message: 'Get request from stock successful!', 
          orders
        //   doc: docs.map(dos =>{
        //     return {
        //       _id: dos._id,
        //       product_name: dos.product_name,
        //       price: dos.price,
        //       stock_image: dos.stock_image
        //     }
        //   })          
        });
    })
    .catch(error => {
      console.log(error);
      response.status(500).json({
        error: error
      });
    });  
}


export const getOneOrder = (request, response, next) => {
    const id = request.params.orderId;
    OrderModel.findById(id)
    .exec()
    .then(result =>{    
      response.status(200).json({
        order: result,
        request: {
          type: 'GET',
          description: 'Get an order',
          url: '​http://localhost:3000/sales/orderId',
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
 
}