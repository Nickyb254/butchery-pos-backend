import mongoose from 'mongoose';
import userModel from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


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
  }




  export const userLogIn = async (request, response, next) => {
    try {
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
  
      const accesstoken = jwt.sign(
        {email: user.email, userId: user.user_id },
      `${process.env.JWT_SECRET}`,
        {expiresIn: "1h"}
      );


      const refreshToken = jwt.sign(
        { userId: user.user_id  },
        `${process.env.REFRESH_TOKEN_SECRET}`,
        { expiresIn: '7d' }
    )

    // Create secure cookie with refresh token 
    response.cookie('jwt', refreshToken, {
        httpOnly: true, //accessible only by web server 
        secure: true, //https
        sameSite: 'None', //cross-site cookie 
        maxAge: 7 * 24 * 60 * 60 * 1000 //cookie expiry: set to match rT
    })



  
      return response.status(200).json({
        message: 'Auth successful!',
        token: accesstoken
      });
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        error: error
      });
    }
}
    
//security weakness if
// return res.status(404).json({
//message: 'Mail not found, user doesn\'t exist'})

const refresh = (req, res) => {
  const cookies = req.cookies

  if (!cookies?.jwt) return res.status(401).json({ message: 'Unauthorized' })

  const refreshToken = cookies.jwt

  jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
          if (err) return res.status(403).json({ message: 'Forbidden' })

          const currentUser = await User.findOne({ userId: decoded.user.user_id }).exec()

          if (!currentUser) return res.status(401).json({ message: 'Unauthorized' })

          const accessToken = jwt.sign(
              {
                  "UserInfo": {
                      "userId": currentUser.user_id,
                      "roles": currentUser.roles
                  }
              },
              process.env.ACCESS_TOKEN_SECRET,
              { expiresIn: '15m' }
          )

          res.json({ accessToken })
      }
  )
}


export const deleteUser = (request, response, next) => {
  userModel.deleteOne({ _id: request.params.userId })
  .exec()
  .then(result => {
    response.status(200).jsons({
      message: 'User deleted!'
    });
  })
  .catch(error => {
    console.log(error);
    response.status(500).json({
      error: error
    });
  })
}