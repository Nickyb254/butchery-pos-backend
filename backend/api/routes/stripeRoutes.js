import express, { json } from 'express';
const router =  express.Router();

import { 
    checkOut,
    // addProduct,
    // addPrice, 
    stripeWebhook

} from '../controllers/stripe.js';


router.post('/create-checkout',  checkOut);//checkAuth,
// router.post('/add-product',  addProduct);//checkAuth,
// router.post('/add-price',  addPrice);//checkAuth,
router.post('/webhook',  stripeWebhook);//checkAuth,

export default router;