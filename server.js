import express from "express";
const router = express.Router();
import connectDB from'./config/boma_db.js';
import customerRoutes from './api/routes/customerRoutes.js';
import employeesRoutes from './api/routes/employeesRoutes.js';
import salesRoutes from './api/routes/salesRoutes.js';
import stockRoutes from './api/routes/stockRoutes.js';
import morgan from "morgan";


const app = express();
const PORT = process.env.MONGO_URI || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));
//bodyParser helps access data in the body; handle incoming post request
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());

//CORS errors- CROSS-ORIGIN RESOURCE SHARING
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (request.method === 'OPTIONS'){
      response.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE GET');
    return response.status(200).json({});
  }
  next();
});

connectDB();

app.use('/customers', customerRoutes);
app.use('/employees', employeesRoutes);
app.use('/sales', salesRoutes);
app.use('/stock', stockRoutes);
app.use('/customers/Id', customerRoutes);
app.use('/employees/Id', employeesRoutes);
app.use('/sales/Id', salesRoutes);
app.use('/stock/Id', stockRoutes);


//handling any request not in the above routers
app.use((request, response, next)=>{
  const error = new error('Not found');
  error.status(404);
  next(error);
});

//next passes 404 error and any other error down

app.use((error, request, response, next)=>{
  response.status(error.status || 500);
  response.json({
    error:{
      message: error.message
    }
  });
});

 
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});