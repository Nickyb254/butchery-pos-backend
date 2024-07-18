import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    employees: []
  },
  reducers: {
    getEmployee: (state, action) => {
      const data = action.payload;
      // console.log(data);
      if ( data.length > 0) {
        data.map(employee => ({
          id: employee._id,
          name: employee.employee_name,
          role: employee.designation,
          phone: employee.phone_number,
          email: employee.email
        }));
        console.log(employee_id);
      } else {
        console.error("Payload is not an array or is undefined/null.");
        return
      }
    }
    
  }
})

export const { getEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;