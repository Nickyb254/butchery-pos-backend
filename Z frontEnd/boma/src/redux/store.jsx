import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../features/employee/employeeSlice';

 const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});
export default store;