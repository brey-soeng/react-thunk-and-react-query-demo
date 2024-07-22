import {  createAsyncThunk } from "@reduxjs/toolkit";
import useAxios from "../../utils/axios";
import { UserState } from "../slices/userSlice";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
 export const addUser:any = createAsyncThunk (
    'users/add',
    async (payload:UserState)  => {
        const response = await useAxios.post('/users',payload)
      return response.data
    }
  )