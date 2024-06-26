import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
import userModel from '../models/user.js';
import bcrypt from 'bcrypt';


router.post('/signup', (request, response, next) => {
  bcrypt.hash(request.body.password, 10, (error, hash) => {
        if(error){
          return response.status(500).json({
            error: error
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
          .catch(error => {
            console.log(error);
            response.status(500).json({
              error: error
            });
          })
        }
    });
  });


export default router;