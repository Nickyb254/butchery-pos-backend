import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apiSlice";

const salesAdapter = createEntityAdapter({})

const initialState = salesAdapter.getInitialState()

export const saleApiSlice = apiSlice.injectEndpoints({
    endpoints: builder =>({
        getAllSales: builder.query({
            query: ()=>'/sales',
                validateStatus: (response, result)=>{
                    return response.status === 200 && !result.error
                },
        transformResponse: responseData => {
            const salesData = responseData.saleProducts.map(sale => {
                sale.id = sale._id
                return sale
            })
            return salesAdapter.setAll(initialState, salesData)
        },
        providesTags: (result, error, arg)=> {
            if(result?.ids){
                return [
                    {type: 'Sale', id: 'LIST'},
                    ...result.ids.map(id=>({type:'Sale', id}))
                ]
            } else return [{type:'Sale', id}]
        }
        }),
        addNewSale: builder.mutation({
            query: initialSale => ({
                url: '/sales',
                method: 'POST',
                body: {
                    ...initialSale,
                }
            }),
            invalidatesTags: [
                { type: 'Sale', id: "LIST" }
            ]
        }),
        updateSale: builder.mutation({
            query: initialSale => ({
                url: `/sales/${initialSale.id}`,
                method: 'PATCH',
                body: {
                    ...initialSale,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Sale', id: arg.id }
            ]
        }),
        deleteSale: builder.mutation({
            query: ( id ) => ({
                url: `/sales/${id}`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Sale', id: arg.id }
            ]
        }),
    })
})

export const {
    useGetAllSalesQuery,
    useAddNewSaleMutation,
    useUpdateSaleMutation,
    useDeleteSaleMutation
    } = saleApiSlice

// query result object
export const selectSalesResult = saleApiSlice.endpoints.getAllSales.select()

// memoized selector
const selectSalesData = createSelector(
    selectSalesResult,
    salesResult => salesResult.data //normalized data
)

// getSelector provides all selection options 
export const {} = salesAdapter //continue to solve profile loss issue

export default saleApiSlice.reducer