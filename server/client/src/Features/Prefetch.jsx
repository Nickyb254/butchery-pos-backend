import { store } from "../app/index";
import stockApiSlice from "./Stock/stockApiSlice";
import customerApiSlice from "./Customers/CustomerApiSlice";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import React from 'react'

const Prefetch = () => {

    useEffect(() => {
    const stock = store.dispatch(stockApiSlice.endpoints.getStock.initiate())
    // const customers = store.dispatch(customerApiSlice.endpoints.getCustomers.initiate())
    // console.log(customers)
    return ()=>{
        stock.unsubscribe()
        // customers.unsubscribe()
    }

    }, [])

  return <Outlet/>
}

export default Prefetch