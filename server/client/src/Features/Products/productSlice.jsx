import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myproduct : localStorage.getItem('myproduct') ? JSON.parse(localStorage.getItem('myproduct')) : null
}

const myProductSlice = createSlice({
    name: 'myproduct',
    initialState,
    reducers: {
        sendMyproduct(state, action){
            state.myproduct = action.payload
            localStorage.setItem('myproduct', JSON.stringify(state.myproduct))
        },
        clearSelectedProduct(state, action){
            state.myproduct = null
            localStorage.setItem('myproduct', JSON.stringify(state.myproduct))
        }
    }       
})

export const selectMyproduct = (state) => state.myproduct.myproduct
export const {sendMyproduct, clearSelectedProduct} = myProductSlice.actions
export default myProductSlice.reducer