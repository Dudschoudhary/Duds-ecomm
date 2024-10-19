import { configureStore } from "@reduxjs/toolkit";
import ecomSlice from './ecomSlice'
export const store = configureStore({
    reducer:{
        products:ecomSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
