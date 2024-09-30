// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apiSlice";
import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";

const stockAdapter = createEntityAdapter({})

const initialState = stockAdapter.getInitialState()


const stockApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getStock: builder.query({
            query: () => '/stock',
            validateStatus: (response, result) => {                
                return response.status === 200 && !result.isError
            },
            // keepUnUsedDataFor: 5,
            transformResponse: responseData => {                          
                const loadedStock = responseData.doc.map(stock =>{
                    stock.id = stock._id                    
                    return stock
                })               
                return stockAdapter.setAll(initialState, loadedStock)
            },
            providesTags: (result, error, arg) => {                                              
                if(result?.ids){
                   return [
                        {type: 'stock', id: 'LIST'},
                        ...result.ids.map(id => ({type:'stock', id}))
                    ]
                } else {return [{type:'stock', id:'LIST'}] }
            }
        }),
        updateStock: builder.mutation({
            query: initialStock => ({
                url: `/stock/${initialStock._id}`,
                method: 'PATCH',
                body: {
                    ...initialStock,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Stock', id: arg.id }
            ]
        }),
    })
})

export const {useGetStockQuery, useUpdateStockMutation} = stockApiSlice;

//this is the query result object
export const selectStockResult = stockApiSlice.endpoints.getStock.select()

//creates a memoized selector
const selectStockData = createSelector(
    selectStockResult,
    stockResult => stockResult.data    //normalized state object with ids and entries
)


// get selectors creates all selectors automatically, we only have to rename them in destructuring
export const {
    selectAll: selectAllStock,
    selectById: selectStockById,
    selectIds: selectStockIds
} = stockAdapter.getSelectors(state => selectStockData(state) ?? initialState )

export default stockApiSlice