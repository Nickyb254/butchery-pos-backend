import mongoose from 'mongoose';


const salesSchema = new mongoose.Schema({
  sales_id: mongoose.Types.ObjectId,
  product_name:  String,
  price:  Number,
  mass_sold:  Number ,
  supplier_name:  String,
  date: { type: Date, default: Date.now },
});

const salesModel = mongoose.model('Sales', salesSchema);
export default salesModel;