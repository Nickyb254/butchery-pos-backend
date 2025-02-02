import express from "express";
import connectDB from'./config/boma_db.js';
import customerRoutes from './api/routes/customerRoutes.js';
import employeesRoutes from './api/routes/employeesRoutes.js';
import salesRoutes from './api/routes/salesRoutes.js';
import stockRoutes from './api/routes/stockRoutes.js';
import orderRoutes from './api/routes/orderRoutes.js'
import morgan from "morgan";
import userRoutes from './api/routes/userRoutes.js';
// import imagesRoutes from './api/routes/imagesRoutes.js'
import stripeRoutes from './api/routes/stripeRoutes.js'
import { configDotenv } from "dotenv";
import cors from 'cors';
import cookieParser from "cookie-parser";
import customError from "./utils/customError.js";
import globalErrorHandler from "./api/controllers/errorController.js"

//__dirname is not defined in ES module scope; it is available using require (below is workaround)
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// configDotenv()
// Load environment variables from appropriate .env file
if (process.env.NODE_ENV !== 'production') {
  configDotenv({
    path: `.env.${process.env.NODE_ENV || 'development'}`,
  });
}

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ORDER MATTERS CORS - PREFLIGHT - STATIC FILES
// CORS configuration- CROSS-ORIGIN RESOURCE SHARING
const allowedOrigins = [`${process.env.CLIENT_URL}` ,`${process.env.FRONT_END_URL}`, "http://localhost:3000",  "http://127.0.0.1:3000"].filter(Boolean);

// Compatibility with build
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  })
);

// Express route specifically for OPTIONS requests- preflight
app.options("*", (req, res) => {
  const origin = req.headers.origin;
  res.header("Access-Control-Allow-Origin", origin);
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", "true"); // Needed for cookies/auth headers
  res.sendStatus(200);
});

app.use(morgan('dev'));
//bodyParser helps access data in the body; handle incoming post request
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());
app.use(cookieParser());

// ------------------------------------------------------------------------------------
import multer from 'multer';
//adjust how files are stored
const storage = multer.diskStorage({
  destination: function(req, file, callback){
    callback(null, 'client/public/images/');
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

connectDB();
//serve images from node
app.use('/images' ,express.static(path.join('client/public/images')));

app.use('/api/v1/customers', customerRoutes);
app.use('/api/v1/employees', employeesRoutes);
app.use('/api/v1/sales', salesRoutes);
app.use('/api/v1/stock', upload.single('image'), stockRoutes);
app.use('/api/v1/user', userRoutes);
// app.use('/api/v1/images', imagesRoutes);
app.use('/api/v1/stripe', stripeRoutes);
app.use('/api/v1/orders', orderRoutes);


//Serve frontend as static files
app.use(express.static(path.join(__dirname, '/client/dist')))

//Render client for any path 
app.get('*', (req, res)=> res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html')))

//handling any request not in the above routers
app.all('*',(request, response, next)=>{
  // const error = new error('Not found');
  // error.status(404);
  const error = new customError(`Can't find ${request.originalUrl} on the server`, 404)
  next(error);
});

//next passes 404 error and any other error down to global error handler below

app.use(globalErrorHandler);

 
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});