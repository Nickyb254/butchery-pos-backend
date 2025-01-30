// GLOBAL ERROR HANDLER 
// removed from server line 137 app.use() to make the code clean
import winston from 'winston'

const customFormat = winston.format.printf(({ timestamp, level, message, stack, method, url }) => {
    return `${timestamp} [${level}] ${message} ${stack ? '\n' + stack : ''} ${method ? 'Method: ' + method : ''} ${url ? 'URL: ' + url : ''}`;
  });
  
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      customFormat
    ),
    // configure logger
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp(),
                customFormat
              ),
        }),
        new winston.transports.File({
            filename: 'error.log',
            format: customFormat // Log file format
        }),
    ],
});

export default (error, request, response, next)=>{
    error.statusCode = error.status || 500
    // error.status = error.status || 'error'

    // Log the error details
    logger.error({
        message: error.message,
        stack: error.stack, // Stack trace for debugging
        statusCode: error.statusCode,
        method: request.method,
        url: request.originalUrl,
        body: request.body,
    });
    
    response.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message
    });
  }