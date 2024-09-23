import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const OrderSchema = new mongoose.Schema({
  _id: {type: String, default: uuidv4, required: true },
  customerId: {type: String, required: true },
  stripeCustomerId: {type: String},
  email:  {type: String,  unique: true },
  phone: {type: String},
  paymentIntent: {type: String},
  products: [
        {
            id: {type: Object},
            product_name: {type: String, required: true },
            desc: {type: String},
            price: {type: Number, required: true, trim: true, min:0},
            // order_image: { type: String},
            quantity: {type: Number, required: true},

        }
    ],
    subtotal:{type: Number},
    total:{type: Number},
    shipping: {type: Object},
    delivery_status:{type: String, default: "pending"},
    payment_status: {type: String},
    
},{timestamps: true});

const OrderModel = mongoose.model('Order', OrderSchema);
export default OrderModel