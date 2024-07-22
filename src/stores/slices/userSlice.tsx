import { createSlice } from "@reduxjs/toolkit";
import { deleteUser,addUser, fetchUser } from "../thunks/userThunk";
 
export interface UserState {
    id: number;
    name:string;
    age:number;
 }

interface InitialState {
    isLoadingUser: boolean;
    isCreatedLoading: boolean,
    isDeleteLoading: boolean,
    error: string | null;
    users:UserState[];
 }

const initialState: InitialState = {
    isLoadingUser: false,
    isDeleteLoading:false,
    isCreatedLoading:false,
    error: null,
    users:[]
 }
 
//create a slice
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        //add reducers here
    },
    extraReducers:(builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.isLoadingUser = true
                state.error =null
                })
            .addCase(fetchUser.fulfilled, (state,action) => {
                state.isLoadingUser = false
                state.error = null
                state.users = action.payload
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.isLoadingUser = false
                state.error = action.error.message || 'Error occurred'
            })
        // add user
        builder
            .addCase(addUser.pending, (state) => {
                state.isCreatedLoading = true
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.isCreatedLoading = false
                state.users.push(action.payload)
            })
            .addCase(addUser.rejected, (state, action) => {
                state.isCreatedLoading = false
                state.error = action.error.message || 'Error occurred'
            }) 
        
         // add user
         builder
         .addCase(deleteUser.pending, (state) => {
             state.isDeleteLoading = true
         })
         .addCase(deleteUser.fulfilled, (state,action) => {
             state.isDeleteLoading = false
             state.users = state.users.filter((user) => user.id !== action.payload.id)
         })
         .addCase(deleteUser.rejected, (state, action) => {
             state.isDeleteLoading = false
             state.error = action.error.message || 'Error occurred'
         }) 
    }
})

export const useReducer = userSlice.reducer