import {getOrdersByCustomerId} from "../services/orderService.js"; 
import asyncErrorHandler from "../../utils/asyncErrorHandler.js"
// import customError from "../../utils/customError.js";

export const getCustomerOrders =  asyncErrorHandler(async (req, res, next) => {
    const customerId = req.params.id; // or wherever you get the customer ID

    try {
        const orders = await getOrdersByCustomerId(customerId);
        res.status(200).json(orders); 
    } catch (error) {
        next(error)
    }
});

// const error = new customError('No orders for provided customer Id!', 404)