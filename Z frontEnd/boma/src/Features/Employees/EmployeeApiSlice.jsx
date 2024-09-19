import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../api/apiSlice";
import { logOut, setCredentials } from "../Auth/AuthSlice";

const employeesAdapter = createEntityAdapter({})

const initialState = employeesAdapter.getInitialState()

export const employeeApiSlice = apiSlice.injectEndpoints({
    endpoints: builder =>({
        employeeLogin: builder.mutation({
            query: credentials => ({
                url: 'employees/login',
                method: 'POST',
                body: {...credentials}
            })
        }),
        employeeLogOut: builder.mutation({
            query: ()=>({
                url: 'employees/logout',
                method: 'POST'
            }),
            async onQueryStarted (arg, {dispatch, queryFulfilled}){
                try{
                    const data = await queryFulfilled
                    console.log(data)
                    dispatch(logOut())
                } catch (error){
                    console.log(error)
                }
            }
        }),
        getAllEmployees: builder.query({
            query: ()=>'/employees',
                validateStatus: (response, result)=>{
                    return response.status === 200 && !result.error
                },
        transformResponse: responseData => {
            const employeesData = responseData.result.map(employee => {
                employee.id = employee._id
                return employee
            })
            return employeesAdapter.setAll(initialState, employeesData)
        },
        providesTags: (result, error, arg)=> {
            if(result?.ids){
                return [
                    {type: 'Employee', id: 'LIST'},
                    ...result.ids.map(id=>({type:'Employee', id}))
                ]
            } else return [{type:'Employee', id}]
        }
        }),
        addNewEmployee: builder.mutation({
            query: initialEmployee => ({
                url: '/employees/signup',
                method: 'POST',
                body: {
                    ...initialEmployee,
                }
            }),
            invalidatesTags: [
                { type: 'Employee', id: "LIST" }
            ]
        }),
        updateEmployee: builder.mutation({
            query: initialEmployee => ({
                url: `/employees/${initialEmployee.id}`,
                method: 'PATCH',
                body: {
                    ...initialEmployee,
                }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Employee', id: arg.id }
            ]
        }),
        disableEmployee: builder.mutation({
            query: ( id ) => ({
                url: `/user/disable/${id}`,
                method: 'PATCH',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Employee', id: arg.id }
            ]
        }),
        deleteEmployee: builder.mutation({
            query: ( id ) => ({
                url: `/employees/${id}`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'Employee', id: arg.id }
            ]
        }),
    })
})

export const {
    useEmployeeLoginMutation, 
    useEmployeeLogOutMutation, 
    useGetAllEmployeesQuery,
    useAddNewEmployeeMutation,
    useUpdateEmployeeMutation,
    useDisableEmployeeMutation,
    useDeleteEmployeeMutation
    } = employeeApiSlice

// query result object
export const selectEmployeesResult = employeeApiSlice.endpoints.getAllEmployees.select()

// memoized selector
const selectEmployeesData = createSelector(
    selectEmployeesResult,
    employeesResult => employeesResult.data //normalized data
)

// getSelector provides all selection options 
export const {} = employeesAdapter //continue to solve profile loss issue

export default employeeApiSlice.reducer