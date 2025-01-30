import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employee: localStorage.getItem("employee") ? JSON.parse(localStorage.getItem("employee")) : null,
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        sendProfile(state, action){
            state.employee = action.payload.data.employee
            localStorage.setItem('employee', JSON.stringify(state.employee))
        }
    }
})

export const selectEmployee = (state) =>state.employee.employee

export const {sendProfile} = employeeSlice.actions

export default employeeSlice.reducer