import mongoose from "mongoose";
import CustomerModel  from '../models/customers.js';
import asyncErrorHandler from "../../utils/asyncErrorHandler.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getAllCustomers = (request, response, next) => {
  CustomerModel.find()
    .select('customer_id customer_name email customer_phone refreshToken')
    .exec()
    .then(docs => {
      //console.log(doc);
      const res = {
        count: docs.length,
        customers: docs.map(doc =>{
          return{
            _id: doc._id,
            customer_name: doc.customer_name,
            email: doc.email,
            customer_phone: doc.customer_phone,
            request: {
              type: "GET",
              url: "http://localhost:3000/customers/" + doc._id,
            }
          }
        })
      };
      response.status(200).json(res);
    })
    .catch(error => {
      console.log(error);
      response.status(500).json({
        error:error
      });
    });
  // response.status(200).json({
  //   message: 'Get Request from a customer!'
  // });
}



//searching a customer................................................................

export const getOneCstomer = (request, response, next) => {
  const id = request.params.customerId;
  CustomerModel.findById(id)
    .select('customer_id customer_name customer_phone refreshToken')
    .exec()
    .then(doc =>{
      //console.log('From database',doc);
      if(doc){
          response.status(200).json({
            customer: doc,
            request: {
              type: 'GET',
              description: 'Get all customers',
              url: '​http://localhost:3000/customers/',
            }
          });
      }
      else{
        response.status(404).json({
          message: "No valid entry found for provided ID!"
        });
      }
    })   
    .catch(error => {
      console.log(error);
      response.status(500).json({
        error:error
      });
    });  
}



//registering a customer ....................................................................

export const createCustomer = async(request, response, next) => {
  const {email, password, confirmPassword} = request.body
  console.log('pas',password)
  if (password !== confirmPassword) {
    return response.status(400).json({ message: 'Passwords do not match' });
  }
  await CustomerModel.find({email})
  .exec()
  .then(customer => {
    if( customer.length >= 1 ){
      return response.status(409).json({
        message: 'Mail exists'
      });
    }
    else {
      bcrypt.hash(password, 2, (err, hash) => {
        if(err){
          return response.status(500).json({
            error: err
          });
        } else{
          const customer = new CustomerModel({
            customer_name: request.body.customer_name,
            email: request.body.email,
            customer_phone: request.body.customer_phone,            
            password: hash
          });
          customer
          .save()
          .then(result => {
            // console.log('created customer',result);
            response.status(201).json({
              message: 'Customer created!',
              id: result._id,
              request: {
                type: 'GET',
                url: "http://localhost:3000/customers/" + result._id,
              }
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
})}


export const updateCustomer = asyncErrorHandler(async (req, res) => {
  
   const updateData = req.body;
   const result = await CustomerModel.updateOne({ _id: req.params.customersId }, updateData);    

   if (!result.matchedCount) {
     return res.status(404).json({ message: 'User not found' });
   }
   else if (result.matchedCount === 1) {res.status(200).json({ 
     message: 'Customer updated successfully', 
     request: {
       type: 'GET',
       description: 'Get all customers',
       url: '​http://localhost:3000/customers/',
     }
   })}
})

// CUSTOMER LOG IN..........................................................................

export const customerLogIn = asyncErrorHandler(async (request, response, next) => {
  
  const customers = await CustomerModel.find({ email: request.body.email }).exec();

  if (customers.length < 1) {
    return response.status(401).json({
      message: 'Auth failed!'
    });
  }

  const customer = customers[0];
  const passwordMatch = await bcrypt.compare(request.body.password, customer.password);

  if (!passwordMatch) {
    return response.status(401).json({
      message: 'Auth failed!'
    });
  }

  const accessToken = jwt.sign(
    {email: customer.email, customerId: customer._id },
    process.env.JWT_SECRET_KEY,
    {expiresIn: "13s"}
  );


  const refreshToken = jwt.sign(
    {email: customer.email, customerId: customer._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '15min' }
  )

  // Create secure cookie with refresh token 
  response.cookie('jwt', refreshToken, {httpOnly: true, secure: false, sameSite: 'None', maxAge: 15 * 60 * 1000 })

  // Saving refreshToken with current user //cookie expiry: set to match rT 7 * 24 * 60 * 60 * 1000
  customer.refreshToken = refreshToken
  const result = customer.save()
  console.log('New refresh token saved with user', result)

    return response.status(200).json({
      accessToken,
      name: customer.customer_name,
      id: customer._id
    });
})


// RefreshTokem.......................................................................................
export const handleRefreshToken = asyncErrorHandler(async (request, response, next) => {
  const cookies = request.cookies

  if (!cookies?.jwt) return response.sendStatus(401).json({ message: 'Unauthorized!'})
    const refreshToken = cookies.jwt
    const currentCustomer = await CustomerModel.findOne({ refreshToken }).exec()
  
  if (!currentCustomer) return response.status(403).json({ message: 'Forbidden! Not a valid customer' })

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
      
          if (currentCustomer.email !== decoded.email) {
              // Handle unauthorized access
              return response.status(403).json({ message: 'Forbidden! Customer not found' });
          } else {
            // Generate new access token
            const accessToken = jwt.sign(
                {"customerId": currentCustomer._id },
                process.env.JWT_SECRET_KEY,
                { expiresIn: '13s' }
              )
              response.status(200).json({message:'This is the new access Token for the customer', accessToken })
          }
      }
  )
})

//log out customer........................................................................
export const customerLogOut = asyncErrorHandler(async (request, response, next) => {
  
  const cookies = request.cookies
  if(!cookies?.jwt) return response.sendStatus(204) //no content
  const refreshToken = cookies.jwt

  //find refreshToken in Db
  const onlinecustomer = await CustomerModel.findOne({refreshToken}).exec()
  if(!onlinecustomer){
    response.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: false})
    return response.sendStatus(204)
  }

  //delete refreshToken from db
  onlinecustomer.refreshToken = ''
  const result = await onlinecustomer.save()
  console.log('logged out customer has no refreshToken', result)

  response.clearCookie('jwt',{httpOnly: true, sameSite: 'None', secure:false})
  response.sendStatus(204)
})


//delete customer ...........................................................................
export const deleteCustomer = async (req, res) => {
  try {
    const result = await CustomerModel.deleteOne({ _id: req.params.customersId });

    if (result.deletedCount === 1) {
      return res.status(200).json({ message: 'User deleted successfully' });
    }
    else if (!result.deletedCount ){
      res.status(404).json({ message: 'User not found' });
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error', error });
  }
}