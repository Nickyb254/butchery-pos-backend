import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';

configDotenv()

const checkAuth = (request, response, next) => {
  try{
    const token = request.headers.authorization.split(" ")[1];
    console.log(token);
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
    request.userData = decoded;
    next();
  }  
  catch(error){
    return response.status(401).json({
      message: 'Auth failed!'
    });
  } 
};

export default checkAuth;