import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import stockModel from './stock.js';
import CustomerModel from './customers.js';

const OrderSchema = new mongoose.Schema({
  _id: {type: String, default: uuidv4, required: true },
  customerId: [{ type: String, required: true, ref: 'CustomerModel'}],
  email: { type: String, unique: true },
  products: [{ type: String, required: true, ref: 'stockModel' }],
  stripeCustomerId: {type: String},
  sessionId: {type: String},
  paymentIntent: {type: String},
    subtotal:{type: Number},
    total:{type: Number},
    shipping: {type: Object},
    delivery_status:{type: String, default: "pending"},
    payment_status: {type: String},
    
},{timestamps: true});

const OrderModel = mongoose.model('Order', OrderSchema);
export default OrderModel