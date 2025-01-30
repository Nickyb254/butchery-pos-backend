import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stock: localStorage.getItem('stock') ? JSON.parse(localStorage.getItem('stock')) : null
}

const stockSlice = createSlice({
    name: 'stock',
    initialState,
    reducers: {
        putStock (state, action){
            state.stock = action.payload
            localStorage.setItem('stock', JSON.stringify(state.stock))
        }
    }
})

export const selectStock = (state) => state.stock.stock
export const {putStock} = stockSlice.actions
export default stockSlice.reducer