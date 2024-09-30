import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    totalCartQuantity: 0,
    totalCartValue: 0,
    // statusTab: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const existingIndex = state.cartItems.findIndex(
                (item) => item._id === action.payload._id
              );

              if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                  ...state.cartItems[existingIndex],
                  quantity: state.cartItems[existingIndex].quantity + 1,
                };
                // toast.info("Increased product quantity", {
                //     position: "bottom-left",
                //   });
            }else{

                let itemAdded = {...action.payload, quantity: 1}
                state.cartItems.push(itemAdded)
                localStorage.setItem('cart', JSON.stringify(state.cartItems))
            }
        },
        decreaseCart(state, action){
            const itemIndex = state.cartItems.findIndex(
                (item) => item._id === action.payload._id)
            
                if(state.cartItems[itemIndex].quantity > 1){
                    state.cartItems[itemIndex].quantity -= 1
                }
                else if (state.cartItems[itemIndex].quantity === 1){
                    const nextCartItems = state.cartItems.filter(
                        (item)=> item._id !== action.payload._id
                    )
                    state.cartItems = nextCartItems
                    }               


            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        removeFromCart(state, action){            
            const nextCartItems = state.cartItems.filter((item)=> action.payload._id !== item._id)            
            state.cartItems = nextCartItems
        },
        getTotals(state, action){
            let {total, quantity} = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const {price, quantity} = cartItem
                    const itemValue = price * quantity

                    cartTotal.total += itemValue
                    cartTotal.quantity += quantity

                    return cartTotal
                },
            {
                total: 0,
                quantity: 0
            })


            state.totalCartValue = total
            state.totalCartQuantity = quantity
        },
        clearCart(state, action) {
            state.cartItems = [];
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
            // toast.error("Cart cleared", { position: "bottom-left" });
          },
    }
})
export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } = cartSlice.actions;
export const selectCart = (state) => state.cart.cartItems
export default cartSlice.reducer;