import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
import stockModel from '../models/stock.js';


import multer from 'multer';
//adjust how files are stored
const storage = multer.diskStorage({
  destination: function(req, file, callback){
    callback(null, './uploads/');
  },
  filename: function(req, file, callback){
    callback(null, file.originalname)
    // callback(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, callback) =>{
//accept file
  if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/webp"){
    callback(null, true);
  } else {
    callback(null, false);
    return callback(new Error('Only .png, .jpg and .jpeg format allowed!'));
    //reject file
  }  
};

//simple way
//const upload = multer({dest: 'uploads/'});
const upload = multer({
  storage: storage, 
  limits: {
  fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.get('/',(request, response, next)=>{
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
  
});


router.post('/', upload.single('stockImage'), (request, response, next) =>{
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
});


router.patch('/:stockId', async (request, response, next) => {
  try{
      const updateData = request.body;
      const result = await stockModel.updateOne({stock_id: request.params.stock_id}, updateData);
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
});


router.delete('/:stockId', async (request, response, next)=>{
  try{
    const result = await stockModel.deleteOne({stock_id: request.params.id});
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
});

export default router;