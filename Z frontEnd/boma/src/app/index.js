import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Features/Cart/cartSlice';
// import stockReducer from '../Features/Stock/stockApiSlice';
import { apiSlice } from "../api/apiSlice";
import {adminApiSlice} from "../Features/Admin/AdminApiSlice";
import { employeeApiSlice } from "../Features/Employees/EmployeeApiSlice";
import employeeReducer from '../Features/Employees/EmployeeSlice'
import {customerApiSlice} from "../Features/Customers/CustomerApiSlice";
import customersReducer from "../Features/Customers/CustomerSlice";
import ordersApiSlice from "../Features/Orders/OrdersApiSlice";
import ordersReducer from "../Features/Orders/OrderSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [adminApiSlice.reducerPath]: adminApiSlice.reducer,
        [employeeApiSlice.reducerPath]: employeeApiSlice.reducer,
        [customerApiSlice.reducerPath]: customerApiSlice.reducer,
        [ordersApiSlice.reducerPath]: ordersApiSlice.reducer,
        cart: cartReducer,
        employee: employeeReducer,
        customers: customersReducer,
        orders: ordersReducer,
        // stock: stockReducer,
        // user: ...
    },
    middleware: getDefaultMiddleWare =>
        getDefaultMiddleWare()
            .concat(apiSlice.middleware)
            .concat(adminApiSlice.middleware)
            .concat(employeeApiSlice.middleware)
            .concat(customerApiSlice.middleware)
            .concat(ordersApiSlice.middleware),
    devTools: true
})