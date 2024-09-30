import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders")) : null,
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        getOrders(state, action){
            state.orders = action.payload
            localStorage.setItem("orders", JSON.stringify(state.orders))
        },
    },
    
})

export const selectOrders = (state) =>state.orders.orders

export const {getOrders} = orderSlice.actions

export default orderSlice.reducer