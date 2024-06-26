import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
import userModel from '../models/user.js';
import bcrypt from 'bcrypt';


router.post('/signup', (request, response, next) => {
  userModel.find({email: request.body.email})
  .exec()
  .then(user => {
    if( user.length >= 1 ){
      return response.status(409).json({
        message: 'Mail exists'
      });
    }
    else {
      bcrypt.hash(request.body.password, 2, (err, hash) => {
        if(err){
          return response.status(500).json({
            error: err
          });
        } else{
          const user = new userModel({
            user_id: new mongoose.Types.ObjectId,
            email: request.body.email,
            password: hash
          });
          user
          .save()
          .then(result => {
            console.log(result);
            response.status(201).json({
              message: 'User created!'
            });
          })
          .catch((error) => {
            console.log(error);
            response.status(500).json({
              error: error
            });
          })
        }
    });
    }
  });  
  });

router.delete ('/:userId', (request, response, next) => {
  userModel.deleteOne({ _id: request.params.userId })
  .exec()
  .then(result => {
    response.status(200).json({
      message: 'User deleted!'
    });
  })
  .catch(error => {
    console.log(error);
    response.status(500).json({
      error: error
    });
  })
});

export default router;