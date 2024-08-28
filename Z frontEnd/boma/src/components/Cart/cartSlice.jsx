import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
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
                localStorage.setItem('cart', JSON.stringify(state.items))
            }
        },
        changeQuantity(state, action){
            
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        cartTotalValue(state, action){
            let {price, quantity} = action.payload
            
            let {total, cartQuantity} = state.cartItems.reduce(
            (totalCartValue, itemCost) => {
                // const {quantity} = state.cartItems
                    itemCost = price * quantity
                    totalCartValue.total =+ itemCost
                    totalCartValue.cartQuantity =+ quantity
                return totalCartValue
                },
                {
                    quantity: 0,
                    total: 0,
                  }
            )
            state.totalCartQuantity = quantity
            state.totalCartValue = total
        }
    }
})
export const { addToCart, changeQuantity, toggleStatusTab, addTotalCost, cartTotalValue } = cartSlice.actions;
export default cartSlice.reducer;

// const existingProductIndex = state.cartItems.findIndex((stockItem) => stockItem._id === action.payload._id)

//             if(existingProductIndex >= 0){
//                 state.cartItems[existingProductIndex] =
//             }