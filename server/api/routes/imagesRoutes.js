// import express from 'express';
// const router = express.Router();
// import multer from 'multer';
// import path from 'path';
// import { createProductImages } from '../controllers/product-images';


// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//       cb(null, '/public/images');
//     },
//     filename: function(req, file, cb){
//       cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
//     }
//   });

//   const uploadImage = multer({
//     storage: storage
//   })

// //   router.get('/',  uploadProductImages) '/uploads', uploadImage.single('file'),
//   router.post('/', uploadImage.single('file'), createProductImages)

//   export default router;