class customError extends Error {
    constructor(message, status){
        super(message)

        this.status = status;
        this.statusCode = status >= 400 && status < 500 ? 'fail' : 'error'

        this.isOperational = true
        
        Error.captureStackTrace(this, this.constructor)
    }
}

export default customError;