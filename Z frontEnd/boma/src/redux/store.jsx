import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/employees/AllEmployees.jsx';

 const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});
export default store;