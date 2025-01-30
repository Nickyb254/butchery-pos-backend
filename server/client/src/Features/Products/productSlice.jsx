import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myproduct : localStorage.getItem('myproduct') ? JSON.parse(localStorage.getItem('myproduct')) : "67430cf6cc4457c568943190"
}

const myProductSlice = createSlice({
    name: 'myproduct',
    initialState,
    reducers: {
        sendMyproduct(state, action){
            state.myproduct = action.payload
            localStorage.setItem('myproduct', JSON.stringify(state.myproduct))
        }
    }

})

export const selectMyproduct = (state) => state.myproduct.myproduct
export const {sendMyproduct} = myProductSlice.actions
export default myProductSlice.reducer