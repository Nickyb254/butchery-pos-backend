import mongoose from 'mongoose';


const StockSchema = new mongoose.Schema({
  product_id: mongoose.Types.ObjectId,
  product_name: {type: String, trim: true, required: true },
  price: {type: Number, required: true, trim: true, min:0},
  mass_bought:  {type: Number, required: true, trim: true, min:0},
  mass_available:  {type: Number, required: true, trim: true, min:0},
  supplier_name:  {type: String, trim: true, required: true },
  date: { type: Date, default: Date.now },
  stock_image: { type: String, required: true}
});

const stockModel = mongoose.model('Stock', StockSchema);
export default stockModel