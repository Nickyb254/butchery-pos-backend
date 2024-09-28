import express from 'express'
import Stripe from 'stripe'
import { configDotenv } from "dotenv";
import OrderModel from '../models/order.js';
import mailOrder from '../../utils/mailOrder.js';
// import util from 'util';

const app = express()
const router = express.Router()
configDotenv()

const stripe = new Stripe(process.env.STRIPE_KEY);
let carts
let userId
let cartItemsIds

export const checkOut = ('/create-checkout-session', async (req, res) => {
 
  try {
    //const {carts, userId} = req.body //stopped passing cart to customer metadata-- 500 character limit
     carts = req.body.carts
     userId = req.body.userId
     
     // create array of product Ids
   cartItemsIds = carts.map((item) => item._id)
              
    //create a customer    
    const customer = await stripe.customers.create({
      metadata: {
        userId
      }
    })

   const line_items = carts?.map(item => {  
        return  {
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.product_name,
              images: [item.stock_image],
              metadata: {
                id: item._id
              }
            },
            unit_amount: item.price,
          },
          quantity: item.quantity,
        }
    })
      
   //stripe customer created is refrenced in the session using Id
   const session = await stripe.checkout.sessions.create({
    phone_number_collection: {
      enabled: true
    },
    shipping_address_collection: {
      allowed_countries: ['US', 'CA', 'KE'],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 0,
            currency: 'usd',
          },
          display_name: 'Free shipping',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 5,
            },
            maximum: {
              unit: 'business_day',
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 1500,
            currency: 'usd',
          },
          display_name: 'Next day air',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 1,
            },
            maximum: {
              unit: 'business_day',
              value: 1,
            },
          },
        },
      },
    ], 
    customer: customer.id,
    line_items: line_items,
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/customers/profile/checkout`,
    cancel_url: `${process.env.CLIENT_URL}/customers/profile`,
  });
  res.send({url: session.url});
  }catch (error){
    console.log("checkOut error:", error)
  }

});

// FUNCTION TO CREATE ORDER IN DB..............................................................
const createOrder = async(cartItemsIds, session) => {
  //parse creates array of cart obj
  // const cartItems = JSON.parse(customer.metadata.cart) //removed cart from customer metadata
  const newOrder = new OrderModel({
    customerId: session.customer,
    email: session.customer_details["email"],
    paymentIntent: session.payment_intent,
    products: cartItemsIds,
    subtotal: session.amount_subtotal,
    total: session.amount_total,
    shipping: session.customer_details,
    payment_status: session.payment_status
  })

  try{
    const savedOrder = await newOrder.save()
    // const sentOrder = await mailOrder({
    //   email: user.email,
    //   subject: 'BOMA BUTCHERY- ORDER DETAILS',
    //   savedOrder
    // })
    // console.log("email sent", sentOrder)
    // response.status(200).json({
    //   status: 'Success!',
    //   message: 'A copy of the order was sent to your email.'
    // })

  }catch(error){
    console.log(error)
  }
}


// WEBHOOK TO HANDLE EVENTS FROM STRIPE........................................................
let endpointSecret 
//  endpointSecret = "whsec_b86b11ec9ed6fe6656c08daa6aacd5e80731cb7d175719e6787a832235003896"
  let data
  let eventType
export const stripeWebhook = (express.raw({type: 'application/json'}), (request, response) => {
  const event = request.body;  
  
  if (endpointSecret) {
    // Get the signature sent by Stripe
    const signature = request.headers['stripe-signature'];
    try {
      event = stripe.webhooks.constructEvent(
        request.body,
        signature,
        endpointSecret
      );
      console.log('webhook verified')
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return response.sendStatus(400);
    }
    //verified
    data = request.body.data.object,
    eventType = request.body.type

  } else{    
     //bypassed
     data = request.body.data
     eventType = request.body.type  
  }

    // Handle the event
    if(eventType ==='checkout.session.completed'){ 
      try {
        //impossible to use data from above despite having almost all info
        const session = event.data.object      
        // console.log('session creating order:', session)
        // console.log('Data creating order:', data.customer_details.email) //data failed
        createOrder( cartItemsIds, session, )
      }
      catch(error) {
        console.log(error)
  
      }
    }
    response.send();  
});






  // console.log(util.inspect(items, { showHidden: false, depth: null, colors: true }));
    // console.log(items)