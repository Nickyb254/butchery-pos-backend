import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    employees: []
  },
  reducers: {
    getEmployee: (state, action) => {
      console.log(action.payload);
      if (Array.isArray(action.payload)) {
        state.employees = action.payload.map(employee => ({
          id: employee._id,
          name: employee.employee_name,
          role: employee.designation,
          phone: employee.phone_number,
          email: employee.email
        }));
      } else {
        console.error("Payload is not an array or is undefined/null.");
      }
    }
    
  }
})

export const { getEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;