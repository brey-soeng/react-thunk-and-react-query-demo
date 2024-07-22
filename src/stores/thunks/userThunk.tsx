
import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserState } from "../slices/userSlice";
import useAxios from "../../utils/axios";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
 export const fetchUser:any = createAsyncThunk (
    'users/fetch',
    async ()  => {
      const response = await useAxios.get('/users')
      return response.data
    }
 )
  

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 export const deleteUser:any = createAsyncThunk (
    'users/delete',
    async (user:UserState)  => {
      const response = await useAxios.delete(`/users/${user.id}`)
      return response.data
    }
 )

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 export const addUser:any = createAsyncThunk (
    'users/add',
    async (payload:UserState)  => {
      const response = await useAxios.post(`/users`, payload)
      return response.data
    }
 )