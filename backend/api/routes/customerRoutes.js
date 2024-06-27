import express from "express";
const router = express.Router();

import mongoose from "mongoose";
import CustomerModel  from '../models/customers.js';
import checkAuth from '../middleware/check-auth.js';

//controllers
import {customers_get_all} from '../controllers/customers.js';
import {getOneCstomer} from '../controllers/customers.js';
import {createCustomer} from '../controllers/customers.js';
import {updateCustomer} from '../controllers/customers.js';
import {deleteCustomer} from '../controllers/customers.js';

//routes
router.get('/', customers_get_all);
router.get('/:customerId', getOneCstomer);
router.post('/', createCustomer);
router.patch('/:customersId', checkAuth, updateCustomer);
router.delete('/:customersId', checkAuth,  deleteCustomer);




export default router;