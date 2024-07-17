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


// {
//   "result": [
//       {
//           "_id": "66782baad5ef29c8832306cf",
//           "employee_name": "Mike",
//           "designation": "Engineer",
//           "phone_number": "0701305876",
//           "email": "nickyb254@gmail.com",
//           "password": "mypasswtr.",
//           "__v": 0
//       },
//       {
//           "_id": "66782bd0d5ef29c8832306d3",
//           "employee_name": "Mark",
//           "designation": "Loader",
//           "phone_number": "0701305876",
//           "email": "nickyb254@gmail.com",
//           "password": "mypasswtr.",
//           "__v": 0
//       },
//       {
//           "_id": "667bdc33a7384bee436cd652",
//           "employee_name": "James",
//           "designation": "Electrician",
//           "phone_number": "0701305876",
//           "email": "nickyb254@gmail.com",
//           "password": "mypasswtr.",
//           "__v": 0
//       },
//       {
//           "_id": "667bf10b8fc6df8459779c3d",
//           "employee_name": "Peter",
//           "designation": "Driver",
//           "phone_number": "0702305876",
//           "email": "nickyb254@gmail.com",
//           "password": "mypasswtr.",
//           "__v": 0
//       },
//       {
//           "_id": "668b7ee763d445d952ee64b6",
//           "employee_name": "Denver",
//           "designation": "Driver",
//           "phone_number": "0702305876",
//           "email": "nickyb254@gmail.com",
//           "password": "mypasswtr.",
//           "__v": 0
//       },
//       {
//           "_id": "668d200eeb8af95329f9c48a",
//           "employee_name": "Mzae",
//           "designation": "Boss",
//           "phone_number": "072345832",
//           "email": "mzae@yahoo.com",
//           "password": "naweza2024",
//           "__v": 0
//       },
//       {
//           "_id": "668d2015eb8af95329f9c48d",
//           "employee_name": "Mzae",
//           "designation": "Boss",
//           "phone_number": "072345832",
//           "email": "mzae@yahoo.com",
//           "password": "naweza2024",
//           "__v": 0
//       },
//       {
//           "_id": "668d206ceb8af95329f9c490",
//           "employee_name": "Menza",
//           "designation": "Boss mdogo",
//           "phone_number": "0799345876",
//           "email": "menzae@yahoo.com",
//           "password": "naweza2024",
//           "__v": 0
//       }
//   ]
// }