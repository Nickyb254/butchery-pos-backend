import mongoose from 'mongoose';
// import { v4 as uuidv4 } from 'uuid';


const StockSchema = new mongoose.Schema({
  // _id: { type: String, default: uuidv4, required: true },
  product_name: {type: String, trim: true, required: true },
  price: {type: Number, required: true, trim: true, min:0},
  mass_bought:  {type: Number, required: true, trim: true, min:0},
  mass_available:  {type: Number, required: true, trim: true, min:0},
  supplier_name:  {type: String, trim: true, required: true },
  date: { type: Date, default: Date.now },
  stock_image: { type: String},
});

const stockModel = mongoose.model('Stock', StockSchema);
export default stockModel