import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const apiUrl = import.meta.env.VITE_API_BASE_URL
export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: apiUrl}),
    tagTypes: ['Stock', 'User', 'Employee', 'Customer', 'Order'],
    endpoints: builder => ({})
})