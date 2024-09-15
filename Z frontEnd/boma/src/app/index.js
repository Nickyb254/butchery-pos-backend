import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Features/Cart/cartSlice';
// import stockReducer from '../Features/Stock/stockApiSlice';
import { apiSlice } from "../api/apiSlice";
import {adminApiSlice} from "../Features/Admin/AdminApiSlice";
import { employeeApiSlice } from "../Features/Employees/EmployeeApiSlice";
import employeeReducer from '../Features/Employees/EmployeeSlice'
import {customerApiSlice} from "../Features/Customers/CustomerApiSlice";
import customersReducer from "../Features/Customers/CustomerSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [adminApiSlice.reducerPath]: adminApiSlice.reducer,
        [employeeApiSlice.reducerPath]: employeeApiSlice.reducer,
        [customerApiSlice.reducerPath]: customerApiSlice.reducer,
        cart: cartReducer,
        employee: employeeReducer,
        customers: customersReducer,
        // stock: stockReducer,
        // user: ...
    },
    middleware: getDefaultMiddleWare =>
        getDefaultMiddleWare()
            .concat(apiSlice.middleware)
            .concat(adminApiSlice.middleware)
            .concat(employeeApiSlice.middleware)
            .concat(customerApiSlice.middleware),
    devTools: true
})