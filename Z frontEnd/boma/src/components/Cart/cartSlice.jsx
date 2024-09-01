import { createSlice } from "@reduxjs/toolkit";

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
            }else{

                let itemAdded = {...action.payload, quantity: 1}
                state.cartItems.push(itemAdded)
                localStorage.setItem('cart', JSON.stringify(state.cartItems))
            }
        },
        changeQuantity(state, action){
            
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
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
        }
    }
})
export const { addToCart, changeQuantity, getTotals } = cartSlice.actions;
export default cartSlice.reducer;

// const existingProductIndex = state.cartItems.findIndex((stockItem) => stockItem._id === action.payload._id)

//             if(existingProductIndex >= 0){
//                 state.cartItems[existingProductIndex] =
//             }