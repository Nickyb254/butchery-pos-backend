import express from "express";
const router = express.Router();

import checkAuth from '../middleware/check-auth.js';

//controllers
import {getAllCustomers, getOneCstomer} from '../controllers/customers.js';
import {customerLogIn} from '../controllers/customers.js';
import {createCustomer} from '../controllers/customers.js';
import {updateCustomer} from '../controllers/customers.js';
import {deleteCustomer} from '../controllers/customers.js';
import {handleRefreshToken} from '../controllers/customers.js';
import {customerLogOut} from '../controllers/customers.js';
import { getCustomerOrders } from "../controllers/customerOrders.js";

//routes
router.get('/',  getAllCustomers);//checkAuth,
router.get('/:customerId', getOneCstomer);
router.get('/:customerId/orders', getCustomerOrders);
router.get('/refresh', handleRefreshToken);
router.post('/', createCustomer);
router.post('/login', customerLogIn);
router.post('/log-out', customerLogOut);
router.patch('/:customersId', updateCustomer); // checkAuth,
router.delete('/:customersId', deleteCustomer); //checkAuth,  




export default router;