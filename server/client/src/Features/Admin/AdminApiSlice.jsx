import { apiSlice } from "../../api/apiSlice";
import { logOut, setCredentials } from "../Auth/AuthSlice";

export const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: builder=> ({
        login: builder.mutation({
            query: credentials =>({
                url: 'api/v1/user/login',
                method: 'POST',
                body: {...credentials}
            })
        }),
        sendLogOut: builder.mutation({
            query: ()=>({
                url: 'api/v1/user/logout',
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
                url: 'api/v1/user/refresh',
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
        })
    })
})

export const {useLoginMutation, useSendLogOutMutation} = adminApiSlice

export default adminApiSlice.reducer