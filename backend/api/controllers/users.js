import mongoose from 'mongoose';
import userModel from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import asyncErrorHandler from '../../utils/asyncErrorHandler.js';


export const createUser = (request, response, next) => {
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
            console.log('create user result',result);
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
  }


// LOG IN...................................................................................

  export const userLogIn = asyncErrorHandler(async (request, response, next) => {
  
      const users = await userModel.find({ email: request.body.email }).exec();
  
      if (users.length < 1) {
        return response.status(401).json({
          message: 'Auth failed!'
        });
      }
  
      const user = users[0];
      const passwordMatch = await bcrypt.compare(request.body.password, user.password);
  
      if (!passwordMatch) {
        return response.status(401).json({
          message: 'Auth failed!'
        });
      }
  
      const accessToken = jwt.sign(
        {email: user.email, userId: user.user_id },
        process.env.JWT_SECRET_KEY,
        {expiresIn: "13s"}
      );


      const refreshToken = jwt.sign(
        {email: user.email, userId: user.user_id  },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '15min' }
    )

    // Create secure cookie with refresh token 
    response.cookie('jwt', refreshToken, {httpOnly: true, secure: false, sameSite: 'None', maxAge: 15 * 60 * 1000 })

    // Saving refreshToken with current user //cookie expiry: set to match rT 7 * 24 * 60 * 60 * 1000
    user.refreshToken = refreshToken
    const result = user.save()
    console.log('New refresh token saved with user', result)
  
      return response.status(200).json({
         accessToken
      });
    } 
)
    
//security weakness if
// return res.status(404).json({
//message: 'Mail not found, user doesn\'t exist'})
// .......................................................................................
export const handleRefreshToken = asyncErrorHandler(async (request, response) => {
  const cookies = request.cookies

  if (!cookies?.jwt) return response.sendStatus(401).json({ message: 'Unauthorized! The user has no cookie' })

  const refreshToken = cookies.jwt
  const currentUser = await userModel.findOne({ refreshToken }).exec()
  // console.log('This the currentUser:',currentUser)
  if (!currentUser) return response.status(403).json({ message: 'Forbidden! Not a valid user' })

  jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
          // if (err || currentUser._id !== decoded._id ) return response.status(403).json({ message: 'Forbidden! User not found' })
            console.log('this is the decoded from JWT verify', decoded)
            if (err) {
              // Handle errors, e.g., invalid token, expired token
              console.log('Error from decoding JWT',err)
              return response.status(403).json({ message: 'Forbidden! Invalid or expired token' });
          }
      
          if (currentUser._email !== decoded._email) {
              // Handle unauthorized access
              return response.status(403).json({ message: 'Forbidden! User not found' });
          } else {
           // Generate new access token
          const accessToken = jwt.sign(
              {"userId": currentUser.user_id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: '13s' }
            )
            response.status(200).json({message:'This is the new access Token for the user', accessToken })
        }
      }
  )
})

//log out........................................................................
export const logOut = asyncErrorHandler(async (request, response) => {
  
    const cookies = request.cookies
    if(!cookies?.jwt) return response.sendStatus(204) //no content
    const refreshToken = cookies.jwt

  //find refreshToken in Db
  const onlineUser = await userModel.findOne({refreshToken}).exec()
  if(!onlineUser){
    response.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: false})
    return response.sendStatus(204)
  }

  //delete refreshToken from db
  onlineUser.refreshToken = ''
  const result = await onlineUser.save()
  console.log('logged out user has no refreshToken', result)

  response.clearCookie('jwt',{httpOnly: true, sameSite: 'None', secure:false})
  response.sendStatus(204)
  
})

//delete user........................................................................
export const deleteUser = (request, response, next) => {
  userModel.deleteOne({ _id: request.params.userId })
  .exec()
  .then(result => {
    response.status(200).jsons({
      message: 'User deleted!'
    });
  })
  .catch(error => {
    console.log('delete user', error);
    response.status(500).json({
      error: error
    });
  })
}