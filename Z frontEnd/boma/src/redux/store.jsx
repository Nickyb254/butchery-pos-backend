import {configureStore} from '@reduxjs/toolkit'
import userReducer from './actions/user/userSlice.jsx'
import employeeReducer from './actions/employees/AllEmployeesSlice.jsx'

const store = configureStore({
  reducer: {
      user: userReducer,
      employees: employeeReducer
  }
})

export default store