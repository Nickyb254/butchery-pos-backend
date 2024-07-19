// const employeeReducers = (state = initialState, action) => {
//     // getEmployee: (state, action) => {
//       switch (action.type){
//        case 'START':
//         return{
//           fetchEmployeesStart: (state) => {
//           state.loading = true;
//           state.error = null;
//         },
//         };
//        case 'SUCCESS':
//           return{
//       fetchEmployeesSuccess: (state, action) => {
//         state.list = action.payload;
//         state.loading = false;
//       },
//     };
//     case 'FAILURE':
//       return{
//       fetchEmployeesFailure: (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       },
//     };
//     default:
//       return state;
//     }
//       // const data = action.payload;
//       // console.log(state);
//       // if ( data.length > 0) {
//       //   data.map(employee => ({
//       //     id: employee._id,
//       //     name: employee.employee_name,
//       //     role: employee.designation,
//       //     phone: employee.phone_number,
//       //     email: employee.email
//       //   }));
//       //   //console.log(data.employee_name);
//       // } else {
//       //   console.error("Payload is not an array or is undefined/null.");
//       //   return
//       // }
//     // }
    
//   }
// });
// // Combine Reducers
// const rootReducer = employeeReducers({
//   employee: employeeReducers,
// })
// export default rootReducer;
// // export const { getEmployee } = employeeSlice.actions;
// // export  { fetchEmployeesStart, fetchEmployeesSuccess, fetchEmployeesFailure } = employeeSlice.actions;
// // export default employeeSlice.reducer;
// export const selectEmployees = (state) => state.employees.employees;
// // export   default employeeReducer = combineReducers({employees : employeeSlice.reducer});