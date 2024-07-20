import { createSlice } from '@reduxjs/toolkit';

const initialState =
     [
        {
          employee_name: "Menza",
          designation: "Boss mdogo",
          phone_number: "0799345876",
          email: "menzae@yahoo.com",
          password: "naweza2024"
        },
        {
            employee_name: "Menza",
            designation: "Boss mdogo",
            phone_number: "0799345876",
            email: "menzae@yahoo.com",
            password: "naweza2024"
          },
          {
            employee_name: "Menza",
            designation: "Boss mdogo",
            phone_number: "0799345876",
            email: "menzae@yahoo.com",
            password: "naweza2024"
          },
    ]   
  

const employeeSlice = createSlice({
    name: 'employees',
    initialState, 
    reducers: {
        employeeAdded: {
            reducer(state, action){
                state.push(action.payload)
            }
        }
    },
});


export const selectAllEmployees = (state) => state.employees
export default employeeSlice.reducer;
