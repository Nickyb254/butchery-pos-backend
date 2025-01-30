// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apiSlice";
import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";

const ordersAdapter = createEntityAdapter({})

const initialState = ordersAdapter.getInitialState()


const ordersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getOrders: builder.query({
            query: () => '/orders',
            validateStatus: (response, result) => {                
                return response.status === 200 && !result.isError
            },
            // keepUnUsedDataFor: 5,
            transformResponse: responseData => {  
                // console.log('responseData:',responseData)                        
                const loadedOrder = responseData.orders.map(order =>{
                    order.id = order._id                    
                    return order
                })               
                return ordersAdapter.setAll(initialState, loadedOrder)
            },
            providesTags: (result, error, arg) => {                                              
                if(result?.ids){
                   return [
                        {type: 'order', id: 'LIST'},
                        ...result.ids.map(id => ({type:'order', id}))
                    ]
                } else {return [{type:'order', id:'LIST'}] }
            }
        }),
        getCustomerOrders: builder.query({
            query: () => '/customers/:id/orders',
            validateStatus: (response, result) => {                
                return response.status === 200 && !result.isError
            },
            // keepUnUsedDataFor: 5,
            transformResponse: responseData => {  
                // console.log('responseData:',responseData)                        
                const loadedOrder = responseData?.map(order =>{
                    order.id = order._id                    
                    return order
                })               
                return ordersAdapter.setAll(initialState, loadedOrder)
            },
            providesTags: (result, error, arg) => {                                              
                if(result?.ids){
                   return [
                        {type: 'order', id: 'LIST'},
                        ...result.ids.map(id => ({type:'order', id}))
                    ]
                } else {return [{type:'order', id:'LIST'}] }
            }
        }),
    })
})

export const {useGetOrdersQuery, useGetCustomerOrdersQuery} = ordersApiSlice;

//this is the query result object
export const selectOrdersResult = ordersApiSlice.endpoints.getOrders.select()

//creates a memoized selector
const selectOrdersData = createSelector(
    selectOrdersResult,
    ordersResult => ordersResult.data    //normalized state object with ids and entries
)


// get selectors creates all selectors automatically, we only have to rename them in destructuring
export const {
    selectAll: selectAllOrders,
    selectById: selectOderById,
    selectIds: selectOderIds
} = ordersAdapter.getSelectors(state => selectOrdersData(state) ?? initialState )

export default ordersApiSlice