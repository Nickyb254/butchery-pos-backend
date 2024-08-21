import express from "express";
const router = express.Router();
import connectDB from'./config/boma_db.js';
import customerRoutes from './api/routes/customerRoutes.js';
import employeesRoutes from './api/routes/employeesRoutes.js';
import salesRoutes from './api/routes/salesRoutes.js';
import stockRoutes from './api/routes/stockRoutes.js';
import morgan from "morgan";
import userRoutes from './api/routes/userRoutes.js';
// import imagesRoutes from './api/routes/imagesRoutes.js'
import { configDotenv } from "dotenv";
import cors from 'cors';


const app = express();
const PORT = process.env.MONGO_URI || 3000 || 5173;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: false
};

app.use(cors(corsOptions));
app.use(morgan('dev'));
//bodyParser helps access data in the body; handle incoming post request
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());


// ------------------------------------------------------------------------------------
import multer from 'multer';
//adjust how files are stored
const storage = multer.diskStorage({
  destination: function(req, file, callback){
    callback(null, '../Z frontEnd/boma/src/images/');
  },
  filename: function(req, file, callback){
    callback(null, Date.now() + '--' + file.originalname);
  },
});

const fileFilter = (req, file, callback) =>{
//accept file
  if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/webp"){
    callback(null, true);
  } else {
    callback(null, false);
    return callback(new Error('Only .png, .jpg and .jpeg format allowed!'));
    //reject file
  }  
};

const upload = multer({
  storage: storage, 
  limits: {
  fileSize: 1000000
  },
  fileFilter: fileFilter
});


//////////////////////////////////////////////////////////////////////////////////////////
import ImageModel from "./api/models/images.js";
import mongoose from "mongoose";

const Images = mongoose.model('Images')
app.post('/upload-image',  upload.single('image'), async(request, response, next) => {
  console.log(request.body)
  const imageName = request.file.filename
  try {
    await Images.create({imagez: imageName})
    // response.status(200).json({message: '1 image file uploaded!'})
  } catch (error) {
    response.json({status: error})
    
  }
  next()
})
//making uploads folder publicly accessing for GET
app.use('/' ,express.static('uploads'));

function errHandler(err, req, res, next){
  if (err instanceof multer.MulterError){
    res.json({
      success: 0,
      message: err.message
    })
  }
}

app.use(errHandler)
// ------------------------------------------------------------------------------------

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
app.use('/stock', upload.single('image'), stockRoutes);
app.use('/customers/Id', customerRoutes);
app.use('/employees/Id', employeesRoutes);
app.use('/sales/Id', salesRoutes);
app.use('/stock/Id', stockRoutes);
app.use('/user', userRoutes);
app.use('/login', userRoutes);
// app.use('/images', imagesRoutes);

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