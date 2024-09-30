import { apiSlice } from "../../api/apiSlice";
import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";

const customerAdapter = createEntityAdapter({})

const initialState = customerAdapter.getInitialState()

export const customerApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCustomers: builder.query ({
            query: ()=> '/customers',
                validateStatus: (response, result)=>{
                return response.status === 200 && !result.error
            },
        transformResponse: responseData => { 
            const customersData = responseData.customers.map(customer => {                
                customer.id = customer._id 
                return customer
                })
                return customerAdapter.setAll(initialState, customersData)
            },
        providesTags:(result, error, arg)=>{
            if(result?.ids){
                return [
                    {type:'Customer', id: 'LIST'},
                    ...result.ids.map(id=>({type:'Customer', id}))
                ]
            } else return [{type:'Customer', id: 'LIST'}]
        }
        }),
        addNewCustomer: builder.mutation({
            query: initialCustomer => ({
                url: '/customers',
                method: 'POST',
                body: {
                    ...initialCustomer,
                }
            }),
            invalidatesTags: [
                { type: 'Customer', id: "LIST" }
            ]
        }),
        updateCustomer: builder.mutation({
            query: initialCustomer => ({
                url: `/customers/${initialCustomer.id}`,
                method: 'PATCH',
                body: {
                    ...initialCustomer,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Customer', id: arg.id }
            ]
        }),
        deleteCustomer: builder.mutation({
            query: ( id ) => ({
                url: `/customers/${id}`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Customer', id: arg.id }
            ]
        }),
        customerLogin: builder.mutation({
            query: credentials =>({
                url: 'customers/login',
                method: 'POST',
                body: {...credentials}
            })
        }),
        customerLogOut: builder.mutation({
            query: ()=>({
                url: 'customers/log-out',
                method: 'POST',
            }),
            async onQueryStarted(arg,{dispatch, queryFulfilled}) {
                try{
                const data = await queryFulfilled
                console.log(data)
                dispatch(logOut())
                }catch(error){
                    console.log(error)
                }
            }
        }),
        refresh: builder.mutation({
            query: ()=> ({
                url: '/customers/refresh',
                method: 'GET'
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled}){
                try{
                    const {data} = queryFulfilled
                    const {accessToken} = data
                    dispatch(setCredentials({accessToken}))
                }catch (error){
                    console.log(error)
                }
            }
        }),
        //stripe checkout hook
        checkOut: builder.mutation({
            query: cartItems => ({
                url: '/stripe/create-checkout',
                method: 'POST',
                body: {
                    ...cartItems,
                }
            }),
            invalidatesTags: [
                { type: 'Cart', id: "LIST" }
            ]
        }),
    })
})


export const {
    useGetCustomersQuery, 
    useAddNewCustomerMutation, 
    useUpdateCustomerMutation,
    useDeleteCustomerMutation,
    useCustomerLoginMutation,
    useRefreshMutation,
    useCustomerLogOutMutation,
    useCheckOutMutation
} = customerApiSlice

// query result object
export const selectCustomersResult = customerApiSlice.endpoints.getCustomers.select()

// memoized selector
const selectCustomersData = createSelector(
    selectCustomersResult,
    customersResult => customersResult.data //normalized 
)

//necessary selectors
export const {
        selectAll: selectAllCustomers,
        selectById: selectCustomerById,
        selectIds: selectCustomerIds
 } = customerAdapter.getSelectors(state => selectCustomersData(state) ?? initialState)

export default customerApiSlice