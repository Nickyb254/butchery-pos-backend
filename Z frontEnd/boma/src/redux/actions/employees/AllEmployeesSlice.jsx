// import { createSlice } from '@reduxjs/toolkit';

// const employeeSlice = createSlice({
//   name: 'employees',
//   initialState: {
//     data: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {
//     fetchEmployeesStart: (state) => {
//       state.status = 'loading';
//     },
//     fetchEmployeesSuccess: (state, action) => {
//       state.status = 'succeeded';
//       state.data = action.payload;
//     },
//     fetchEmployeesFailure: (state, action) => {
//       state.status = 'failed';
//       state.error = action.payload;
//     },
//   },
// });

// export const { fetchEmployeesStart } = employeeSlice.actions;
// export const { fetchEmployeesSuccess } = employeeSlice.actions;
// export const { fetchEmployeesFailure } = employeeSlice.actions;
// export default employeeSlice.reducer;
