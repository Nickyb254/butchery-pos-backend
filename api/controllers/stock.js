import mongoose from 'mongoose';
import stockModel from '../models/stock.js';


export const getAllStock = (request, response, next)=>{
  stockModel.find()
    .exec()
    .then(doc =>{
      console.log(doc);
        response.status(200).json({
          message: 'Get request from stock successful!',
          doc: doc          
        });
    })
    .catch(error => {
      console.log(error);
      response.status(500).json({
        error: error
      });
    });
  
}




export const createStockItem = (request, response, next) =>{
  console.log(request.file);
  const stockItem = new stockModel ({
    product_name: request.body.product_name,
    price: request.body.price,
    mass_bought: request.body.mass_bought,
    mass_available: request.body.mass_available,
    supplier_name: request.body.supplier_name,
    stock_image: request.file.path
  });
    stockItem
    .save()
    .then(doc => {
      console.log(doc);
    })
    .catch(error => {
      console.log(error);
    })
  response.status(200).json({
    message: 'Post request from stock successful!',
    stockItem: stockItem
  });
}



export const updateStock = async (request, response, next) => {
  try{
      const updateData = request.body;
      const result = await stockModel.updateOne({_id: request.params.stockId}, updateData);
   if (!result.matchedCount){
        return response.status(404).json({message: 'No item found!'})
   }
   else if (result.matchedCount === 1){
        return response.status(200).json({message: 'Item updated!'});
   }
  }
  catch(error){
      console.log(error);
      response.status(500).json({message: 'Server error', error})
  }
  // response.status(200).json({
  //   message: 'Patch request from stock successful!'
  // });
}


export const deleteStockItem = async (request, response, next)=>{
  try{
    const result = await stockModel.deleteOne({_id: request.params.stockId});
    if (result.deletedCount === 1){
        return response.status(200).json({message: 'Item deleted!'})
    }
    else if (!result.deletedCount){
        return response.status(4040).json({message: 'Item not found!'});
    }
  }
  catch(error){
      error => console.log(error);
      response.status(500).json({message: 'Server error', error});
  }

  // response.status(200).json({
  //   message: 'Delete request from stock successful!'
  // })
}