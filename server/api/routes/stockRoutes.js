import express from 'express';
const router = express.Router();
import checkAuth from '../middleware/check-auth.js';
import {getAllStock} from '../controllers/stock.js'; 
import {createStockItem} from '../controllers/stock.js';
import {updateStock} from '../controllers/stock.js';
import {deleteStockItem} from '../controllers/stock.js';



//controllers
router.get('/', getAllStock);
router.post('/', createStockItem); //checkAuth,
router.patch('/:stockId',  updateStock );//checkAuth,
router.delete('/:stockId',  deleteStockItem);//checkAuth,

export default router;