import { configureStore, EnhancedStore,   } from "@reduxjs/toolkit";
import { useReducer } from "./slices/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { roleApi } from "./apis/roleApi";

const store: EnhancedStore = configureStore({
    reducer: {
        user: useReducer,
        [roleApi.reducerPath]: roleApi.reducer
    }, 

    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(roleApi.middleware)
    
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch)
export default store 
 
 
