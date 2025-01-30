import mongoose from 'mongoose';
// import { v4 as uuidv4 } from 'uuid';

const salesSchema = new mongoose.Schema({
  // sales_id:  mongoose.Types.ObjectId, 
  // _id: { type: String, default: uuidv4, required: true },
  product:  {type: String, required: true}, //{type: mongoose.Types.ObjectId, ref:'Stock', required: true },
  price:  {type: Number, required: true, trim: true, min:0},
  mass_sold: {type: Number, required: true, trim: true, min:0},
  transaction_by: {type: String, required: true}, //{type: mongoose.Types.ObjectId, ref:'Employees', required: true },
  date: { type: Date, default: Date.now },
});

const salesModel = mongoose.model('Sales', salesSchema);
export default salesModel;