import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employee: {}
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        sendProfile(state, action){
            state.employee = action.payload.data.employee
            // console.log(action)
        }
    }
})

export const selectEmployee = (state) =>state.employee.employee

export const {sendProfile} = employeeSlice.actions

export default employeeSlice.reducer