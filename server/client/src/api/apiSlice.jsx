import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
    tagTypes: ['Stock', 'User', 'Employee', 'Customer', 'Order'],
    endpoints: builder => ({})
})