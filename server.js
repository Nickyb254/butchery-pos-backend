import express from "express";
const router = express.Router();
import connectDB from'./config/boma_db.js';
import customerRoutes from './api/routes/customerRoutes.js';
import employeesRoutes from './api/routes/employeesRoutes.js';


const app = express();
const PORT = process.env.MONGO_URI || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
connectDB();

app.use('/customers', customerRoutes);
app.use('/employees', employeesRoutes);

 
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});