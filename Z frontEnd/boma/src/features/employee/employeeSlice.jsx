import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState =
     [
        {
          employeeName: "Menza",
          designation: "Boss mdogo",
          phoneNumber: "0799345876",
          email: "menzae@yahoo.com",
          password: "naweza2024"
        },
        {
            employeeName: "Menza",
            designation: "Boss mdogo",
            phoneNumber: "0799345876",
            email: "menzae@yahoo.com",
            password: "naweza2024"
          },
          {
            employeeName: "Menza",
            designation: "Boss mdogo",
            phoneNumber: "0799345876",
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
            },
            prepare(employeeName, designation, phoneNumber, email, password){
              return{
                payload: {
                  id: nanoid(),
                  employeeName,
                  designation,
                  phoneNumber,
                  email,
                  password
                }
              }
            }
        }
    },
});


export const selectAllEmployees = (state) => state.employees
export const { employeeAdded } = employeeSlice.actions
export default employeeSlice.reducer;
