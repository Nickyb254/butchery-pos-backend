import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employee/employeeSlice';
import userReducer from './users/userSlice';

 const store = configureStore({
  reducer: {
    employees: employeeReducer,
    users: userReducer
  },
});
export default store;