import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:  [], //localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) :
    statusTab: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const {_id, quantity} = action.payload;
            const indexID = (state.items).findIndex(item => item._id === _id)
            if(indexID >=0){
                state.items[indexID].quantity += quantity
            }else{
                state.items.push({_id, quantity});
            }
        },
       
        toggleStatusTab(state){
            if(state.statusTab === false){
                state.statusTab = true;
            }else{
                state.statusTab = false;
            }
        }
    }
})
export const { addToCart, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;