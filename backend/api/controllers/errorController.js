// GLOBAL ERROR HANDLER 
// removed from server line 137 app.use() to make the code clean
export default (error, request, response, next)=>{
    error.statusCode = error.status || 500
    // error.status = error.status || 'error'
    response.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message
    });
  }