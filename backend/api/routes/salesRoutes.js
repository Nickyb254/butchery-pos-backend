import express, { json } from 'express';
const router =  express.Router();
import checkAuth from '../middleware/check-auth.js';
import {getAllSales} from  '../controllers/sales.js';
import {getOneSale} from  '../controllers/sales.js';
import {createSale} from  '../controllers/sales.js';
import {updateSale} from  '../controllers/sales.js';
import {deleteSale} from  '../controllers/sales.js';

//controllers
router.get('/', getAllSales);
router.get ('/:salesId', getOneSale);
router.post('/', checkAuth, createSale);
router.patch('/:salesId', checkAuth,  updateSale);
router.delete('/:salesId', checkAuth,  deleteSale);

export default router;