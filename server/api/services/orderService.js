import OrderModel from "../models/order.js";
import stockModel from "../models/stock.js";

export const getOrdersByCustomerId = async (customerId) => {
    let productId
    let products
    try {        
        const orders = await OrderModel.find( customerId );
        const productsPromises = orders.map( async(order) => {
            productId = order['products']
            console.log('productId:',  productId)
            await stockModel.findById(productId)
            //not working as expected, have to remove UUID
        })

         products = await Promise.all(productsPromises)
        .then(console.log('products:',  products))
        return orders;
    } catch (error) {
        throw new Error('Error fetching orders: ' + error.message);
    }
};