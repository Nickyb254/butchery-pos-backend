import express from 'express';
const router = express.Router();
import checkAuth from '../middleware/check-auth.js';
import {getAllStock} from '../controllers/stock.js'; 
import {createStockItem} from '../controllers/stock.js';
import {updateStock} from '../controllers/stock.js';
import {deleteStockItem} from '../controllers/stock.js';

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



//controllers
router.get('/', getAllStock);
router.post('/', checkAuth, upload.single('stockImage'), createStockItem);
router.patch('/:stockId', checkAuth, updateStock );
router.delete('/:stockId', checkAuth, deleteStockItem);

export default router;