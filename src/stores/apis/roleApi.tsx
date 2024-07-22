import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { pause } from "../../utils/utils";

interface Role {
    id?: string;
    name?: string;
}
interface Config   {
    url: string;
    method: string;
    body?: Role;
}

type Duration = { duration: number }
const time : Duration = {
    duration:100
}

const roleApi = createApi({
    reducerPath: "roles",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000",
        fetchFn:async (...args) => { // function to fetch duration request and response data Note: remove when go production
            await pause(time)
            return fetch(...args)
        }
    }),
    tagTypes: ['Role'],
    endpoints(builder) {
        return {
            fetchRole: builder.query<Role[], void>({
                query() {
                    return {
                        url: "/roles",
                        method: "GET"   
                    }
                },
                providesTags: ['Role'],
            }),
            createRole: builder.mutation<Role, Partial<Role>>({
                invalidatesTags: ["Role"], // ({result, error, role})=>{ return [{type:'Role', id:role.id}]} if have child fetching data
                query(data):Config {
                    return {
                        url: "/roles",
                        method: "POST",
                        body: data
                    }
                }
            }),
            updateRole: builder.mutation<Role, Partial<Role>>({
                invalidatesTags:["Role"],
                query(data):Config {
                    const {id,...body} = data;
                    return {
                        url: `/roles/${id}`,
                        method: "PUT",
                        body
                    }
                }
            }),
            deleteRole: builder.mutation<Role, Partial<Role>>({
                query(item):Config {
                    return {
                        url: `/roles/${item.id}`,
                        method: "DELETE"
                    }
                },
                invalidatesTags:['Role'],
            })   
        }
    }
}) 

 
export {roleApi}
    
     