import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apiSlice";

const initialState = {
    customer: localStorage.getItem("customer") ? JSON.parse(localStorage.getItem("customer")) : null,
}

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        customerProfile(state, action){
            state.customer = action.payload
            localStorage.setItem("customer", JSON.stringify(state.customer))
        },
        logOutCustomer(state, action){
            state.customer = null
            localStorage.setItem("customer", JSON.stringify(state.customer))
        },
    },
    
})

export const selectCustomer = (state) =>state.customers.customer

export const {customerProfile, logOutCustomer} = customerSlice.actions

export default customerSlice.reducer